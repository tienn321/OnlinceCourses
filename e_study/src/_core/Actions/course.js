import * as types from '../Constants/course';

export const getActiveCategory = (maDanhMuc) => {
  return {
    type: types.GET_ACTIVE_CATEGORY,
    payload: maDanhMuc
  }
}