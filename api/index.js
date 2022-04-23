const express = require("express");
const { auth } = require("../helpers/auth.js");
const multer = require("multer");
const ctrlCards = require("../controller/ctrlCards.js");
const ctrlUsers = require("../controller/ctrlUsers.js");
const router = express.Router();

/// CARDS ROUTES
router
  .get("/card", auth, ctrlCards.getAll)
  .post("/card", auth, ctrlCards.addCard)
  .patch("/card/:id", auth, ctrlCards.updateCard)
  .delete("/card/:id", auth, ctrlCards.removeCard)
  .patch("/card/complete/:id", auth, ctrlCards.updateCardStatus);

// router
//   .get("/contacts", auth, ctrlContacts.getAll)
//   .get("/contacts/:id", auth, ctrlContacts.getById)
//   .post("/contacts", auth, ctrlContacts.addContact)
//   .delete("/contacts/:id", auth, ctrlContacts.removeContactById)
//   .put("/contacts/:id", auth, ctrlContacts.updateContact)
//   .patch("/contacts/:id/favorite", auth, ctrlContacts.updateStatus);

//// USERS ROUTES

router
  .get("/users", ctrlUsers.getAllUsers)
  .post("/users/signup", ctrlUsers.registerUser)
  .post("/users/login", ctrlUsers.loginUser)
  .get("/users/logout", auth, ctrlUsers.logoutUser)
  .get("/users/current", auth, ctrlUsers.currentUser);
// .get("/users/verify/:verificationToken", ctrlUsers.verifyUser)
// .post("/users/verify", ctrlUsers.resendVerificationMail)

module.exports = router;
