import React from 'react';
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';
class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul className={css.buttonBox}>
        {this.props.options.map(option => (
          <li key={option}>
            <button
              type="button"
              name={option}
              onClick={this.props.onLeaveFeedback}
              className={css.button}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes ={
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
  };

export default FeedbackOptions;
