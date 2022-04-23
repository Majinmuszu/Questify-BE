const service = require("../service");
const { cardSchema } = require("../helpers/joiSchema.js");

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const results = await service.getAllUserCards(_id);
    res.status(200).json({
      status: "success",
      code: 200,
      message: "OK",
      data: results,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const addCard = async (req, res, next) => {
  const { title, difficulty, category, date, time, type } = req.body;
  const { _id } = req.user;
  const { error } = cardSchema.validate({ title });
  if (error === undefined) {
    try {
      const result = await service.createCard({
        title,
        difficulty,
        category,
        date,
        time,
        type,
        _id,
      });
      res.status(201).json({
        status: "success",
        code: 201,
        message: "Created",
        data: result,
      });
    } catch (e) {
      console.error(e);
      next(e);
    }
  } else {
    res.status(400).json({
      status: "error",
      code: 400,
      message: error.details[0].message,
      data: "Bad Request",
    });
  }
};

const removeCard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removeCard(id);
    if (result) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "OK",
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const updateCard = async (req, res, next) => {
  const { id } = req.params;
  const { title, difficulty, category, date, time } = req.body;
  try {
    const isUpdated = await service.updateCard({
      id,
      title,
      difficulty,
      category,
      date,
      time,
    });
    if (isUpdated) {
      const updatedCard = await service.findCardById(id);
      res.status(200).json({
        status: "success",
        code: 200,
        message: "OK",
        data: updatedCard,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const updateCardStatus = async (req, res, next) => {
  const { id } = req.params;
  const { isDone } = req.body;
  try {
    const isUpdated = await service.updateCardStatus(id, isDone);
    if (isUpdated) {
      const updatedCard = await service.findCardById(id);
      res.status(200).json({
        status: "success",
        code: 200,
        message: "OK",
        data: updatedCard,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `missing field favorite`,
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
  addCard,
  removeCard,
  updateCard,
  updateCardStatus,
};
