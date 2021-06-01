import { CreatePageModule, FetchStore } from "@codeleaf-sdk/core";
import UsersService from "./services/UsersService";
import UsersPageFilters from "./stores/UsersPageFilters";
import UsersPageStore from "./stores/UsersPageStore";
import UsersStore from "./stores/UsersStore";
import { User } from "../types/Entities";

const UsersModule = CreatePageModule<UsersPageStore, UsersService, {
  store: UsersStore,
  list: User[],
  isListEmpty: boolean,
  setActive: (newValue: boolean) => void,
  active: boolean,
}>({
  store: [
    UsersPageStore,
    [
      { target: UsersStore },
      { target: FetchStore },
      { target: UsersPageFilters },
    ]
  ],
  service: [UsersService, []],
  selector: (store) => ({
    store: store.users,
    setActive(newValue: boolean) {
      store.filters.set('isActive', newValue);
    },
    get active() {
      return store.filters.state.isActive;
    },
    get list() {
      return store.users.state.users.filter(u => u.active === store.filters.state.isActive);
    },
    get isListEmpty() {
      return Boolean(store.users.state.users.length);
    }
  }),
});

export default UsersModule;
