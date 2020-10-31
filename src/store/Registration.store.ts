import {makeAutoObservable} from 'mobx';

export class RegistrationStore {
  interestsHints: string[] = [];

  phone: string | undefined;
  code: string | undefined;
  goal: string | undefined;
  tasks: string[] | undefined;
  interests: string[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthData(phone: string, code: string): void {
    this.phone = phone;
    this.code = code;
  }

  setGoal(goal: string): void {
    this.goal = goal;
  }

  setTasks(tasks: string[]): void {
    this.tasks = tasks;
  }

  setInterests(interests: string[]): void {
    this.interests = interests;
  }

  loadInterestsHints(request: string): void {
    if (request) {
      this.interestsHints = ['test1', 'test2', 'test3', 'test4'];
    }
  }
}

export const registrationStore = new RegistrationStore();
