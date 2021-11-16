export interface Repository<FullProps, PartialProps, UniqueProps>{
  getAll: () => Promise<FullProps[]>
  create: (obj: FullProps) => Promise<FullProps>
  getOneUnique: (findProps: UniqueProps) => Promise<FullProps | null | undefined>
  getOne: (findProps: any) => Promise<FullProps | null | undefined>
  filter: (findProps: any) => Promise<FullProps[]>
  exist: (findProps: any) => Promise<boolean>
  delete: (findProps: UniqueProps) => Promise<void>
  update: (obj: PartialProps, findProps: UniqueProps) => Promise<FullProps>
}
