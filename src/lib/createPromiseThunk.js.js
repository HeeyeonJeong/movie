//createThunk
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const thunkCreator = (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      });
    }
  };
  return thunkCreator;
};
