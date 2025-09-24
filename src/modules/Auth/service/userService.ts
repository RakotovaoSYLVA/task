import { http } from "../../../shared/utils/http";
import { User } from "../model/user";
import { UserRepository } from "../model/userRepository";

export class UserService implements UserRepository {
  async login(email: string, password: string): Promise<User> {
    const res = await http.post("/auth/login", { email, password });
    return res.data;
  }

  async logout(): Promise<void> {
    await http.post("/auth/logout");
  }
}
