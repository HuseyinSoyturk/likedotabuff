import { AttackType, HeroPrimaryAttributes } from '../enums';

export interface IHero {
  attack_type: AttackType;
  id: number;
  legs: number;
  localized_name: string;
  name: string;
  primary_attr: HeroPrimaryAttributes;
  roles: string[];
}
