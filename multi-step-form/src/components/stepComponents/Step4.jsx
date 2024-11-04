import React from 'react';

const Step4 = ({ prevBtn, nextBtn, formData, handleChange }) => {
    return (
        <div className="container-md container-fluid  mt-5">
            <form className="px-4 py-2 shadow rounded" style={{ backgroundColor: '#f9f9f9' }}>
                <h2 className="text-center text-uppercase mb-4 text-info" style={{ fontFamily: 'Calibri' }}>Account Details</h2>

                {/* Bank Name Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Bank Name: <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="Bank_Name"
                        value={formData.Bank_Name || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Bank Name"
                        required
                    />
                </div>

                {/* Bank IFSC Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Bank IFSC: <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="Bank_IFSC"
                        value={formData.Bank_IFSC || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        minLength={11}
                        maxLength={11}
                        placeholder="Enter your Bank IFSC CODE :"
                        required
                    />
                </div>

                {/* Account No Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Bank Account No : <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="Account_No"
                        value={formData.Account_No || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Bank Account No"
                        maxLength={11}  
                        minLength={11} 
                        required
                    />
                </div>

                {/* Previous &  Next Button */}
                <div className="container text-center">
                    <button type="button" onClick={prevBtn} className="btn btn-warning mt-3 text-uppercase fw-bold mx-2" style={{ fontFamily: "Calibri" }}>Previous</button>
                    <button type="button" onClick={nextBtn} className="btn btn-success mt-3 text-uppercase fw-bold mx-2" style={{ fontFamily: "Calibri" }}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Step4;
