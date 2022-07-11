import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";
import { hashSync } from 'bcrypt';

export class CreateUsuarioDTO {
    
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    @Matches(RegExHelper.password)
    senha: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

}