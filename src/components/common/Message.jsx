import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message } = props;
  return <div className="err-text">{message}</div>;
};

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};

export default Message;
