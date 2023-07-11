import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { KnexService } from 'src/knex/knex.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private knexService: KnexService) {}
  async signup(input: SignupDto): Promise<boolean> {
    const { default: knex } = this.knexService.createKnexContext();
    const { email, password } = input;
    const hash = await bcrypt.hash(password, 12);
    const [user] = await knex
      .table('users')
      .insert({ email: email, password: hash });

    return user > 0;
  }
  login(input: LoginDto) {
    return 'Login Service';
  }
}
