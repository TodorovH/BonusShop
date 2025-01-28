import type { NextApiRequest, NextApiResponse } from 'next';

import { users } from '@repo/getUsersData';
import { User } from '@repo/custom-types/user';

type Data = {
  users: User[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ users });
}
