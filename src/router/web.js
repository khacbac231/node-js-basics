import express from "express";
import homeController from "../controller/homeController.js";
let router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/detail/user/:userId", homeController.getUserPage);

    router.post("/create-new-user", homeController.createUserPage);

    router.post("/delete-user", homeController.deleteUserPage);

    router.get("/edit-user/:userId", homeController.editUserPage);

    router.post("/update-user/:userId", homeController.updateUserPage);
    return app.use('/', router);
};
export default initWebRoutes;
