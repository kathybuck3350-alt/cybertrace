import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IScamType extends Document {
  title: string;
  description: string;
  avgRecovery: string; // e.g., "$45,000"
  successRate: string; // e.g., "78%"
  recoveryMethods: string[];
  icon: string; // Icon name from lucide-react
  color: string; // Tailwind gradient classes
  createdAt: Date;
  updatedAt: Date;
}

const ScamTypeSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    avgRecovery: {
      type: String,
      required: [true, 'Average recovery is required'],
      trim: true,
    },
    successRate: {
      type: String,
      required: [true, 'Success rate is required'],
      trim: true,
    },
    recoveryMethods: {
      type: [String],
      default: [],
    },
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ScamType: Model<IScamType> = mongoose.models.ScamType || mongoose.model<IScamType>('ScamType', ScamTypeSchema);

export default ScamType;

