export const CREATE_PLANNER = '/planner?mode=create';
export const EDIT_PLANNER = '/planner?mode=edit';
export const LANDING = '/';
export const PROFILE = '/profile';
export const USER_INFO = '/profile/user-info';
export const EDIT_INFO = '/profile/edit-info';
export const TELEGRAM = 'https://t.me/09022232935';
export const MY_TRIPS = '/profile/my-trips';
export const BLOG = '/blog';
export const INSTAGRAM = 'https://instagram.com/bezanimbiroon';
export const WHATSAPP = 'https://wa.me/989022232935';
export const RECEIVE_CODE = '/auth/login/receiveCode';
export const PLACE = (id: number) => {
  return `/place/${id}?view=common`;
};
export const MOBILE_VIEW_TRIP = (id: string) => {
  return `/trip/${id}?view=common`;
};
export const DESKTOP_VIEW_TRIP = (id: string) => {
  return `/trip/${id}`;
};
