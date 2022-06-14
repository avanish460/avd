import React from "react";
class Card extends React.Component {
  render() {
    this.props = this.props.props;
    console.log(this.props);
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.avatar} />
        </div>
        <div className="content">
          <a className="header">
            {this.props.first_name} {this.props.last_name}
          </a>
          <div className="meta">
            <span className="date">{this.props.email}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
