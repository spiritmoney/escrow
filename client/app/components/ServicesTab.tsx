import Heading from '../components/Heading';
import ServiceTypes from '../components/ServiceTypes';
import ServiceCard, { ServiceTypeCard } from '../components/ServiceCard';
import Link from 'next/link';

const servicesTypes = [
    { id: 1, name: 'Graphics Design', src: '/images/service.png' },
    { id: 2, name: 'Web Development', src: '/images/service.png' },
    { id: 3, name: 'Web Development', src: '/images/service.png' },
    { id: 4, name: 'Web Development', src: '/images/service.png' },
    { id: 5, name: 'Web Development', src: '/images/service.png' },
];

const services = [
    { id: 1, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 2, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 3, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 4, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 5, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 6, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 7, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 8, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 9, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 10, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 11, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 12, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 13, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 14, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 15, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
    { id: 16, name: 'Kingsley Odim', service: 'Full Stack Developer', 
        desc: 'I will build your website using Next.js and build the backend using Nest.js', 
        rate: '10.5 Espees', src: '/images/profile.png' },
]

export default function ServicesTab() {
    return (
        <>
            <ServiceTypes />

            <Heading text="TOP SERVICES"/>

            <div className="container w-11/12 mx-auto">
                <div className="grid grid-cols-5 gap-6">
                    {servicesTypes.map(service => (
                        <ServiceTypeCard key={service.id} service={service} />
                    ))}
                </div>
            </div>

            <Heading text="ALL SERVICES" />
            <div className="container w-11/12 bg-gray-100 p-5 rounded-lg mx-auto">
                <div className="grid grid-cols-4 gap-6">
                    {services.map(service => (
                        <Link href={'/service/1'}>
                            <ServiceCard key={service.id} service={service} />
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}