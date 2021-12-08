import React from "react";
import PropTypes from "prop-types";

/**
 * Square component
 *
 * Actions:
 *  - click on the square
 */
class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coord: null,
      color: null,
    };
  }

  render() {
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.value)}
      >
        <span className="info">{this.props.value}</span>
        {this.props.name}
      </button>
    );
  }
}

Square.defaultProps = {
  class: "square_w",
  name: "",
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Square;
