import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { rent as Rent } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const rent = await Rent.findByPk(id as string);

  res.json({ status: "OK", rent });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const body = req.body;

  await Rent.update(body, { where: { id } });
  res.json({ status: "OK" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
