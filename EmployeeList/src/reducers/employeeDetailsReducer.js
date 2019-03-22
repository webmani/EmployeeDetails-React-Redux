export default function(state = null, action) {
  switch (action.type) {
    case "SET_EMPLOYEE_DETAILS":
      return action.payload;
      break;
     case "CLEAR_EMPLOYEE_DETAILS":
      return null;
      break;
  }
  return state;
}
