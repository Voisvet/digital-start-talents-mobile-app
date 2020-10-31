import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {TAGS_URL} from './urls';

export class RegistrationStore {
  interestsHints: string[] = [];

  token: string | null = null;
  goal: string | null = null;
  tasks: string[] | null = null;
  interests: string[] | null = null;

  timer: NodeJS.Timeout | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthData(token: string): void {
    this.token = token;
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
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (request) {
      this.timer = setTimeout(() => {
        axios
          .get<{tags: string[]}>(TAGS_URL, {params: {tag: request}})
          .then((response) => this.setInterestHints(response.data.tags));
      }, 1000);
    } else {
      axios
        .get<{tags: string[]}>(TAGS_URL)
        .then((response) => this.setInterestHints(response.data.tags));
    }
  }

  setInterestHints(hints: string[]): void {
    this.interestsHints = hints;
  }
}

export const registrationStore = new RegistrationStore();
