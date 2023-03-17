import { Document } from 'mongoose';

export interface AdminInterface extends Document {
  id?: string;
  lastName: string;
  names: string;
  email: string;
  password: string;
}
