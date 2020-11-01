export const BASE_URL = 'http://80.249.151.173';

export const LOGIN_URL = `${BASE_URL}/login`;
export const TAGS_URL = `${BASE_URL}/tags`;
export const INTERESTS_URL = `${BASE_URL}/kids/interests`;
export const GOAL_URL = `${BASE_URL}/kids/goal`;
export const TASKS_URL = `${BASE_URL}/kids/goal/tasks`;
export const PROFILE_URL = `${BASE_URL}/kids/profile`;
export const MENTORS_URL = `${BASE_URL}/mentors`;
export const MENTOR_LIKE_URL = `${BASE_URL}/kids/mentor/like`;
export const MENTOR_DONE_URL = `${BASE_URL}/kids/mentor/ready`;
export const getMentorImageUrl = (fileName: string) =>
  `${BASE_URL}/images?filename=${fileName}`;
