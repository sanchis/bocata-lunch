import { gql } from 'apollo-server-micro'
import queries from './queries'
import mutations from './mutations'
import types from './types'

export default gql`
    ${types}
    ${queries}
    ${mutations}
`
