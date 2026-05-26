import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { handleError } from "../helpers/handleError";

export default {

    register: async (request: Request, response: Response) => {

        try {

            const { nome, email, senha } = request.body;

            const usuarioExiste = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (usuarioExiste) {
                throw new Error("Email já cadastrado");
            }

            const senhaCriptografada = await bcrypt.hash(senha, 10);

            const usuario = await prisma.user.create({
                data: {
                    nome,
                    email,
                    senha: senhaCriptografada
                }
            });

            return response.json(usuario);

        } catch (error: any) {

            return handleError(response, error);

        }

    },

    login: async (request: Request, response: Response) => {

        try {

            const { email, senha } = request.body;

            const usuario = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (!usuario) {
                throw new Error("Email ou senha inválidos");
            }

            const senhaCorreta = await bcrypt.compare(
                senha,
                usuario.senha
            );

            if (!senhaCorreta) {
                throw new Error("Email ou senha inválidos");
            }

            const token = jwt.sign(
                {
                    id: usuario.id
                },
                "SEGREDO_JWT",
                {
                    expiresIn: "7d"
                }
            );

            return response.json({
                usuario,
                token
            });

        } catch (error: any) {

            return handleError(response, error);

        }

    },

    me: async (request: Request, response: Response) => {

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: request.userId
            }
        });

        return response.json(user);

    } catch (error: any) {

        return response.status(400).json({
            error: error.message
        });

    }

}

}