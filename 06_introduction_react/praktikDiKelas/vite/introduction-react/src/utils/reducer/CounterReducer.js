function reducer(state, action) {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

export default reducer;
