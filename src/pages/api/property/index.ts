import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import { property as Property } from "@server/models";
import { landlord as Landlord } from "@server/models";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO pagination
  const offset = 0;
  const limit = 10;
  const where = {};
  const { count, rows } = await Property.findAndCountAll({
    attributes: ["id", "title", "description", "address", "landlordId"],
    include: [{ model: Landlord, attributes: ["name", "email", "mobile"] }],
    where,
    offset,
    limit,
    raw: true,
  });

  if (!count) {
    return { resultSet: { offset, limit, total: 0 } };
  }

  console.log(rows);

  res.json({
    resultSet: { offset, limit, total: count },
    properties: rows.map((row) => ({
      id: row["id"],
      title: row.title,
      description: row.description,
      address: row.address,
      landlordId: row.landlordId,
      landlordName: row["landlord.name"],
      landlordEmail: row["landlord.email"],
      landlordMobile: row["landlord.mobile"],
    })),
  });
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
