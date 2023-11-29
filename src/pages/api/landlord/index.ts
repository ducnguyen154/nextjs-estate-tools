import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import {Landlord} from "@/server/models/Landlord";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const { count, rows } = await Landlord.findAndCountAll();
  const landlords = rows.map(row => ({
    id: row.id,
    name: row.name,
  }))
  res.json({ error: false, landlords });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { landlord } = req.body;
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
