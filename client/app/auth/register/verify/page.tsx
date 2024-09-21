"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [resendTimer, setResendTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move to the next input if a digit is entered
      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]!.style.borderColor = '#035ADC';
    }
  };

  const handleBlur = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]!.style.borderColor = 'black';
    }
  };

  const handleVerify = () => {
    // Implement verification logic here
    console.log("Verifying code:", verificationCode.join(""));
  };

  const handleResend = () => {
    // Implement resend logic here
    console.log("Resending verification code");
    setResendTimer(59);
    setCanResend(false);
    toast.success('Email Sent!', {
      className: "text-white, bg-blue-600",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });


  };

  return (
    <main className="bg-white w-screen h-screen flex flex-col">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="flex flex-col items-center justify-center flex-grow text-black space-y-4">
        <div className="text-[32px] font-bold mb-4">Verify your Email</div>
        <div className="text-center mb-6 text-[22px]">
          We just sent a 6-digit code to your email
          <br />
          Please check your email to access the code
        </div>
        <div className="flex gap-4 mb-6">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              ref={(el: HTMLInputElement | null) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              className="w-[80px] h-[100px] text-center text-2xl border-4 border-gray-500 rounded-xl focus:outline-none"
            />
          ))}
        </div>
        <div>
          <Link href={"/provider/freelancer/userInfo"}>
            <button
              onClick={handleVerify}
              className="bg-[#035ADC] text-white py-2 px-4 rounded-xl w-[512px] h-[50px] mt-3"
            >
              Verify Email
            </button>
          </Link>
        </div>
        <div className="text-sm">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-[#035ADC] font-semibold"
            >
              Resend Code
            </button>
          ) : (
            <>
              Resend Code in{" "}
              <span className="font-semibold text-[#035ADC]">{resendTimer}</span>{" "}
              secs
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
