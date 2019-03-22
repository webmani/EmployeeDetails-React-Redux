import React, { Component } from "react";
import { getEmployeeDetails, clearEmployeeDetails } from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { css, classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import { Label } from "office-ui-fabric-react/lib/Label";
import { DefaultButton, PrimaryButton, IButtonProps } from "office-ui-fabric-react/lib/Button";


const departments = [{ name: "HR" }, { name: "ENGINEERING" }];
const employeeId = {
  HR: ["1", "2", "3", "4", "5"],
  ENGINEERING: ["6", "7", "8", "9", "10"]
};

class FilterUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHR: "",
      empId: false
    };
  }

  departSelection = event => {
    this.setState({
      selectedHR: event.currentTarget.value
    });
  };

  employeeSelection = event => {
    this.setState({
      empId: event.currentTarget.value
    });
  };

  getDetails = () => {
    const { empId } = this.state;
    empId && this.props.getEmployeeDetails(empId);
  };

  clearDetails = () => {
    this.props.clearEmployeeDetails();
    this.setState({
      selectedHR: "",
      empId: false
    });
  };

  render() {
    const { selectedHR, empId } = this.state;
    return (
      <div className="filter-options">
        <div className="filter-option">
          <div className="filter-selection">
            <Label>Departments</Label>

            <select
              id="department"
              value={selectedHR}
              onChange={this.departSelection}
            >
              <option />
              {departments.map(depart => (
                <option value={depart.name}>{depart.name}</option>
              ))}
              ;
            </select>
          </div>

          <div className="filter-selection">
            <Label>Emp ID</Label>
            <select
              id="empId"
              value={empId}
              onChange={this.employeeSelection}
            >
              <option />
              {selectedHR &&
                employeeId[selectedHR].map(Id => (
                  <option value={Id}>{Id}</option>
                ))}
              ;
            </select>
          </div>

          <div className="filter-selection">
            <PrimaryButton
              onClick={this.getDetails}
              data-automation-id="test"
              text="Get Details"
              allowDisabledFocus={true}
            />
            <PrimaryButton
              data-automation-id="test"
              onClick={this.clearDetails}
              text="Clear"
            />
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getEmployeeDetails: getEmployeeDetails,
      clearEmployeeDetails: clearEmployeeDetails
    },
    dispatch
  );
}
export default connect(
  null,
  matchDispatchToProps
)(FilterUsers);
