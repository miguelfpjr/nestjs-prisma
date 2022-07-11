import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService){}

    async create(data: Prisma.UserCreateInput){
        const userExists = this.prisma.user.findFirst({
            where: {
                login: data.login
            }
        })

        if(userExists){
            throw new Error('Usuario já cadastrado')
        }

        const user = await this.prisma.user.create({
            data,
        })

        return user
    }

    async findOne(login: string) {
        const userFind = await this.prisma.user.findUnique({
            where: {
                login
            }
        })

        if(!userFind){
            throw new Error("Usuario não encontrado")
        }

        return userFind;
    }

    async update(login: string, data: Prisma.UserCreateInput){
        const userFind = await this.prisma.user.findUnique({
            where: {
                login
            }
        });

        if(!userFind){
            throw new Error("Usuario não encontrado")
        }
        return await this.prisma.user.update({
            data,
            where: {
                login,
            }
        })
    }

    async delete(login: string){
        const userFind = await this.prisma.user.findUnique({
            where: {
                login
            }
        });

        if(!userFind){
            throw new Error("Usuario não encontrado")
        }

        return await this.prisma.user.delete({
            where: {
                login,
            }
        })
    }
}
