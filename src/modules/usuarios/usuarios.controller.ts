import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/create-usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: CreateUsuarioDTO){
    return this.usuariosService.create(data);
  }

  @Get(':login')
  async findOne(@Param('login') login: string){
    return this.usuariosService.findOne(login);
  }

  @Put(':login')
  async update(@Param('login') login: string, @Body() data: CreateUsuarioDTO){
    return this.usuariosService.update(login, data);
  }

  @Delete(':login')
  async delete(@Param('login') login: string){
    return this.usuariosService.delete(login);
  }
}
