import React from 'react';


import './MySkills.css'; // Make sure to adjust the path

const YourComponent: React.FC = () => {
  return (
    <div className="grid-container">
      <div className="card">
        <div className="inner-grid">
          <div className="centered-image">
            <img src={'https://placedog.net/500'} width="64px" height="64px" alt="/" />
          </div>
          <div className="centered-text">
            <h3>HTML</h3>
          </div>
          <div className="centered-image">
            <img src={'https://placedog.net/500'} width="64px" height="64px" alt="/" />
          </div>
          <div className="centered-text">
            <h3>HTML</h3>
          </div>
          <div className="centered-image">
            <img src={'https://placedog.net/500'} width="64px" height="64px" alt="/" />
          </div>
          <div className="centered-text">
            <h3>HTML</h3>
          </div>
          <div className="centered-image">
            <img src={'https://placedog.net/500'} width="64px" height="64px" alt="/" />
          </div>
          <div className="centered-text">
            <h3>HTML</h3>
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
  );
};

export default YourComponent;
