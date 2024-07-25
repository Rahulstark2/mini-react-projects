import React, { useState, useRef } from 'react';

const OTPLogin = () => {
  const [step, setStep] = useState('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([]);

  const handleSendOTP = () => {
    setStep('otp');
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 3) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleLogin = () => {
    // Here you would verify the OTP
    console.log('Logging in with OTP:', otp.join(''));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-80">
        <h2 className="text-2xl text-white mb-6">Login via OTP</h2>
        {step === 'mobile' ? (
          <>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={handleMobileChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-4"
            />
            <button
              onClick={handleSendOTP}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (otpInputs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-12 text-center bg-gray-700 text-white rounded"
                />
              ))}
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPLogin;