const Equipment = require("../models/Equipment");

async function getAllEquipments() {
  try {
    const equipments = await Equipment.find();
    return equipments;
  } catch (error) {
    console.error("Error fetching all equipments:", error);
    throw error;
  }
}

async function getEquipmentsByEquipmentId(equipmentId) {
  try {
    const equipments = await Equipment.findOne({ equipmentId: equipmentId });
    return equipments;
  } catch (error) {
    console.error("Error fetching equipment by equipmentId:", error);
    throw error;
  }
}

async function insertEquipment(newEquipment) {
  try {
    const equipments = new Equipment(newEquipment);
    await equipments.save();
    console.log("Equipment inserted successfully");
  } catch (error) {
    console.error("Error inserting new equipment:", error);
    throw error;
  }
}

async function modifyEquipment(modifications, equipmentId) {
  try {
    const updatedEquipmentId = await Equipment.findOneAndUpdate(
      { equipmentId: equipmentId },
      modifications,
      { new: true }
    );
    console.log("EquipmentId modified successfully:", updatedEquipmentId);
    return updatedEquipmentId;
  } catch (error) {
    console.error("Error modifying equipment:", error);
    throw error;
  }
}

async function deleteEquipmentByEquipmentId(equipmentId) {
  try {
    const result = await Equipment.deleteOne({ equipmentId: equipmentId });
    if (result.deletedCount === 0) {
      console.log("No equipment found with the specified ID.");
    } else {
      console.log("Equipment deleted successfully.");
    }
  } catch (error) {
    console.error("Error deleting equipment by equipmentId:", error);
    throw error;
  }
}

module.exports = {
  getAllEquipments,
  getEquipmentsByEquipmentId,
  insertEquipment,
  modifyEquipment,
  deleteEquipmentByEquipmentId,
};
