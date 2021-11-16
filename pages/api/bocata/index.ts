import { getBocataListController, createBocataController } from 'lib/api/controllers/Bocata'
import nc from 'lib/api/utils/NextConnect'

export default nc()
  .get(getBocataListController)
  .post(createBocataController)
