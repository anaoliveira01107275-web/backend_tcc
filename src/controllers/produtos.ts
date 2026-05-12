import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { handleError } from "../helpers/handleError";

export default {

    create: async (request: Request, response: Response) => {

        try {

            const { nome, descricao, preco } = request.body;

            const userId = request.userId;

            const produto = await prisma.produto.create({
                data: {
                    nome,
                    descricao,
                    preco,
                    userId
                }
            });

            return response.json(produto);

        } catch (error: any) {

            return handleError(response, error);

        }

    },

    list: async (request: Request, response: Response) => {

        try {

            const produtos = await prisma.produto.findMany({
                include: {
                    usuario: true
                }
            });

            return response.json(produtos);

        } catch (error: any) {

            return handleError(response, error);

        }

    }

}