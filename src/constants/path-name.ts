export const PATH_NAME = {
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
};
export type PathNameValue = (typeof PATH_NAME)[keyof typeof PATH_NAME];
