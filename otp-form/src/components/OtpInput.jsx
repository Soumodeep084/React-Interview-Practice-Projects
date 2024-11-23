import React, { useRef, useState, useEffect } from 'react';
import './Style.css';

const OtpInput = ({ length, handleOTPSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        // Focus on the first input box when the component is mounted
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;

        if (isNaN(value)) return; // Allow only numbers

        const newOTP = [...otp];
        // Update OTP value at the specific index
        newOTP[index] = value.charAt(0);
        setOtp(newOTP);

        // Combine OTP and trigger submit on the last field
        const combinedOTP = newOTP.join("");
        if (combinedOTP.length === length) {
            handleOTPSubmit(combinedOTP);
        }

        // Move to next input field
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {
        // Focus the clicked input field
        if (inputRefs.current[index]) {
            inputRefs.current[index].focus();
            inputRefs.current[index].setSelectionRange(1,1);
        }

        if( index > 0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            const newOTP = [...otp];
            newOTP[index] = ""; // Clear the current box
            setOtp(newOTP);

            // Move focus to the previous input field if Backspace is pressed
            if (index > 0 && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    return (
        <div>
            {otp.map((value, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)} // Assign each input to refs
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="otpInputBox"
                    maxLength={1} // Restrict input to 1 character
                    aria-label={`OTP input ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default OtpInput;
