import { Document } from 'mongoose';

export interface AdminInterface extends Document {
  readonly lastName: string;
  readonly names: string;
  readonly email: string;
  password: string;
}
