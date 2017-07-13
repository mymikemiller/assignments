let defaultState = {
  count: 0
}

const mainReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      count: state.count + 1
    }
  } else if (action.type === "SUBTRACT") {
    return {
      ...state,
      count: state.count - 1
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;