const service = require("../service");
const { schema } = require("../helpers/joiSchema.js");



const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getContactById(id);
    if (result) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "OK",
        data: {
          contacts: result,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found contact id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};



module.exports = {
  getAll,
  getById,
  addContact,
  removeContactById,
  updateContact,
  updateStatus,
  // getFavoriteContacts,
};
