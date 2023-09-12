import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { property as Property } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const property = await Property.findAll();
  res.json({ error: false, property });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const property = await Property.create(body);

  res.json({ property });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
