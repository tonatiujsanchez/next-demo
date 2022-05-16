// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface Data{
  name: string;
  lastname: string;
  age: number;

}

export default function handler(req:NextApiRequest , res: NextApiResponse<Data>) {
  res.status(200).json({ 
    name: 'John',
    lastname: 'Hernandez',
    age: 28
  })
}
