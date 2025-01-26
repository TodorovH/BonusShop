import type { NextApiRequest, NextApiResponse } from 'next';

import { getUsersData } from '@repo/getUsersData';
import { User } from '@repo/custom-types/user';

type Data = {
  users: User[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getUsersData();
  res.status(200).json(data);
}
