"use client";

import { services } from '../../data/Service';
import Rating from '../../components/Rating';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Heading from '@/app/components/Heading';
import Link from 'next/link';
import ServiceCard from '@/app/components/ServiceCard';
import { useState } from 'react';

const similars = [
    {
        id: 1, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 2, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 3, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 4, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
]

export default function ServicePage({ params }: { params: { id: string } }) {
    const serviceId = params.id;
    const service = services.find((s) => s.id === parseInt(serviceId));
    const [booking, setBooking] = useState(false);
    const [hourlyRate, setHourlyRate] = useState(10); // Default hourly rate

    if (!service) {
        return <div>Service not found</div>;
    }

    function bookNow() {
        setBooking(!booking);
    }

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
        <>
            <Navbar />
            <div className='w-11/12 mx-auto'>
                <div className="relative container bg-white rounded-xl mt-10 mx-auto min-w-full text-black">
                    {booking && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}

                    <div className="md:relative bg-white w-full p-7 rounded-xl flex items-start space-x-5">
                        <img src={service.src} alt={service.name} className="rounded-full w-14 h-14 md:w-28 md:h-28" />

                        <div>
                            <h2 className="text-sm font-semibold">{service.name}</h2>
                            <p className="text-gray-700 text-sm md:text-2xl font-medium">{service.service}</p>
                            <div className='flex flex-col items-start space-y-1 justify-center'>
                                <span className='flex items-center pt-2 space-x-2'>
                                    <img src="/icons/location2.png" alt="" width={15} />
                                    <p className='text-[10px] md:text-sm'>Nigeria</p>
                                </span>
                                <span className='flex items-center space-x-1 -ml-[2px] text-blue-600'>
                                    <img src="/icons/globelink.png" alt="" width={20} />
                                    <a href="" className='text-[10px] md:text-sm'>https://kingsleyodim.tech/</a>
                                </span>
                                <span className='flex items-center pb-2 space-x-2 text-blue-600'>
                                    <img src="/icons/resume.png" alt="" width={15} />
                                    <button className='text-[10px] md:text-sm'>Resume</button>
                                </span>
                                <Rating />
                            </div>

                        </div>

                        <div className='md:absolute md:top-5 md:right-10'>
                            <button className="px-3 md:px-6 py-2 mx-auto bg-blue-700 flex items-center space-x-2 text-white rounded-lg">
                                <img src="/icons/chat.png" alt="" className='w-6' />
                                <p className='hidden md:flex'>Send a Message</p>
                            </button>
                        </div>
                    </div>

                    <div className='px-7 mb-7'>
                        <div className="flex items-center text-[10px] md:text-sm space-x-2 mt-2 overflow-scroll"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {service.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-200 px-2 py-1 rounded-2xl">{tag}</span>
                            ))}
                        </div>
                        <p className="text-blue-600 font-semibold text-xl mt-3">{service.rate} /hr</p>
                    </div>

                    <p className='px-7'>Lorem ipsum dolor sit amet consectetur. Pellentesque mattis facilisis id porttitor tincidunt. Parturient praesent velit amet sed dapibus. Commodo nunc fermentum sit eget. Leo nunc tempus pellentesque pharetra porttitor et eget quisque. Egestas non bibendum cras pharetra lacinia in dis posuere at. Ultrices in nibh cursus scelerisque dui quisque felis. Et enim nisl velit mattis cum cursus. Tristique aliquam enim ac ipsum pulvinar mi purus. Dignissim suspendisse quisque arcu turpis a tempus vel dictum. Amet pellentesque nisl amet platea malesuada. Vitae habitant tortor auctor fringilla mattis. Cras nullam mattis volutpat nibh tortor risus purus. Sed rhoncus sagittis iaculis viverra tortor velit adipiscing metus ornare. Nisi ultrices nulla orci sed mi ultrices. Sed sed viverra a scelerisque pretium cursus nibh. Maecenas nunc sagittis malesuada elementum mi quam massa feugiat. Nulla quis leo purus nibh sit ac sed est. Fermentum ut blandit faucibus ligula mauris est lacus eget tincidunt. Nibh diam pharetra ornare egestas duis lacus id vitae lectus. Imperdiet in semper rutrum volutpat pharetra. Ultrices at in mi ut tincidunt. </p>

                    <p className='p-7'>mi purus at. Nunc faucibus malesuada nunc ac. In faucibus aenean elementum vitae lobortis diam. Sapien nulla senectus vitae enim pellentesque consequat in tortor ut. Nec orci interdum aliquam pellentesque amet sed praesent euismod. Et id a aliquet est turpis. Sapien pulvinar etiam semper et tincidunt semper aliquet sed. Eget eu nibh nulla sapien tortor. Magna ut lacinia arcu maecenas nec mollis. Nulla erat nunc diam proin. Rhoncus erat vitae molestie tempor vitae ipsum est non est. Neque curabitur imperdiet congue vitae mattis. Donec eget bibendum fames odio velit ut in vel leo. Volutpat vestibulum imperdiet risus etiam at sed at morbi. Duis potenti hac aliquet aliquam mauris netus facilisi sed. At morbi sit lorem diam hendrerit ac odio sit. Aliquam nisl laoreet nisi ultrices massa rhoncus faucibus. Mattis eu vel at nulla suscipit at nec sed purus. Vel iaculis massa volutpat suspendisse massa purus amet. Integer sit ut velit id in diam in pulvinar posuere. Sit lacinia consectetur volutpat nunc. Leo pharetra lacinia auctor orci nibh massa nisi sem cursus. Cursus vitae commodo eget dolor in neque. Velit netus etiam diam eget.</p>

                    {/* Projects Section
                    <div className="p-6">
                        <h3 className="text-xl font-semibold">PROJECTS</h3>
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            {service.projects.map((project, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                    <img src="/images/portfolio.png" alt={project.name} />
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className='w-full  flex items-center'>
                        <button
                            onClick={bookNow}
                            className="m-6 px-6 py-2 mx-auto w-80 bg-blue-700 text-white rounded-lg">Book Now</button>
                    </div>
                    {booking &&
                        <div className='absolute bottom-5 inset-x-0 mx-auto z-50 bg-white border-2 border-gray-300 rounded-lg p-7 w-400px md:w-[550px] flex flex-col space-y-3'>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-xl font-semibold'>Book Service</h1>

                                <button onClick={bookNow} className='text-blue-600 text-3xl'>
                                    &times;
                                </button>
                            </div>

                            <div>
                                <p className='text-[12px] font-semibold'>Service Description</p>
                                <textarea name="Desc" rows={3} className='w-full border-2 border-gray-400 rounded-lg p-2'></textarea>
                            </div>

                            <div>
                                <p className='text-[12px] font-semibold'>Add Additional Document (Optional)</p>
                                <label htmlFor="selectDoc" className='w-full flex items-center justify-center text-sm text-blue-600 border-2 border-dashed border-gray-400 rounded-lg p-2 cursor-pointer'>
                                    <img src="/icons/upload.png" alt="" width={25} />
                                    Upload Document
                                </label>
                                <input type="file" id="selectDoc" className='hidden' />

                            </div>

                            <div>
                                <p className='text-[12px] font-semibold'>Start Date</p>
                                <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                            </div>
                            <div>
                                <p className='text-[12px] font-semibold'>Due Date</p>
                                <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                            </div>


                            <div>
                                <p className='text-[12px] font-semibold'>Mile Stone</p>
                                <input type="text" placeholder='Mile Stone description' className='w-full border-2 border-gray-400 rounded-lg p-2' />
                            </div>
                            <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />


                            <div>
                                <label htmlFor="hourly-rate">Amount in Espees</label>
                                <div className='flex items-center border-2 border-gray-400 rounded-lg'>

                                    {/* Rate Input */}
                                    <input
                                        id="hourly-rate"
                                        type="text"
                                        value={`${hourlyRate}`}
                                        readOnly
                                        className='w-full py-2 px-5 font-semibold outline-none rounded-lg'
                                    />

                                    <div className='flex flex-col items-end space-y-2 w-full p-4'>
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


                            <div className='flex items-center mx-auto'>
                                <img src="/icons/warning.png" alt="" />
                                <h1 className='text-xs p-3'>Kindly Note, Your Service description cannot be changed once sent</h1>
                            </div>


                            <button
                                onClick={bookNow}
                                className='w-full mx-auto p-3 text-sm rounded-lg bg-blue-600 text-white'>
                                Book Service
                            </button>

                        </div>
                    }
                </div>


                <Heading text="SIMILAR SERVICES" />

                <div className="min-w-full container bg-gray-100 p-5 rounded-lg mx-auto">
                    <div className="mx-auto flex items-center overflow-scroll rounded-lg"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {similars.map(service => (
                            <Link href={'/service/1'} className='mr-3 min-w-52'>
                                <ServiceCard key={service.id} service={service} />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}