import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { property as Property } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const property = await Property.findByPk(id as string);

  res.json({ status: "OK", property });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { property } = req.body;

  await Property.update(property, { where: { id } });
  res.json({ status: "OK" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
