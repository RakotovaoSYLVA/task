import { User } from "./user";

export interface UserRepository {
  login(session: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
