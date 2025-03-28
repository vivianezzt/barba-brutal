import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  barber?: boolean;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly prisma: PrismaService) {}
  @Post('login')
  async login() {
    return 'login';
  }
  @Post('register')
  async register(@Body() user: User) {
    return await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        barber: user.barber ?? false,
      },
    });
  }
}
