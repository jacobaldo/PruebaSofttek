import {SET_USER_DATA} from './RegisterType';

const initialState = {
  userData: {
    numberDNI: null,
    numberPhone: null,
  },
};

const RegisterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
