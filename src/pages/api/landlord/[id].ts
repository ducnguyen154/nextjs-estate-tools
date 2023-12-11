import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import {
  findLandlordById,
  putLandlord,
} from "@/server/infrastructure/repositories/landlord.repo";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const landlord = await findLandlordById(id as string);

  res.json({ landlord });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { landlord } = req.body;

  await putLandlord(id as string, landlord);
  res.status(204).json({ status: "OK" });
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
