import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { landlord as Landlord } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const landlords = await Landlord.findAll();
  res.json({ error: false, landlords });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { landlord } = req.body;
  console.log(landlord);
  const result = await Landlord.create(landlord);

  res.json({ result });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
