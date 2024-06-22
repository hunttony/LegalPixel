import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

let cachedClient = null;
let cachedDb = null;

const connectToDatabase = async (uri) => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db(process.env.MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      const { db } = await connectToDatabase(process.env.MONGODB_URI);
      const collection = db.collection('submissions');

      const result = await collection.insertOne({
        name,
        email,
        phone,
        message,
        
        createdAt: new Date().toISOString(),
      });

      res.status(200).json({ message: 'Form submitted successfully', id: result.insertedId });
    } catch (error) {
      console.error('Error adding document: ', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
