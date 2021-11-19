import { Low, Adapter } from 'lowdb'
import { Repository } from '../models/Repository'

export abstract class LowDbRepository<FullProps, PartialProps, UniqueProps> implements Repository<FullProps, PartialProps, UniqueProps> {
  private readonly db: Low<FullProps[]>

  constructor (adapter: Adapter<FullProps[]>) {
    this.db = new Low<FullProps[]>(adapter)
  }

  protected async getData (): Promise<FullProps[]> {
    await this.db.read()
    return this.db.data ?? []
  }

  protected async setData (data: FullProps[]): Promise<FullProps[]> {
    this.db.data = data
    await this.db.write()
    return this.db.data
  }

  private extractKeyObj (obj: any, extractKeys: any): any {
    const result: any = {}
    Object.keys(obj).forEach(key => {
      if (extractKeys[key] !== undefined) {
        result[key] = obj[key]
      }
    })
    return result
  }

  private exactObjValues (obj1: any, obj2: any): boolean {
    return Object.keys(obj1).every(key =>
      obj1[key] === obj2[key]
    )
  }

  async getAll (): Promise<FullProps[]> {
    return await this.getData()
  }

  async create (obj: FullProps): Promise<FullProps> {
    const data = await this.getData()
    await this.setData([...data, obj])
    return obj
  }

  async getOneUnique (findProps: UniqueProps): Promise<FullProps | null | undefined> {
    return await this.getOne(findProps)
  }

  async getOne (findProps: any): Promise<FullProps | null | undefined> {
    const data = await this.getData()
    return data.find(dataFind => this.exactObjValues(this.extractKeyObj(dataFind, findProps), findProps))
  }

  async includeIds (findProps: UniqueProps[]): Promise<FullProps[]> {
    const data = await this.getData()
    const result: FullProps[] = []
    findProps.forEach(props => {
      const foundedIngredient = data.find(dataFind => this.exactObjValues(this.extractKeyObj(dataFind, findProps), findProps))
      if (foundedIngredient != null) {
        result.push(foundedIngredient)
      }
    })
    return result
  }

  async exist (findProps: any): Promise<boolean> {
    const elementFound = await this.getOne(findProps)
    return elementFound !== null && elementFound !== undefined
  }

  async delete (findProps: UniqueProps): Promise<void> {
    const data = await this.getData()
    await this.setData(data.filter(dataFilter => !this.exactObjValues(this.extractKeyObj(dataFilter, findProps), findProps)))
  }

  async update (obj: PartialProps, findProps: UniqueProps): Promise<FullProps> {
    const fullObj: any = { ...obj, ...findProps }
    await this.delete(findProps)
    const data = await this.getData()
    await this.setData([...data, fullObj])
    return fullObj
  }
}
