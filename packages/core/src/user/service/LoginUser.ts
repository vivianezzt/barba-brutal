import UseCase from "../../shared/UseCase";
import { User } from "../model/User";
import CryptoProvider from "../provider/CryptoProvider";
import UserRepository from "../provider/UserRepository";
type Entry = {
  email: string;
  password: string;
};

export default class LoginUser implements UseCase<Entry, User> {
  constructor(
    private readonly repo: UserRepository,
    private readonly cripto: CryptoProvider
  ) {}
  async excute(entry: Entry): Promise<User> {
    const { email, password } = entry;
    const user = await this.repo.findByEmail(email);
    if(!user) throw new Error('User not found');
    const samePassword = await this.cripto.compare(password, user.password);
    if(!samePassword) throw new Error('Invalid password');
    delete user.password;
    return user;
  }
}
