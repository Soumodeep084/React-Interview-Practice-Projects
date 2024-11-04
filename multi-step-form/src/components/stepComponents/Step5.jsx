import React from 'react';
import './Step5.css'

export default function Step5({ prevBtn, formData , handleSubmit }) {
    return (
        <div className="container-box">
            <h2>Review Your Details</h2>
            <div className="details-container">
                <div className="detail">
                    <strong>Name:</strong> {formData.name}
                </div>
                <div className="detail">
                    <strong>Age:</strong> {formData.age}
                </div>
                <div className="detail">
                    <strong>Gender:</strong> {formData.gender}
                </div>
                <div className="detail">
                    <strong>Date of Birth:</strong> {formData.dob}
                </div>
                <div className="detail">
                    <strong>Email:</strong> {formData.email}
                </div>
                <div className="detail">
                    <strong>Phone:</strong> {formData.phone}
                </div>
                <div className="detail">
                    <strong>Country:</strong> {formData.country}
                </div>
                <div className="detail">
                    <strong>Qualification:</strong> {formData.qualification}
                </div>
                <div className="detail">
                    <strong>College Name:</strong> {formData.College_Name}
                </div>
                <div className="detail">
                    <strong>Graduation Year:</strong> {formData.Graduation_Year}
                </div>
                <div className="detail">
                    <strong>Bank Name:</strong> {formData.Bank_Name}
                </div>
                <div className="detail">
                    <strong>Bank IFSC:</strong> {formData.Bank_IFSC}
                </div>
                <div className="detail">
                    <strong>Account No:</strong> {formData.Account_No}
                </div>
            </div>

            <p className="message">Please check your details carefully before submitting.</p>

            <div className="container text-center">
                <button type="button" onClick={prevBtn} className="btn btn-warning mt-3 text-uppercase fw-bold mx-2" style={{ fontFamily: "Calibri" }}>Previous</button>
                <button type="button" onClick={handleSubmit} className="btn btn-success mt-3 text-uppercase fw-bold mx-2" style={{ fontFamily: "Calibri" }}>SUBMIT</button>
            </div>
        </div>
    );
}
