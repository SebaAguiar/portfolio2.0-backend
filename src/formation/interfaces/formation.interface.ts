import { Document } from 'mongoose';

export interface FormationInterface extends Document {
  name: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  company: string;
}
