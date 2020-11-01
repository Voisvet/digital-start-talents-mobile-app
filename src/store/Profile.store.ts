import {makeAutoObservable, reaction} from 'mobx';
import axios from 'axios';
import {PROFILE_URL, TASKS_URL} from './urls';
import {Task} from '../component/TasksList';
import {foxDialogStore} from './FoxDialog.store';

export enum MentorshipStatus {
  not_enough_points = 'not_enough_points',
  uninitialized = 'uninitialized',
  waiting = 'waiting',
  mentored = 'mentored',
}

interface ProfileResponse {
  profile: {
    account_id: string;
    goal: string;
    interests: string[];
    mentorship: MentorshipStatus;
    name: string;
    points: number;
    tasks: Task[];
  };
}

export class ProfileStore {
  token: string | null = null;

  goal: string = '';
  tasks: Task[] = [];
  interests: string[] = [];
  points: number = 0;
  name: string = '';
  mentorship: MentorshipStatus = MentorshipStatus.not_enough_points;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string): void {
    this.token = token;
    this.loadProfile();
  }

  loadProfile(): void {
    axios
      .get<ProfileResponse>(PROFILE_URL, {
        headers: {Authorization: `Bearer ${this.token}`},
      })
      .then((response) => this.setProfile(response.data));
  }

  setProfile(data: ProfileResponse): void {
    this.goal = data.profile.goal;
    this.tasks = data.profile.tasks;
    this.interests = data.profile.interests;
    this.points = data.profile.points;
    this.name = data.profile.name;
    this.mentorship = data.profile.mentorship;
  }

  updateTask(task: Task): void {
    axios
      .put(TASKS_URL, task, {
        headers: {Authorization: `Bearer ${this.token}`},
      })
      .then(() => this.setTask(task));
  }

  setTask(task: Task): void {
    const taskPosition = this.tasks.findIndex((val) => val.id === task.id);
    const tasksCopy = [...this.tasks];
    tasksCopy.splice(taskPosition, 1, task);
    this.tasks = tasksCopy;
  }

  setWaitingForMentor(): void {
    this.mentorship = MentorshipStatus.waiting;
  }
}

export const profileStore = new ProfileStore();

reaction(
  () => profileStore.token,
  (token) => {
    if (token) {
      foxDialogStore.openDialog(
        'Привет! Рад, что ты снова навестил меня :) Лови 100 ключиков.',
      );
    }
  },
);
