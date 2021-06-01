import { FetchStore } from "@codeleaf-sdk/core";
import UsersPageFilters from "./UsersPageFilters";
import UsersStore from "./UsersStore";

export default class UsersPageStore {
  constructor(
    readonly users: UsersStore,
    readonly fetch: FetchStore,
    readonly filters: UsersPageFilters,
  ) {}
}
