import React from 'react';
import PropTypes from 'prop-types';

const PdfReader = props => {
  const { itemData } = props;

  const { title, body } = itemData;
  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="card-header">{title}</div>
        <textarea className="card-body text-display ">{body}</textarea>
      </div>
    </div>
  );
};
PdfReader.defaultProps = {
  itemData: {},
};
PdfReader.propTypes = {
  itemData: PropTypes.shape({
    title:PropTypes.string,
    body:PropTypes.string
  }),
};

export default PdfReader;
