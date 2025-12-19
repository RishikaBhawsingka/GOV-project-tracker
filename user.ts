import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  username?: string;
  location?: string;
  profilePic?: string;
  aptosAddress?: string;
  createdAt: Date;
}

const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, default: '' },
  location: { type: String, default: 'Kolkata' },
  profilePic: { type: String, default: '' },
  aptosAddress: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
