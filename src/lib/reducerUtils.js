//reducerUtils
export const reducerUtils = {
  initial: (data = []) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (prevState) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
