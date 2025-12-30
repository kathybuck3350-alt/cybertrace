import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  subscribed: boolean;
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

const NewsletterSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    subscribed: {
      type: Boolean,
      default: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    unsubscribedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter: Model<INewsletter> = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;



