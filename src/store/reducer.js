import { FAILED, FETCH, LOADING } from './type';

export const initialState = {
  counter: 1,
  perikanan: [],
  detailById: '',
  isLoading: false,
  error: null,
}

export default function reducer (state=initialState, action) {
  const { data, error } = action;

  switch (action.type) {
    case FAILED:
    return {
      ...state,
      isLoading: false,
      ...error
    }
    case LOADING:
    return {
      ...state,
      isLoading: true
    }
    case FETCH:
    return {
      ...state,
      isLoading: false,
      ...data,
    }
    default:
      return state;
  }
}
