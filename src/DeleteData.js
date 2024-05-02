// DeleteData.js
import React from 'react';

const DeleteData = ({ onDeleteData, itemId }) => {
  const handleDelete = () => {
    onDeleteData(itemId);
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteData;
