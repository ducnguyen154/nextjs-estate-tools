import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { landlord as Landlord } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const landlord = await Landlord.findByPk(id as string);

  res.json({ status: "OK", landlord });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { landlord } = req.body;

  await Landlord.update(landlord, { where: { id } });
  res.json({ status: "OK" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
