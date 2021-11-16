import { v4 } from 'uuid'
import { UpdateElementNotFound } from '../errors'
import { Bocata, BocataPartial, BocataUnique } from '../models/Bocata'
import { Repository } from '../models/Repository'

export default class BocataService {
  constructor (private readonly repository: Repository<Bocata, BocataPartial, BocataUnique>) { }

  async getBocataList (): Promise<Bocata[]> {
    return await this.repository.getAll()
  }

  async createBocata (bocata: BocataPartial): Promise<Bocata> {
    return await this.repository.create({ ...bocata, id: v4() }) // :😕
  }

  async getBocata (obj: BocataUnique): Promise<Bocata| null | undefined> {
    return await this.repository.getOneUnique(obj)
  }

  async deleteBocata (obj: BocataUnique): Promise<void> {
    return await this.repository.delete(obj)
  }

  async updateBocata (obj: BocataPartial, objFind: BocataUnique): Promise<Bocata> {
    const existElementToUpdate = await this.repository.exist(objFind)
    if (!existElementToUpdate) {
      throw new UpdateElementNotFound()
    }
    return await this.repository.update(obj, objFind)
  }
}
