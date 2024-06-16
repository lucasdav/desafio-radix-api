const {
  getAllEquipments,
  getEquipmentsByEquipmentId,
  insertEquipment,
  modifyEquipment,
  deleteEquipmentByEquipmentId,
} = require("../services/equipment");

async function getEquipments(req, res) {
  try {
    const equipments = await getAllEquipments();
    res.json(equipments);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getEquipment(req, res) {
  try {
    const equipmentId = req.params.equipmentId;

    if (equipmentId) {
      const equipment = await getEquipmentsByEquipmentId(equipmentId);
      if (equipment) {
        res.json(equipment);
      } else {
        res.status(404).send("Equipamento não encontrado");
      }
    } else {
      res.status(422).send("Id inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postEquipment(req, res) {
  try {
    const newEquipment = req.body;
    await insertEquipment(newEquipment);
    res.status(201).send("Equipamento inserido com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function patchEquipment(req, res) {
  try {
    const equipmentId = req.params.equipmentId;

    if (equipmentId) {
      const body = req.body;
      const updatedEquipment = await modifyEquipment(body, equipmentId);
      if (updatedEquipment) {
        res.send("Item modificado com sucesso");
      } else {
        res.status(404).send("Equipamento não encontrado");
      }
    } else {
      res.status(422).send("Id inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteEquipment(req, res) {
  try {
    const equipmentId = req.params.equipmentId;

    if (equipmentId) {
      await deleteEquipmentByEquipmentId(equipmentId);
      res.send("Equipamento deletado com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getEquipments,
  getEquipment,
  postEquipment,
  patchEquipment,
  deleteEquipment,
};
