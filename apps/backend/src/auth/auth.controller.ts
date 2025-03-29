import { Body, Controller, HttpException, Post } from "@nestjs/common"
import User from "./user"
import { UserRepository } from "./user.repository"

@Controller("auth")
export class AuthController {
  constructor(private readonly repo: UserRepository) {}
  @Post("login")
  async login() {
    return "login"
  }
  @Post("register")
  async register(@Body() user: User) {
    const userExists = await this.repo.findByEmail(user.email)
    if (userExists) {
      throw new HttpException("User already exists", 400)
    }
    await this.repo.save({ ...user, barber: false })
    return { message: "User registered successfully" }
  }
}
