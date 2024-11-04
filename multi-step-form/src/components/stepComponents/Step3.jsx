import React from 'react';

const Step3 = ({ prevBtn, nextBtn, formData, handleChange }) => {
    return (
        <div className="container-md container-fluid mt-5">
            <form className="p-4 shadow rounded" style={{ backgroundColor: '#f9f9f9' }}>
                <h2 className="text-center text-uppercase mb-4 text-danger" style={{ fontFamily: 'Calibri' }}>Educational Details</h2>

                {/* Qualification Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Qualification: <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="qualification"
                        value={formData.qualification || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Qualification : Ph.d in Computer Engineering"
                        required
                    />
                </div>

                {/* College Name Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">College Name: <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="College_Name"
                        value={formData.College_Name || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        min={10}
                        placeholder="Enter your College Name with city :"
                        required
                    />
                </div>

                {/* Graduation_Year Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Graduation Year : <span className="text-danger">*</span></label>
                    <input
                        type="number"
                        name="Graduation_Year"
                        value={formData.Graduation_Year || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Graduation Year"
                        max={new Date().getFullYear() + 1}  // Set max year to current year + 1
                        min={2000}                          // Optional: Set a minimum year if desired
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

export default Step3;
