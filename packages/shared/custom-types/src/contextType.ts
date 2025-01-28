import type { User } from './user';
import type { Bonus } from './bonus';

export type ContextType = {
  users: User[];
  bonuses: Bonus[];
};
