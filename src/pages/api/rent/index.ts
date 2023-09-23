import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { rent as Rent } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const rents = await Rent.findAll();
  res.json({ error: false, rents });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const rent = await Rent.create(body);

  res.json({ rent });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
