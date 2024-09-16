"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import countriesData from "@/countries.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const countries = countriesData.map((country) => ({
  name: country.name,
  code: country.code,
  flag: country.flag,
}));

const Page = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    kingsChat: "",
    email: "",
    country: "",
  });
  const router = useRouter();

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
          className={`w-[257px] h-[257px] rounded-xl border-2 py-10 font-medium space-y-3 transition-colors duration-300 ${
            isSelected
              ? "bg-[#035ADC] border-[#035ADC] text-white"
              : "bg-white border-[#035ADC] text-[#035ADC] group-hover:bg-[#035ADC] group-hover:text-white"
          }`}
        >
          <div className="px-8">
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
          <div className="w-[180px] text-[32px] text-start px-8">{label}</div>
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
        return "Sign Up as a Client";
      case "vendor":
        return "Sign Up as a Vendor";
      case "freelancer":
        return "Sign Up as a Freelancer";
      default:
        return "Sign Up";
    }
  };

  const handleSignUp = () => {
    if (selectedType) {
      setShowForm(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userType: selectedType }),
      });

      if (response.ok) {
        const user = await response.json();
        // Sign in the user after successful signup
        await signIn("credentials", {
          email: user.email,
          password: "password", // You should implement a proper password flow
          callbackUrl: "/dashboard",
        });
      } else {
        // Handle error
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="w-[512px] space-y-4">
        <div className="text-black text-[14px] space-y-2">
          <label htmlFor="firstName" className="font-medium">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            className="w-full h-[48px] p-2 border border-black rounded-lg"
          />
        </div>
        <div className="text-black text-[14px] space-y-2">
          <label htmlFor="lastName" className="font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your Last name"
            className="w-full h-[48px] p-2 border border-black rounded-lg"
          />
        </div>
        <div className="text-black text-[14px] space-y-2">
          <label htmlFor="phoneNumber" className="font-medium">
            KingsChat Number
          </label>
          <input
            type="text"
            name="kingsChat"
            value={formData.kingsChat}
            onChange={handleInputChange}
            placeholder="Enter your KingsChat Number"
            className="w-full h-[48px] p-2 border border-black rounded-lg"
          />
        </div>
        <div className="text-black text-[14px] space-y-2">
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email Address"
            className="w-full h-[48px] p-2 border border-black rounded-lg"
          />
        </div>
        <div className="text-black text-[14px] space-y-2">
          <label htmlFor="country" className="font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full h-[48px] p-2 border border-black rounded-lg"
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                <Image
                  src={country.flag}
                  width={24}
                  height={24}
                  alt={`${country.name} flag`}
                  className="w-6 h-4 inline-block mr-2"
                />
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start space-x-2 text-[14px] text-black">
          <input
            type="checkbox"
            id="agreementCheckbox"
            className="mt-1 accent-[#035ADC]"
          />
          <label htmlFor="agreementCheckbox" className="cursor-pointer">
            Yes, I understand and agree to the{" "}
            <span className="text-[#035ADC]">Escrow Terms of Service</span>,
            including the User{" "}
            <span className="text-[#035ADC]">Agreement and Privacy Policy</span>
            .
          </label>
        </div>
        <button
          type="submit"
          className="w-full mt-5 h-[50px] bg-[#035ADC] font-medium text-white rounded-lg"
        >
          Create Account
        </button>
      </form>
    );
  };

  return (
    <main className="bg-white w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center space-y-8">
        {!showForm ? (
          <>
            <div className="text-[32px] text-black mb-4 font-medium">
              Create an Escrow Account
            </div>
            <div className="flex space-x-[32px]">
              {renderButton("client", "icon", "I am a Client")}
              {renderButton("vendor", "cart", "I am a Vendor")}
              {renderButton("freelancer", "spanner", "I am a Freelancer")}
            </div>
            <button
              className="w-[512px] h-[50px] bg-[#035ADC] font-medium text-white rounded-lg"
              onClick={handleSignUp}
            >
              {getButtonText()}
            </button>
            <Link href={"/auth/signin"} className="text-black text-[14px] font-medium">
              Already have an Account?{" "}
              <span className="text-[#035ADC]">Login</span>
            </Link>
          </>
        ) : (
          <div className="space-y-4 flex flex-col items-center justify-center">
            <div className="text-[32px] text-black font-medium">
              Create an Escrow Account
            </div>
            {renderForm()}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;