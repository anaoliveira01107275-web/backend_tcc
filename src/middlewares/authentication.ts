import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
    id: number;
}

export function authentication(
    request: Request,
    response: Response,
    next: NextFunction
) {

    try {

        const authToken = request.headers.authorization;

        if (!authToken) {
            return response.status(401).json({
                error: "Token não encontrado"
            });
        }

        const [, token] = authToken.split(" ");

        const decoded = jwt.verify(
            token,
            "SEGREDO_JWT"
        ) as TokenPayload;

        request.userId = decoded.id;

        return next();

    } catch {

        return response.status(401).json({
            error: "Token inválido"
        });

    }

}