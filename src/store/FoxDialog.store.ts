import {makeAutoObservable} from 'mobx';

export class FoxDialogStore {
  message: string | null = null;
  closeCallback: (() => any) | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openDialog(message: string, closeCallback?: () => any): void {
    this.message = message;
    this.closeCallback = closeCallback ?? null;
  }

  closeDialog(): void {
    this.closeCallback?.();
    this.message = null;
  }
}

export const foxDialogStore = new FoxDialogStore();
