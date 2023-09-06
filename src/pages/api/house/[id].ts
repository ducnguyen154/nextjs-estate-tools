import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { House } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const houseId = req.query.id;
  const house = await House.findByPk(houseId as string);

  res.json({ status: "OK", house });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const body = req.body;

  await House.update(body, { where: { id } });
  res.json({ status: "OK" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});

