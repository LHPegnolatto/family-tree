import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../utils/database';

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  _id: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      res.status(400).json({ error: 'Missing body parameter' });

      return;
    }

    const { db } = await connect();

    const response = await db.collection('users').insertOne({
      name,
      email,
      age,
    });

    res.status(200).json({ _id: response.ops[0]._id });
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
