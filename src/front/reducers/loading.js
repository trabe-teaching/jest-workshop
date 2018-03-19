const initialState = 0;

export default (state = initialState, { type }) => {
  if (/_REQUEST$/.test(type)) {
    return state + 1;
  }

  if (/_SUCCESS$/.test(type)) {
    return state - 1;
  }

  return state;
};

export const isLoading = state => state !== 0;
