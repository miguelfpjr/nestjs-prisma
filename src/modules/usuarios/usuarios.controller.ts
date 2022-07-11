import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDTO } from './usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: UsuarioDTO){
    return this.usuariosService.create(data);
  }

  @Get(':login')
  async findOne(@Param('login') login: string){
    return this.usuariosService.findOne(login);
  }

  @Put(':login')
  async update(@Param('login') login: string, @Body() data: UsuarioDTO){
    return this.usuariosService.update(login, data);
  }

  @Delete(':login')
  async delete(@Param('login') login: string){
    return this.usuariosService.delete(login);
  }
}
