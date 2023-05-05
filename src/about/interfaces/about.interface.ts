import { WhatIDoInterface } from './whatIDo.interface';

export interface AboutInterface {
  id?: string;
  name: string;
  lastName: string;
  birth: string;
  residence: string;
  email: string;
  phone: string;
  aboutme: string;
  whatIDo: Array<WhatIDoInterface>;
}
