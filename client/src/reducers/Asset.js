import { GET_ASSET } from "../actions/Types";

export const AssetReducer = (
  state = {
    loading: false,
    value: [],
    info: {}
  },
  action
) => {
  switch (action.type) {
    case GET_ASSET:
      return { ...state, value: action.assets };
    default:
      return state;
  }
};
