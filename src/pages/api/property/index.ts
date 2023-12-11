import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { Property } from "@/server/models";
import { count } from "console";
import { searchPropertiesPresent } from "@/server/presentation/property.present";
import { fetchProperties } from "@/server/infrastructure/repositories/property.repo";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO pagination
  const result = await fetchProperties();

  res.json(searchPropertiesPresent(result));
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { property } = req.body;
  const result = await Property.create(property);

  res.json({ result });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
