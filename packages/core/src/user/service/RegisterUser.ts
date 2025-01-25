import UseCase from "../../shared/UseCase";

// casos de usos da aplicação para registrar um usuário (fluxos de negócio) - DDD: Application cse = Fluxo da aplicação
export default class RegisterUser implements UseCase {
  async excute(entry: any): Promise<any> {
    return "Deu Certo!!!";
  }
}
