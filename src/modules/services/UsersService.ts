import { User } from "../../types/Entities";

export default class UsersService {
  async getUsers(): Promise<User[]> {
    return [
      { id: '1', name: 'Foo Bar', email: 'foobar@example.com', active: true },
      { id: '2', name: 'John Doe', email: 'johndoe@example.com', active: false }
    ];
  }
}
