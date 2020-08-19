const dataFetch = (
  state = {
    data: null,
    loading: true,
    loaded: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "DATA-CLEAR":
      return { ...state, data: null };
    case "LOADED":
      return { ...state, loading: false, loaded: true, data: action.payload };
    case "ERROR":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataFetch;
