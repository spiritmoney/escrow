"use client";

import next from 'next';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };


    return (
        <div className='w-screen bg-white flex items-center justify-center'>
            {step === 0 && <Welcome nextStep={nextStep} />}
            {step === 1 && <Step1 nextStep={nextStep} prevStep={prevStep} />}
            {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} />}
            {step === 5 && <Step5 nextStep={nextStep} prevStep={prevStep} />}
            {step === 6 && <Step6 nextStep={nextStep} prevStep={prevStep} />}
        </div>
    );
}

function Welcome({ nextStep }: { nextStep: () => void }) {
    return (
        <div className="container bg-white flex flex-col items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex flex-col items-center space-y-3'>
                    <h1 className='text-2xl font-semibold'>Fill out your profile as a <span className='text-blue-600'>Freelancer</span> </h1>
                    <p className='w-96 text-center'>Fill out your profile to provide a high quality experience for all clients</p>
                </div>

                <p className='pt-5'>Here is how</p>

                <div className='flex space-x-2 items-center'>
                    <img src="/images/Ellipse.png" alt="" />
                    <p>Fill out your profile thoroughly</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <img src="/images/Ellipse.png" alt="" />
                    <p>Submit your profile</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <img src="/images/Ellipse.png" alt="" />
                    <p>You will receive an email within 24 hours to let you know if you were accepted</p>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <button
                        onClick={nextStep}
                        className='p-3 m-5 w-[450px] bg-blue-600 text-white rounded-lg'>
                        Start my Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

// Step 1: Expertise Component
function Step1({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {


    return (
        <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Expertise</h1>
                    <p className='text-sm'>1/6</p>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>What is the title of the service you offer?</p>
                    <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>What is the category of the service you offer?</p>
                    <select name="category" className='w-full border-2 border-gray-400 rounded-lg p-2 text-gray-400'>
                        <option value="">Category</option>
                        <option value="">Category1</option>
                        <option value="">Category2</option>
                    </select>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>What is skills do you offer?</p>
                    <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-sm text-blue-600 cursor-pointer'>+ Add Another Skill</h1>
                        <p className='text-[12px] text-gray-500'>Enter at lest 1 skill</p>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 pb-4'>
                    <p>What is your expertise level</p>

                    <span className='flex items-center space-x-2'>
                        <input
                            type="radio"
                            className="w-4 h-4 accent-[#035ADC] bg-white border-[#035ADC] checked:bg-[#035ADC]"
                            name="userLevel"
                        />
                        <p className='text-sm'>Entry Level</p>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <input
                            type="radio"
                            className="w-4 h-4 accent-[#035ADC] bg-white border-[#035ADC] checked:bg-[#035ADC]"
                            name="userLevel"
                        />
                        <p className='text-sm'>Intermediate Level</p>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <input
                            type="radio"
                            className="w-4 h-4 accent-[#035ADC] bg-white border-[#035ADC] checked:bg-[#035ADC]"
                            name="userLevel"
                        />
                        <p className='text-sm'>Expert Level</p>
                    </span >
                </div>

                <div className='w-full flex items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>
                    <button onClick={nextStep} className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

// Step 2: Education Component
function Step2({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');

    // Function to generate years
    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 100; i--) {
            years.push(i);
        }
        return years;
    };
    return (
        <div className="container bg-white flex items-center justify-center text-black w-11/12 h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Education</h1>
                    <p className='text-sm'>2/6</p>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>School</p>
                    <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>
                <div>
                    <p className='text-[12px] font-semibold'>Area of Study (Optional)</p>
                    <input type="text" placeholder='eg. Computer Science' className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>
                <div>
                    <p className='text-[12px] font-semibold'>Degree (Optional)</p>
                    <input type="text" placeholder="eg. Bachelor's" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <div>
                    <label>Dates Attended (Optional)</label>
                    <div className='flex items-center justify-between w-full'>
                        {/* From Year Dropdown */}
                        <select className='border-2 border-gray-400 w-56 p-3 rounded-lg text-gray-500' value={fromYear} onChange={(e) => setFromYear(e.target.value)}>
                            <option value="">From</option>
                            {generateYears().map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* To Year Dropdown */}
                        <select className='border-2 border-gray-400 w-56 p-3 rounded-lg text-gray-500' value={toYear} onChange={(e) => setToYear(e.target.value)}>
                            <option value="">To</option>
                            {generateYears().map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Description (Optional)</p>
                    <textarea name="Desc" rows={3} className='w-full border-2 border-gray-400 rounded-lg p-2'></textarea>
                </div>

                <h1 onClick={nextStep} className='text-sm text-blue-600 cursor-pointer border-b p-3'>Skip this step</h1>

                <div className='w-full flex items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>
                    <button onClick={nextStep} className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

// Step 3: Resume / Portfolio
function Step3({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {

    return (
        <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Resume</h1>
                    <p className='text-sm'>3/6</p>
                </div>

                <div className='w-full'>
                    <p className='text-[12px] font-semibold'>Upload your CV or Resume</p>
                    <label htmlFor="resume" className='w-full border-2 border-dashed border-gray-400 rounded-lg p-2 flex items-center justify-center cursor-pointer'>
                        <img src="/icons/upload.png" alt="" />
                    </label>
                    <input type="file" id='resume' className='hidden' />
                </div>
                <div>
                    <p className='text-[12px] font-semibold'>Provide Link to your Portfolio</p>
                    <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <h1 onClick={nextStep} className='text-sm text-blue-600 cursor-pointer border-b p-3'>Skip this step</h1>

                <div className='w-full flex items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>
                    <button onClick={nextStep} className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

// Step 3: Hourly Rate Component
function Step4({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    const [hourlyRate, setHourlyRate] = useState(10); // Default hourly rate

    // Function to increment the rate
    const incrementRate = () => {
        setHourlyRate(prevRate => prevRate + 1);
    };

    // Function to decrement the rate
    const decrementRate = () => {
        if (hourlyRate > 1) { // Ensure the rate doesn't go below 1
            setHourlyRate(prevRate => prevRate - 1);
        }
    };
    return (
        <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Horly Rate</h1>
                    <p className='text-sm'>4/6</p>
                </div>

                <div className='pb-20'>
                    <label htmlFor="hourly-rate">What is your hourly rate?</label>
                    <div className='flex items-center mt-5 border-2 border-gray-400 rounded-lg'>

                        {/* Rate Input */}
                        <input
                            id="hourly-rate"
                            type="text"
                            value={`${hourlyRate} Espees`}
                            readOnly
                            className='w-96 p-5 outline-none rounded-lg'
                        />

                        <div className='flex flex-col items-end space-y-2 w-40 p-4'>
                            {/* Increment Button */}
                            <button onClick={incrementRate}>
                                <img src="/icons/calcUp.png" width={15} alt="" />
                            </button>
                            {/* Decrement Button */}
                            <button onClick={decrementRate}>
                                <img src="/icons/calcDown.png" width={15} alt="" />
                            </button>
                        </div>

                    </div>
                </div>

                <div className='w-full flex items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>
                    <button onClick={nextStep} className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

// Step 4: Title and Overview Component
function Step5({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    const [text, setText] = useState(''); // State to track the input text
    const maxLength = 10; // Maximum number of characters allowed

    // Handler for when the text changes
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        // Ensure the input does not exceed the maximum length
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };
    return (
        <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Title & Overview</h1>
                    <p className='text-sm'>5/6</p>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Title</p>
                    <input type="text" placeholder="eg. Graphics Designer" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <div>
                    <label htmlFor="overview">Professional Overview</label>
                    <textarea
                        id="professional-overview"
                        placeholder="Highlight your top skills, experience, and interest. This is the first thing clients will see on your profile."
                        value={text}
                        onChange={handleTextChange}
                        rows={6}
                        className='w-full p-5 border-2 border-gray-400 rounded-lg'
                    />
                    {/* Character counter */}
                    <div className='text-right text-blue-600 my-2'>
                        {maxLength - text.length} characters left
                    </div>
                </div>


                <div className='w-full flex items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>
                    <button onClick={nextStep} className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

// Step 5: Profile Photo Component
function Step6({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    return (
        <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
            <div className=' border-2 border-gray-300 rounded-lg p-7 w-[550px] flex flex-col space-y-3'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Profile Photo</h1>
                    <p className='text-sm'>6/6</p>
                </div>

                <p className='text-sm'>Please upload a professional portrait that clearly shows your face</p>

                <div className='flex flex-col items-start'>
                    <img id="profile-image" src="/images/placeholder.png" alt="Profile Photo" />
                    <label className='font-semibold text-blue-600 pt-3 cursor-pointer' htmlFor="profile-image-input">+ Add Profile Photo</label>
                    <input className='hidden' type="file" id="profile-image-input" accept="image/*" />
                </div>

                <Link href={'/provider/freelancer/dashboard'}>
                    <h1 className='text-sm text-blue-600 cursor-pointer border-b p-3'>Skip this step</h1>
                </Link>

                <div className='w-full flex py-4 items-center justify-between'>
                    <button onClick={prevStep} className='w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                        Back
                    </button>

                    <Link href={'/provider/freelancer/dashboard'}>
                        <button className='w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default page