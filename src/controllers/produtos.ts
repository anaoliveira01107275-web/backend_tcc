import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { handleError } from "../helpers/handleError";

export default {

    create: async (request: Request, response: Response) => {

        try {

            const { nome, descricao, preco, imagem } = request.body;

            const userId = request.userId;

            const produto = await prisma.produto.create({
                data: {
                    nome,
                    descricao,
                    preco,
                    imagem,
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

    },

    update: async (request: Request, response: Response) => {

    try {

        const { id } = request.params;

        const { nome, descricao, preco } = request.body;

        const userId = request.userId;

        const produtoExiste = await prisma.produto.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!produtoExiste) {
            throw new Error("Produto não encontrado");
        }

        if (produtoExiste.userId !== userId) {
            throw new Error("Sem permissão");
        }

        const produto = await prisma.produto.update({
            where: {
                id: Number(id)
            },
            data: {
                nome,
                descricao,
                preco
            }
        });

        return response.json(produto);

    } catch (error: any) {

        return response.status(400).json({
            error: error.message
        });

    }

},

    delete: async (request: Request, response: Response) => {

        try {

            const { id } = request.params;

            const userId = request.userId;

            const produtoExiste = await prisma.produto.findUnique({
                where: {
                    id: Number(id)
                }
            });

            if (!produtoExiste) {
                throw new Error("Produto não encontrado");
            }

            if (produtoExiste.userId !== userId) {
                throw new Error("Sem permissão");
            }

            await prisma.produto.delete({
                where: {
                    id: Number(id)
                }
            });

            return response.json({
                message: "Produto deletado"
            });

        } catch (error: any) {

            return handleError(response, error);

        }

    },

    myProducts: async (request: Request, response: Response) => {

    try {

        const userId = request.userId;

        const produtos = await prisma.produto.findMany({
            where: {
                userId
            }
        });

        return response.json(produtos);

    } catch (error: any) {

        return handleError(response, error);

    }

},


show: async (request: Request, response: Response) => {

    try {

        const { id } = request.params;

        const produto = await prisma.produto.findUnique({
            where: {
                id: Number(id)
            }
        });

        return response.json(produto);

    } catch (error) {

        return handleError(error, response);

    }

},

}