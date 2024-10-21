"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const VerifyContent = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [resendTimer, setResendTimer] = useState(10);
  const [canResend, setCanResend] = useState(false);
  const [verified, setVerified] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      toast.error("No email provided. Redirecting to registration page.");
      setTimeout(() => {
        router.push("/auth/register");
      }, 3000);
    }
  }, [email, router]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const verifyEmailMutation = useMutation({
    mutationFn: async (verificationCode: string) => {
      const response = await fetch(
        "https://api.uno-finance.com/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            verificationCode,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Verification failed");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setVerified(true);
      // Redirect to sign-in page after a short delay
      setTimeout(() => {
        router.push("/auth/signin");
      }, 2000); // 2 seconds delay
    },
    onError: (error) => {
      toast.error("Verification failed. Please try again.");
    },
  });

  const resendVerificationMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(
        "https://api.uno-finance.com/auth/resend-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to resend verification code");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setResendTimer(59);
      setCanResend(false);
    },
    onError: (error) => {
      toast.error("Failed to resend verification code. Please try again.");
    },
  });

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
      inputRefs.current[index]!.style.borderColor = "#035ADC";
    }
  };

  const handleBlur = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]!.style.borderColor = "black";
    }
  };

  const handleVerify = () => {
    const code = verificationCode.join("");
    verifyEmailMutation.mutate(code);
  };

  const handleResend = () => {
    // Implement resend logic here
    console.log("Resending verification code");
    setResendTimer(10);
    setCanResend(false);

    toast.success("Code was Sent!", {
      className: "text-white bg-blue-600",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (canResend && email) {
      resendVerificationMutation.mutate(email);
    }
  };


  function checkVerification() {
    setVerified(!verified);
  }

  function Verify() {
    return (
      <main className="bg-white w-screen h-screen flex flex-col p-2">
        <div className="w-full flex flex-col items-center justify-center flex-grow text-black space-y-4">
          <div className="text-2xl font-semibold md:mb-4">Verify your Email</div>
          <div className="text-center mb-6 text-[14px]">
            We just sent a 6-digit code to your email
            <br />
            Please check your email to access the code
          </div>
  if (!email) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white w-screen h-screen flex flex-col p-2">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <div className="w-full flex flex-col items-center justify-center flex-grow text-black space-y-4">
        <div className="text-[32px] font-bold mb-4">Verify your Email</div>
        <div className="text-center mb-6 text-[22px]">
          We just sent a 6-digit code to {email}
          <br />
          Please check your email to access the code
        </div>

          <div className="flex gap-2 md:gap-4 mb-6">
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
                className="w-[45px] h-[60px] md:w-[80px] md:h-[100px] text-center text-2xl border-4 border-gray-500 rounded-xl focus:outline-none"
              />
            ))}
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
            onClick={handleVerify}
            className="bg-[#035ADC] text-white py-2 px-4 rounded-xl w-full h-[50px] mt-3"
            disabled={verifyEmailMutation.isPending}
          >
            {verifyEmailMutation.isPending ? "Verifying..." : "Verify Email"}
          </button>
        </div>
        <div className="text-sm">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-[#035ADC] font-semibold"
              disabled={resendVerificationMutation.isPending}
            >
              {resendVerificationMutation.isPending
                ? "Resending..."
                : "Resend Code"}
            </button>
          ) : (
            <>
              Resend Code in{" "}
              <span className="font-semibold text-[#035ADC]">
                {resendTimer}
              </span>{" "}
              secs
            </>
          )}
        </div>
      </div>
    </main>
  );
};

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#035ADC" size={40} />
        </div>
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
          return "Select Role";
      }
    };


    return (
      <div className="w-full h-screen flex flex-col items-center bg-white justify-center p-3">
        <div className="text-2xl text-black mb-4 font-semibold">
          <p>Select Your Role</p>
        </div>

        <div className="md:w-[1000px] md:h-72 grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="flex justify-center items-center">{renderButton("client", "icon", "I am a Client")}</div>
          <div className="flex justify-center items-center">{renderButton("vendor", "cart", "I am a Vendor")}</div>
          <div className="flex justify-center items-center max-sm:col-span-2 md:col-span-1">{renderButton("freelancer", "spanner", "I am a Freelancer")}</div>
        </div>

        <Link href={"/provider/freelancer/userInfo"}
          className="w-full md:w-96 h-[50px] bg-[#035ADC] font-medium text-white rounded-lg my-5">
          <button className="w-full h-full">{getButtonText()}</button>
        </Link>

      </div>
    );
  }

  return (
    <>
      {!verified ? <Verify /> : <ChooseRole />}
    </>
      }
    >
      <VerifyContent />
    </Suspense>
  );
};

export default Page;
