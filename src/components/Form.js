import React from "react";
import { connect } from "react-redux";
import { selectUser } from "./../actions";
class Form extends React.Component {
  state = { count: 1 };

  setFirstName = () => {
    return this.props.user ? this.props.user.first_name : "";
  };

  setLastName = () => {
    return this.props.user ? this.props.user.last_name : "";
  };

  componentWillUnmount() {
    this.props.selectUser();
  }

  onClickHandler = () => {
    this.setState({ count: Math.random() * 10 + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div className="column twelve wide">
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              value={this.setFirstName()}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              value={this.setLastName()}
            />
          </div>
          <div className="field"></div>
          <button
            className="ui button"
            type="submit"
            onClick={this.onClickHandler}
          >
            {`Click here to get other name than ${this.props.user.first_name}`}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, selectUser)(Form);
