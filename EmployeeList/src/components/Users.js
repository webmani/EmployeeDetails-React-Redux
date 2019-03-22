import React, { Component } from "react";
import axios from "axios";
import "../styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Label } from "office-ui-fabric-react/lib/Label";

class GitHubRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList() {
    const { activePerson = {} } = this.props;
    const employeeDetails = activePerson.data;

    return (
      <div className="user-results">
        <div className="user-details">
          <img src={employeeDetails.avatar} />
          <p>
            <Label>Emp ID : </Label>
            <strong>{employeeDetails.id}</strong>
          </p>
          <h3 className="repo-name">
            <Label>Emp Name : </Label> {employeeDetails.first_name}
          </h3>
        </div>
      </div>
    );
  }

  render() {
    return this.props.activePerson && this.renderList();
  }
}

function mapStateToProps(state) {
  return {
    activePerson: state.selectedEmployeeDetails
  };
}

export default connect(mapStateToProps)(GitHubRepos);
