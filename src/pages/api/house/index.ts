import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { House } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const houses = await House.findAll();
  res.json({ error: false, houses });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const house = await House.create(body);

  res.json({ house });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});

