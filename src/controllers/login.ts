import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
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

    }

}