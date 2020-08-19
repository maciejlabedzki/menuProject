const menuStatus = (state = { menu: false, page: "Landing" }, action) => {
  switch (action.type) {
    case "MENU-OPEN":
      return { ...state, menu: true };
    case "MENU-CLOSE":
      return { ...state, menu: false };
    case "PAGE":
      return { ...state, menu: false, page: action.payload };
    default:
      return state;
  }
};

export default menuStatus;
