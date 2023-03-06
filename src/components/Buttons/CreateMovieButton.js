import React, { useState } from 'react';
import CreateMovie from './modals/CreateMovie';

const CreateMovieButton = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="CreateMovieButton">
      <button
        onClick={toggleForm}
        style={{
          backgroundColor: '#ff8800',
          color: '#fff',
          padding: '4px 8px', // smaller padding
          border: 'none',
          borderRadius: '5px',
          fontSize: '14px', // smaller font size
          transition: 'background-color 0.2s ease-out',
        }}
        hover={{ backgroundColor: '#ffaa00' }}
      >
        Create Movie
      </button>
      {showForm && (
        <div className="form-wrapper">
          <div className="form-container">
            <CreateMovie onSubmit={onSubmit} onClose={toggleForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMovieButton;