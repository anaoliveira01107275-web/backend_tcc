import { Router } from "express";

import loginController from "./controllers/login";
import produtosController from "./controllers/produtos";

import { authentication } from "./middlewares/authentication";

const routes = Router();

routes.post(
    "/register",
    loginController.register
);

routes.post(
    "/produtos",
    authentication,
    produtosController.create
);

routes.get(
    "/produtos",
    produtosController.list
);

export default routes;