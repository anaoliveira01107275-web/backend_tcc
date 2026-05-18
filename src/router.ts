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
    "/login",
    loginController.login
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

routes.put(
    "/produtos/:id",
    authentication,
    produtosController.update
);

routes.delete(
    "/produtos/:id",
    authentication,
    produtosController.delete
);

export default routes;