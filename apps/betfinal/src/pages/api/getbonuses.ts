import type { NextApiRequest, NextApiResponse } from 'next';

import { bonuses } from '@repo/getBonusesData';
import { Bonus } from '@repo/custom-types/bonus';

type Data = {
  bonuses: Bonus[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ bonuses });
}
