import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Success = ({ newForm }) => {
    return (
        <div className="text-center mt-5">
            <FaCheckCircle size={80} color="green" className="mb-3" />
            <h2 className="text-success">Data Submitted Successfully!</h2>
            <p className="lead">Thank you for submitting your information.</p>
            
            {/* Button to redirect to MultiStep form */}
            <button
                onClick={newForm}
                className="btn btn-primary mt-4"
                style={{ fontSize: '1rem', padding: '10px 20px' }}
            >
                Fill Out Another Form
            </button>
        </div>
    );
};

export default Success;
