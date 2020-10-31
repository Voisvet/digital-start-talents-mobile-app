import {makeAutoObservable} from 'mobx';

export class AuthStore {
  token: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string): void {
    this.token = token;
  }
}

export const authStore = new AuthStore();
