import React, { Component } from "react";
import axios from "axios";
import "../styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
          <p>Emp ID: {employeeDetails.id}</p>
          <h3 className="repo-name">Emp Name: {employeeDetails.first_name}</h3>
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
