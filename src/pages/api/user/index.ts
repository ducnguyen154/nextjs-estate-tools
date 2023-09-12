import { user as User } from "@/server/models";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validate
  const users = await User.findAll();
  res.json({ users });
});

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validate
  const { users } = req.body;
  await User.create(users);
  res.status(201).end();
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
