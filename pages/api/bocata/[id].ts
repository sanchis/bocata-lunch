import { getBocataController, updateBocataController, deleteBocataController } from 'lib/api/controllers/Bocata'
import nc from 'lib/api/utils/NextConnect'

export default nc()
  .get(getBocataController)
  .put(updateBocataController)
  .delete(deleteBocataController)
