import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved' | 'closed' | 'flagged';
  aiSentiment?: 'positive' | 'neutral' | 'negative';
  aiPriority?: 'low' | 'medium' | 'high' | 'urgent';
  aiInsights?: string;
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'in-progress', 'resolved', 'closed', 'flagged'],
      default: 'new',
    },
    aiSentiment: {
      type: String,
      enum: ['positive', 'neutral', 'negative'],
    },
    aiPriority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
    },
    aiInsights: {
      type: String,
    },
    adminNotes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;



