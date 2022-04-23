const Card = require("./schemas/card");
const User = require("./schemas/user");

/// Cards

const getAllUserCards = (owner) => Card.find({ owner });
const createCard = ({ title, difficulty, category, date, time, type, _id }) =>
  Card.create({ title, difficulty, category, date, time, type, owner: _id });
const removeCard = (id) => Card.findByIdAndRemove(id);
const updateCard = ({ id, title, difficulty, category, date, time }) =>
  Card.findByIdAndUpdate(id, { title, difficulty, category, date, time });
const updateCardStatus  =(id, isDone) => Card.findByIdAndUpdate(id, {isDone})
const findCardById = (id) => Card.findById(id)
///Users

const getAllUsers = () => User.find();
const getUser = (email) => User.findOne({ email });
const getUserById = (_id) => User.findOne({ _id });
const updateUserJWT = (_id, token) => User.findByIdAndUpdate(_id, { token });
// const updateVerificationToken = (verificationToken) =>
//   User.findOneAndUpdate(
//     { verificationToken },
//     { isVerified: true, verificationToken: null }
//   );

module.exports = {
  getAllUserCards,
  createCard,
  removeCard,
  updateCard,
  updateCardStatus,
  findCardById,
  getUser,
  getAllUsers,
  getUserById,
  updateUserJWT,
  // updateVerificationToken,
};
