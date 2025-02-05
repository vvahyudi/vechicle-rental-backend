const express = require("express");

const Router = express.Router();

const reservationController = require("../controller/reservation");

Router.post("/create", reservationController.createReservation);
Router.get("/", reservationController.getAllReservation);
Router.get("/:reservationId", reservationController.getReservationById);
Router.get("/user/:userId", reservationController.getReservationByUserId);
Router.get(
  "/product/:productId",
  reservationController.getReservationByProductId
);
Router.patch("/update/:reservationId", reservationController.updateReservation);

Router.delete(
  "/delete/:reservationId",
  reservationController.deleteReservation
);

module.exports = Router;
