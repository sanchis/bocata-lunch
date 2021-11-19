export interface Repository<FullProps, PartialProps, UniqueProps>{
  getAll: () => Promise<FullProps[]>
  create: (obj: FullProps) => Promise<FullProps>
  getOneUnique: (findProps: UniqueProps) => Promise<FullProps | null | undefined>
  getOne: (findProps: any) => Promise<FullProps | null | undefined>
  exist: (findProps: any) => Promise<boolean>
  includeIds: (findProps: UniqueProps[]) => Promise<FullProps[]>
  delete: (findProps: UniqueProps) => Promise<void>
  update: (obj: PartialProps, findProps: UniqueProps) => Promise<FullProps>
}
