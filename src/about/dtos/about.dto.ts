import { Document } from 'mongoose';
import { WhatIDoInterface } from '../interfaces/whatIDo.interface';

export class AboutDTO extends Document {
  id?: string;
  name: string;
  lastName: string;
  birth: string;
  residence: string;
  email: string;
  phone: string;
  aboutme: string;
  whatIDo: WhatIDoInterface[];
}
