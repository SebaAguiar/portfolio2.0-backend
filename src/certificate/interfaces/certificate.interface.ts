import { Document } from 'mongoose';

export interface CertificateInterface extends Document {
  id?: string;
  name: string;
  date: string;
  company: string;
  image: string;
}
