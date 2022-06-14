import React from "react";
import { connect } from "react-redux";
import { selectUser } from "./../actions";
import Card from "./Card";
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
    this.setState({ count: ((Math.random() * 10 + 1) % 10) + 1 });
  };

  render() {
    return (
      <div className="column twelve wide">
        <h1>Name</h1>
        <h1>User Info</h1>
        <form className="ui form">
          <div>
            <Card props={this.props.user}></Card>
            <button
              className="ui button"
              type="submit"
              onClick={this.onClickHandler}
            >
              {`Fetch User Data`}
            </button>
          </div>
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
