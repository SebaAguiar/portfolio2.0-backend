import { Document } from 'mongoose';

export interface SkillInterface extends Document {
  _id?: string;
  name: string;
  component: string;
  image: string;
}
