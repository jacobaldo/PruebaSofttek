import {SET_USER_DATA, UserData} from './RegisterType';

export const setUserData = (userData: UserData) => ({
  type: SET_USER_DATA,
  payload: userData,
});
