import { Store } from "@codeleaf-sdk/core";
import { User } from "../../types/Entities";

type UsersStoreType = { users: User[]; status: string };
export default class UsersStore extends Store<UsersStoreType> {
  constructor() {
    super({
      users: [], status: '',
    });
  }
}
