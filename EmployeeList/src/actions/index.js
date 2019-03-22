export const getEmployeeDetails = id => {
  return {
    type: "GET_EMPLOYEE_DETAILS",
    payload: id
  };
};

export const setEmployeeDetails = details => {
  return {
    type: "SET_EMPLOYEE_DETAILS",
    payload: details
  };
};

export const clearEmployeeDetails = () => {
  return {
    type: "CLEAR_EMPLOYEE_DETAILS"
  };
};
