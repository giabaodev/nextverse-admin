export const PATH_NAME = {
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  PRODUCTS: '/products',
};
export type PathNameValue = (typeof PATH_NAME)[keyof typeof PATH_NAME];
