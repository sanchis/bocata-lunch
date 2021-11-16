import { JSONFile } from 'lowdb'
import { Bocata, BocataPartial, BocataUnique } from '../models/Bocata'
import { LowDbRepository } from './LowDb'
import { v4 } from 'uuid'

export default class Repository extends LowDbRepository<Bocata, BocataPartial, BocataUnique> {
  constructor () {
    super(new JSONFile('bocatas.json'))
  }

  async create (bocata: BocataPartial): Promise<Bocata> {
    const bocataCreate: Bocata = {
      ...bocata,
      id: v4()
    }
    return await super.create(bocataCreate)
  }
}
