import { Store } from "@codeleaf-sdk/core";

export default class UsersPageFilters extends Store<{ isActive: boolean }> {
  constructor() {
    super({
      isActive: true
    });
  }
}