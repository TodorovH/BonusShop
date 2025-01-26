import type { NextApiRequest, NextApiResponse } from 'next';

import { getBonusesData } from '@repo/getBonusesData';
import { Bonus } from '@repo/custom-types/bonus';

type Data = {
  bonuses: Bonus[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getBonusesData();
  res.status(200).json(data);
}
