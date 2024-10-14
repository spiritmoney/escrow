import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import Navbar from "@/app/components/Navbar";
import ServiceCard from "@/app/components/ServiceCard";
import Link from "next/link";

const services = [
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
    {
        id: 5, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 6, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 7, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 8, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 9, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 10, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 11, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 12, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 13, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 14, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 15, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
    {
        id: 16, name: 'Kingsley Odim', service: 'Full Stack Developer',
        desc: 'I will build your website using Next.js and build the backend using Nest.js',
        rate: '10.5 Espees', src: '/images/profile.png'
    },
]

const related = [
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
];

export default function ServicesSearch() {

    return (
        <>
            <Navbar />
            <div className="w-11/12 my-10 mx-auto">
                <span className="w-full flex items-center justify-between pb-5">
                    <h1 className="text-2xl text-black font-medium">Search</h1>

                    <Link href={"/"}>
                        <button className="text-blue-600 p-2">Close</button>
                    </Link>
                </span>

                <Heading text="Results for 'Full Stack Developer'" />
                <div className="min-w-full container bg-gray-100 p-5 mb-20 rounded-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map(service => (
                            <Link href={'/service/1'}>
                                <ServiceCard key={service.id} service={service} />
                            </Link>
                        ))}
                    </div>

                </div>

                <Heading text="Related Services" />
                <div className="min-w-full container bg-gray-100 p-5 mb-20 rounded-lg mx-auto">
                    <div className="mx-auto flex items-center overflow-scroll rounded-lg"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {related.map(service => (
                            <Link href={'/service/1'} className="mr-3 min-w-52">
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