import UseCase from "../../shared/UseCase";
import { User } from "../model/User";
import CryptoProvider from "../provider/CryptoProvider";
import UserRepository from "../provider/UserRepository";

// casos de usos da aplicação para registrar um usuário (fluxos de negócio) - DDD: Application cse = Fluxo da aplicação
export default class RegisterUser implements UseCase {
  constructor(
    // 1º caso de uso: Registrar um usuário
    private readonly repo: UserRepository,
    // 2º caso de uso: Criptografar a senha
    private readonly Crypto: CryptoProvider
  ) {}
  async excute(user: User): Promise<any> {
    const userExists = await this.repo.findByEmail(user.email);
    if (userExists) {
      throw new Error("User already exists"); // Use uma exceção do NestJS
    }
    const passwordCrypto = await this.Crypto.encrypt(user.password);
    const newUser = {
      ...user,
      password: passwordCrypto,
      barber: false,
    };
    await this.repo.save(newUser); // Aguarde a operação de salvamento
  }
}
