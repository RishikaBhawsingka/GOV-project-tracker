// app/models/User.ts
import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;        // hashed password
  username?: string;
  location?: string;
  profilePic?: string;
  aptosAddress?: string;
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      default: '',
      trim: true,
    },
    location: {
      type: String,
      default: 'Kolkata',
      trim: true,
    },
    profilePic: {
      type: String,
      default: '',
    },
    aptosAddress: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

// avoid model overwrite in Next.js dev mode
const User: Model<IUser> =
  (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema);

export default User;
