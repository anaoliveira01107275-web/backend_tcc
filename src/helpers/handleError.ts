import { Response } from "express";
import { prismaErrorCodes } from "../config/prismaErrorCodes";

export function handleError(
    response: Response,
    error: any
) {

    if (error.code === prismaErrorCodes.uniqueConstraint) {

        return response.status(400).json({
            error: "Registro já existente"
        });

    }

    return response.status(400).json({
        error: error.message || "Erro interno"
    });

}