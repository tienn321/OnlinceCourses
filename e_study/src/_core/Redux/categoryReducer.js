import * as types from '../Constants/course';

const initialState = '';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACTIVE_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
export default categoryReducer;
