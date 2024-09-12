import Role from './role';
import Trait from './trait';

declare type Character = {
  role: Role;
  traits: Trait[];
  standardIssueItem: string;
  maxHP: number;
  forceful: number;
  creative: number;
  tactical: number;
  reflexive: number;
  armor: number;
};

export default Character;
