import React, { useState } from 'react';
import Step1 from './stepComponents/step1';
import Step2 from './stepComponents/Step2';
import Step3 from './stepComponents/Step3';
import Step4 from './stepComponents/Step4';
import Step5 from './stepComponents/Step5';
import Success from './stepComponents/Success';

const MultiStep = () => {
    const [step, setStep] = useState(1);
    const CheckOut_Steps = ['Personal Details', 'Contact Details', 'Educational Details', 'Account Details', 'Submit Data'];
    const totalSteps = CheckOut_Steps.length;

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        dob: '',
        email: '',
        phone: '',
        country: '',
        qualification: '',
        College_Name: '',
        Graduation_Year: '',
        Bank_Name: '',
        Bank_IFSC: '',
        Account_No: '',
    });

    const prevBtn = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const nextBtn = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation logic for each field

        if (step === 1) {
            // Name: Check if it's not empty and contains only letters and spaces
            if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
                alert('Please enter a valid name. Only letters and spaces are allowed.');
                return;
            }

            // Age: Check if age is a number between 1 and 100
            if (!formData.age || formData.age < 1 || formData.age > 100) {
                alert('Please enter a valid age between 1 and 100.');
                return;
            }

            // Gender: Check if gender is selected
            if (!formData.gender) {
                alert('Please select your gender.');
                return;
            }

            // Date of Birth: Check if DOB is provided
            if (!formData.dob) {
                alert('Please enter your date of birth.');
                return;
            }
        }

        if (step === 2) {
            // Email: Validate email format
            if (!formData.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Phone: Check if phone number is valid (10 digits)
            if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            // Country: Check if country is selected
            if (!formData.country) {
                alert('Please select your country.');
                return;
            }
        }

        if (step === 3) {
            // Qualification: Check if qualification is provided
            if (!formData.qualification) {
                alert('Please enter your qualification.');
                return;
            }

            // College Name: Check if college name is provided
            if (!formData.College_Name) {
                alert('Please enter your college name.');
                return;
            }

            // Graduation Year: Check if graduation year is a valid year between 1900 and the current year
            const currentYear = new Date().getFullYear();
            if (!formData.Graduation_Year || formData.Graduation_Year < 1900 || formData.Graduation_Year > currentYear + 1) {
                alert(`Please enter a valid graduation year between 1900 and ${currentYear}.`);
                return;
            }
        }

        if (step === 4) {
            // Bank Name: Check if bank name is provided
            if (!formData.Bank_Name) {
                alert('Please enter your bank name.');
                return;
            }

            // Bank IFSC: Validate IFSC code format (e.g., 4 letters followed by 7 digits)
            if (!formData.Bank_IFSC || !/^[A-Za-z]{4}\d{7}$/.test(formData.Bank_IFSC)) {
                alert('Please enter a valid IFSC code (e.g., ABCD1234567).');
                return;
            }

            // Account Number: Check if account number is valid (usually 9-18 digits)
            if (!formData.Account_No || !/^\d{9,18}$/.test(formData.Account_No)) {
                alert('Please enter a valid account number (between 9 and 18 digits).');
                return;
            }
        }

        // If all validations pass, proceed to the next step
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            setStep(5); // Go to the submission screen when all steps are complete
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () =>{
        setStep(6);
    }

    const newPage = () =>{
        setFormData({
            name: '',
            age: '',
            gender: '',
            dob: '',
            email: '',
            phone: '',
            country: '',
            qualification: '',
            College_Name: '',
            Graduation_Year: '',
            Bank_Name: '',
            Bank_IFSC: '',
            Account_No: '',
        });
        setStep(1);
    }

    // Calculate progress percentage
    const progressPercentage = Math.min((step / totalSteps) * 100, 100);

    return (
        <div className="container-fluid mt-5">
            {/* Step Numbers */}
            <div className="d-flex justify-content-between mb-2">
                {CheckOut_Steps.map((label, index) => (
                    <div key={index} className="text-center" style={{ width: `${100 / totalSteps}%` }}>
                        <div
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor:
                                    step === index + 1
                                        ? '#17a2b8' // Current step: Blue
                                        : step > index + 1
                                            ? '#00b33c' // Completed steps: Green
                                            : '#e0e0e0', // Upcoming steps: Grey
                                color: step === index + 1 || step > index + 1 ? 'white' : 'black',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                border: '0.5px solid #eee',
                                padding: '20px',
                            }}
                        >
                            {index + 1}
                        </div>
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>{label}</div>
                    </div>
                ))}
            </div>


            {/* Progress Bar */}
            <div className="progress mb-4" style={{ height: '10px', backgroundColor: '#e0e0e0' }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progressPercentage}%`, backgroundColor: '#17a2b8' }}
                    aria-valuenow={progressPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>

            {/* Step Content */}
            <div className="step-content">
                {(() => {
                    switch (step) {
                        case 1:
                            return <Step1 nextBtn={nextBtn} steps={step} formData={formData} handleChange={handleChange} />;
                        case 2:
                            return <Step2 prevBtn={prevBtn} nextBtn={nextBtn} steps={step} formData={formData} handleChange={handleChange} />;
                        case 3:
                            return <Step3 prevBtn={prevBtn} nextBtn={nextBtn} steps={step} formData={formData} handleChange={handleChange} />;
                        case 4:
                            return <Step4 prevBtn={prevBtn} nextBtn={nextBtn} steps={step} formData={formData} handleChange={handleChange} />;
                        case 5:
                            return <Step5 prevBtn={prevBtn} formData={formData} handleSubmit={handleSubmit}/>;
                        default:
                            return <Success newForm={newPage} />;
                    }
                })()}
            </div>
        </div>
    );
};

export default MultiStep;
