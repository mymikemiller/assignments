let defaultState = {
  nameOne: "",
  nameTwo: "",
  nameThree: "",
  chosenName: ""
}

// Reduce one state into a resulting state as a result of the action
const mainReducer = (state = defaultState, action) => {
  if (action.type === "PICK_NAME") {
    let rand = Math.floor(Math.random() * 3);
    let randName = rand == 0 ? action.names.nameOne : rand == 1 ? action.names.nameTwo : action.names.nameThree;
    return {
      ...state,
      nameOne: action.names.nameOne,
      nameTwo: action.names.nameTwo,
      nameThree: action.names.nameThree,
      chosenName: randName
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;