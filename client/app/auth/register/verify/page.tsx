"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [verified, setVerified] = useState(false);

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

  function checkVerification() {
    setVerified(!verified);
  }

  function Verify() {
    return (
      <main className="bg-white w-screen h-screen flex flex-col p-2">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

        <div className="w-full flex flex-col items-center justify-center flex-grow text-black space-y-4">
          <div className="text-[32px] font-bold mb-4">Verify your Email</div>
          <div className="text-center mb-6 text-[22px]">
            We just sent a 6-digit code to your email
            <br />
            Please check your email to access the code
          </div>

          <div className="flex gap-3 md:gap-4 mb-6">
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
                className="w-[50px] h-[70px] md:w-[80px] md:h-[100px] text-center text-2xl border-4 border-gray-500 rounded-xl focus:outline-none"
              />
            ))}
          </div>

          <div className="w-80 mx-auto">
            <button
              onClick={() => { handleVerify(); checkVerification();}}
              className="bg-[#035ADC] text-white py-2 px-4 rounded-xl w-full h-[50px] mt-3"
            >
              Verify Email
            </button>
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
  }

  function ChooseRole() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleSelect = (type: string) => {
      setSelectedType(type);
    };

    const renderButton = (type: string, icon: string, label: string) => {
      const isSelected = selectedType === type;

      return (
        <button
          className="relative group"
          onMouseEnter={() => !selectedType && setSelectedType(type)}
          onMouseLeave={() => !selectedType && setSelectedType(null)}
          onClick={() => handleSelect(type)}
        >
          <div
            className={`w-44 h-44 md:w-[257px] md:h-[257px] rounded-xl border-2 p-6 md:py-8 flex flex-col items-start font-medium space-y-3 transition-colors duration-300 ${isSelected
              ? "bg-[#035ADC] border-[#035ADC] text-white"
              : "bg-white border-[#035ADC] text-[#035ADC] group-hover:bg-[#035ADC] group-hover:text-white"
              }`}
          >
            <div className="md:px-4">
              <Image
                src={isSelected ? `/${icon}.svg` : `/${icon}-blue.svg`}
                alt="icon"
                width={41}
                height={40}
                className="group-hover:hidden"
              />
              <Image
                src={`/${icon}.svg`}
                alt="icon"
                width={41}
                height={40}
                className="hidden group-hover:block"
              />
            </div>
            <p className="w-full md:w-[180px] text-[20px] md:text-[32px] text-start md:px-4">{label}</p>
          </div>
          <input
            type="radio"
            className="absolute top-2 right-2 w-6 h-6 accent-[#035ADC] bg-white border-[#035ADC] checked:bg-[#035ADC]"
            name="userType"
            value={type}
            checked={isSelected}
            onChange={() => handleSelect(type)}
          />
        </button>
      );
    };

    const getButtonText = () => {
      switch (selectedType) {
        case "client":
          return "Continue as a Client";
        case "vendor":
          return "Continue as a Vendor";
        case "freelancer":
          return "Continue as a Freelancer";
        default:
          return "Selct Role";
      }
    };


    return (
      <div className="w-full h-screen flex flex-col items-center bg-white justify-center p-3">
        <div className="text-[32px] text-black mb-4 font-medium">
          <p>Select Your Role</p>
        </div>
        <div className="md:flex md:space-x-[32px] justify-center w-full 
            grid grid-cols-2 gap-2 items-center">
          {renderButton("client", "icon", "I am a Client")}
          {renderButton("vendor", "cart", "I am a Vendor")}
          <div className="col-span-2 flex justify-center">{renderButton("freelancer", "spanner", "I am a Freelancer")}</div>
        </div>
        <Link href={"/provider/freelancer/userInfo"} className="w-full">
          <button
            className="w-full md:w-96 h-[50px] bg-[#035ADC] font-medium text-white rounded-lg my-5"
          >
            {getButtonText()}
          </button>
        </Link>

      </div>
    );
  }

  return (
    <>
      {!verified ? <Verify /> : <ChooseRole />}
    </>
  );
};

export default Page;
