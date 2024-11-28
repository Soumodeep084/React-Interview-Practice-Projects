import React from 'react';
import Quiz from './Components/Quiz';

const App = () => {
  return (
    <div 
      className='container-fluid d-flex align-items-center justify-content-center vh-100' 
      style={{ background: 'linear-gradient(to right, #c31432, #240b36)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5" >    
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
