let defaultState = {
  top: "",
  bottom: "",
  url: ""
}

// Reduce one state into a resulting state as a result of the action
const mainReducer = (state = defaultState, action) => {
  if (action.type === "MAKE_MEME") {
    return {
      ...state,
      top: action.meme.top,
      bottom: action.meme.bottom,
      url: action.meme.url
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;