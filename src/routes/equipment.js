const {Router} = require("express")
const { getEquipments, getEquipment, postEquipment, patchEquipment, deleteEquipment } = require("../controllers/equipment")

const router = Router()

router.get('/', getEquipments)

router.get('/:equipmentId', getEquipment)

router.post('/', postEquipment)

router.patch('/:equipmentId', patchEquipment)

router.delete('/:equipmentId', deleteEquipment)


module.exports = router