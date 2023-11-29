import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { User } from "@/server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO validate
  const { id } = req.query;
  const user = await User.findByPk(id as string);

  res.json({ user });
});

router.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { user } = req.body;

  await User.update(user, { where: { id } });
  res.status(204).end();
});

export default router.handler({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    const err = error as Error;
    console.log(err.stack);
    res.status(500).end(err.message);
  },
});
