import React from 'react';

const Message = ({ message, status }) => {
  if (message === null) {
    return null;
  }
  return <div className={`message ${status}`}>{message}</div>;
};

export default Message;
