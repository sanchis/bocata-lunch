import BocataRepository from '../repositories/Bocata'
import BocataSrv from './Bocata'

const repository = new BocataRepository()
export const BocataService = new BocataSrv(repository)
