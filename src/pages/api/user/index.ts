import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { User } from "@/server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validate
  const users = await User.findAll();
  res.json({ users });
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validate
  const { user } = req.body;
  console.log(user);
  await User.create(user);
  res.status(201).end();
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
