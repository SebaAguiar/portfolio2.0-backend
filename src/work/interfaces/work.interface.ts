import { Document } from 'mongoose';

export interface WorkInterface extends Document {
  name: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  company: string;
  position: string;
  companyUrl: string;
}
