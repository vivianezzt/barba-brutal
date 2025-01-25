import UseCase from "../../shared/UseCase";
import UserRepository from "../provider/UserRepository";

// casos de usos da aplicação para registrar um usuário (fluxos de negócio) - DDD: Application cse = Fluxo da aplicação
export default class RegisterUser implements UseCase {
  constructor(private readonly repo: UserRepository) {}
  async excute(entry: any): Promise<any> {
    return "Deu Certo!!!";
  }
}
