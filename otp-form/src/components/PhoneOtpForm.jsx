import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtpInput from './OtpInput';

const PhoneOtpForm = () => {
    const length = 4;
    const [mobileNumber, setMobileNumber] = useState("");
    const [generatedOTP, setGeneratedOTP] = useState("");
    const [showNumberBox, setShowNumberBox] = useState(true);
    const [showOtpBox, setShowOtpBox] = useState(false); 

    const generateOTP = () => {
        const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let ans = "";
        for (var i = 1; i <= length; i++) {
            const randomIndex = Math.floor(Math.random() * NumberArray.length);
            ans += NumberArray[randomIndex];
        }
        setGeneratedOTP(ans);
        console.log('Generated OTP : ' + ans);
    };

    const handleSubmit = (event) => {
        const regex = /^[0-9]{10}$/;
        if (mobileNumber.length !== 10) {
            toast.warning('Number must be exactly 10 digits');
        } else if (!regex.test(mobileNumber)) {
            toast.warning('Invalid Mobile Number. Please enter a valid 10-digit number');
        } else {
            setMobileNumber("");
            generateOTP();
            setShowNumberBox(false);
            setShowOtpBox(true);
        }
    };

    const handleOTPSubmit = (otp) => {
        if(generatedOTP === otp){
            setShowNumberBox(true);
            setShowOtpBox(false);
            toast.success('OTP Verified Successfully');
        }
        else{
            toast.warning('Invalid OTP');
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                {showNumberBox && (
                    <div className="numberBox p-4 bg-light rounded shadow-sm">
                        <p className="my-2 text-center fs-4 fw-bold" style={{ fontFamily: 'Calibri' }}>
                            Welcome Here , <span className="text-primary">For Login</span>
                        </p>
                        <h4 className="mb-3 font-monospace fw-bold">Enter Mobile Number</h4>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter Mobile number" maxLength={10} value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} style={{ fontFamily: 'sans-serif' }} />
                        </div>
                        <button className="btn btn-primary btn-block btn-sm fw-bold" style={{ fontFamily: 'Calibri', letterSpacing: '1px' }} onClick={handleSubmit}>
                            Send OTP
                        </button>
                    </div>
                )}

                {showOtpBox && (
                    <div className="otpBox">
                        <h3 className="mb-2 font-monospace fw-bold">Login with Phone Number</h3>
                        <p className="mb-2 fw-bold  fs-6" style={{fontFamily:'Arial'}}>
                            OTP has been sent to {mobileNumber}
                        </p>
                        <p className="mb-1 font-monospace text-center fs-5">Enter OTP</p>
                        <OtpInput length={length} handleOTPSubmit={handleOTPSubmit} />
                    </div>
                )}
            </div>
            <ToastContainer position="top-center" />
        </>
    );
};

export default PhoneOtpForm;
