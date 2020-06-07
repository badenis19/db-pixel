import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({entity}) => {

  return (
    <div className="page-header">
      <h1>{entity}</h1>
    </div>
  )
}

PageHeader.propTypes = {
  entity: PropTypes.string.isRequired
}


export default PageHeader;
