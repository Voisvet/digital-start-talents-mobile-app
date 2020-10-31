import {makeAutoObservable} from 'mobx';

export class AuthStore {
  token: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string): void {
    this.token = token;
  }
}

export const authStore = new AuthStore();
