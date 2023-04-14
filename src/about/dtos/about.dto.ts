import { Document } from 'mongoose';

export class AboutDTO extends Document {
  id?: string;
  name: string;
  lastName: string;
  birth: string;
  residence: string;
  email: string;
  phone: string;
  aboutme: string;
}
