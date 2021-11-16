import { NextApiRequest, NextApiResponse } from 'next'
import { Bocata, BocataUnique } from '../models/Bocata'
import { BocataService } from '../services'

export async function getBocataListController (req: NextApiRequest, res: NextApiResponse<Bocata[]>): Promise<void> {
  res.send(await BocataService.getBocataList())
}

export async function createBocataController (req: NextApiRequest, res: NextApiResponse<Bocata>): Promise<void> {
  res.send(await BocataService.createBocata(req.body))
}

export async function getBocataController (req: NextApiRequest, res: NextApiResponse<Bocata |null | undefined>): Promise<void> {
  const queryParams: BocataUnique = {
    id: req.query.id as string
  }
  console.log(queryParams)
  res.send(await BocataService.getBocata(queryParams))
}

export async function deleteBocataController (req: NextApiRequest, res: NextApiResponse<void>): Promise<void> {
  const queryParams: BocataUnique = {
    id: req.query.id as string
  }
  res.send(await BocataService.deleteBocata(queryParams))
}

export async function updateBocataController (req: NextApiRequest, res: NextApiResponse<Bocata>): Promise<void> {
  const bocataUpdate = req.body
  const bocataIdentifier = {
    id: req.query.id as string
  }
  res.send(await BocataService.updateBocata(bocataUpdate, bocataIdentifier))
}
