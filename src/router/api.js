import express from "express";
import apiController from "../controller/apiController";
let router = express.Router();

const initAPIRoutes = (app) => {
    router.get("/users", apiController.getAllUsers); //Method GET -> read data

    router.post("/create-user", apiController.createNewUser); //Method POST -> create data

    router.put("/update-user", apiController.updateUser); //Method PUT -> update data

    router.delete("/delete-user/:id", apiController.deleteUser); //Method DELETE -> delete

    return app.use('/api/v1/', router);
};
export default initAPIRoutes;
