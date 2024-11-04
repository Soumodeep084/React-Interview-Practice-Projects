import React from 'react';

const Step2 = ({ prevBtn, nextBtn, formData, handleChange }) => {
    return (
        <div className="container-md container-fluid mt-5">
            <form className="p-4 shadow rounded" style={{ backgroundColor: '#f9f9f9' }}>
                <h2 className="text-center text-uppercase mb-4 text-success" style={{ fontFamily: 'Calibri' }}>Contact Details</h2>

                {/* Email Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Email: <span className="text-danger">*</span></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Email"
                        required
                    />
                </div>

                {/* Mobile Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Mobile No: <span className="text-danger">*</span></label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        min={10}
                        placeholder="Enter your Mobile No"
                        required
                    />
                </div>

                {/* Country Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Country : <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder='Enter your Country Name'
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

export default Step2;
