import { Router } from "express";

import loginController from "./controllers/login";
import produtosController from "./controllers/produtos";
import { upload } from "./config/multer";

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

routes.get(
    "/meus-produtos",
    authentication,
    produtosController.myProducts
);

routes.post(
    "/upload",
    upload.single("file"),
    (request, response) => {

        return response.json({
            image: request.file?.filename
        });

    }
);

routes.get(
    "/produtos/:id",
    produtosController.show
);

routes.get(
    "/me",
    authentication,
    loginController.me
);


export default routes;