export const Types = {
  GET_REQUEST: 'getRequest/REPOSITORIES',
  GET_SUCCESS: 'getSuccess/REPOSITORIES',
  GET_FAILURE: 'getFailure/REPOSITORIES',
};

const INITIAL_STATE = {
  data: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({ type: Types.GET_REQUEST }),
  getSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
  getFailure: error => ({ type: Types.GET_FAILURE, payload: { error } }),
};
