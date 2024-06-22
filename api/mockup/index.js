const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Mockup request schema
const mockupRequestSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

let MockupRequest;
try {
  MockupRequest = mongoose.model('MockupRequest');
} catch {
  MockupRequest = mongoose.model('MockupRequest', mockupRequestSchema);
}

// API route to handle form submissions
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;
      const newRequest = new MockupRequest({ name, email, phone, message });
      await newRequest.save();
      res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
