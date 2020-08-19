const modalHandle = (
  state = {
    modal: { title: "Information", description: "Please wait.Loading ..." },
    modalStatus: true,
  },
  action
) => {
  switch (action.type) {
    case "MODAL-CLOSE":
      return { ...state, modal: null, modalStatus: false };
    case "MODAL-OPEN":
      return {
        ...state,
        modal: { title: action.title, description: action.description },
        modalStatus: true,
      };
    default:
      return state;
  }
};

export default modalHandle;
