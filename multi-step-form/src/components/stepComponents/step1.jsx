import React from 'react';

const Step1 = ({ nextBtn, formData, handleChange }) => {
    return (
        <div className="container-md container-fluid mt-5">
            <form className="p-4 shadow rounded" style={{ backgroundColor: '#f9f9f9' }}>
                <h2 className="text-center text-uppercase mb-4 text-primary" style={{ fontFamily: 'Calibri' }}>Personal Details</h2>

                {/* Name Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Name: <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        placeholder="Enter your Full Name (Surname Name MiddleName)"
                        required
                    />
                </div>

                {/* Age Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Age: <span className="text-danger">*</span></label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        min={1}
                        max={100}
                        placeholder="Enter your age"
                        required
                    />
                </div>

                {/* Gender Selection */}
                <div className="mb-3 d-flex">
                    <label className="form-label fw-bold">Gender: <span className="text-danger">*</span></label>
                    <div className="form-check mx-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Female</label>
                    </div>
                </div>

                {/* DOB Input */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Date of Birth: <span className="text-danger">*</span></label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob || ''}
                        onChange={handleChange}
                        className="px-2 font-monospace form-control"
                        required
                    />
                </div>

                {/* Next Button */}
                <div className="container text-center">
                    <button type="submit" onClick={nextBtn} className="btn btn-success mt-3 text-uppercase fw-bold" style={{ fontFamily: "Calibri" }}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Step1;
