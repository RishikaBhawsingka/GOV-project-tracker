import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  location: { type: String, default: 'Kolkata' },
  projectName: { type: String, default: '' },
  aptosTxHash: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Complaint = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);

export default Complaint;

