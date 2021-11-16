import { NextApiRequest, NextApiResponse } from 'next'
import NextConnectFn, { NextConnect, NextHandler } from 'next-connect'

export default function nc (): NextConnect<NextApiRequest, NextApiResponse<any>> {
  return NextConnectFn({
    onError
  })
}

function onError (err: any, req: NextApiRequest, res: NextApiResponse, next: NextHandler): any | Promise<any> {
  const { url, method, body, query, headers } = req
  console.error(err)
  console.error('Request-data: ', { url, method, body, query, headers })

  res.status(err.code ?? 500).json(err)
}
