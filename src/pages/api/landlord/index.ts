import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import {
  postLandlord,
  searchLandlords,
} from "@/server/infrastructure/repositories/landlord.repo";
import { searchLandlordsPresent } from "@/server/presentation/landlord.present";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validation
  const result = await searchLandlords();

  res.json(searchLandlordsPresent(result));
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validation
  const { landlord } = req.body;
  await postLandlord(landlord);

  res.status(201).json({ status: "ok" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
