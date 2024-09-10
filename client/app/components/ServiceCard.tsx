interface ServiceTypeProps {
    service: {
        id: number;
        name: string;
        src: string;
    };
}

interface ServiceProps {
    service: {
        src: string;
        id: number;
        name: string;
        service: string;
        desc: string;
        rate: string;
    };
}

export default function ServiceCard({ service }: ServiceProps) {
    return (
        <div className="flex flex-col justify-center items-center p-2 border rounded-lg bg-white">
            <img src={service.src} alt='image' className="mb-4 rounded-lg" />
            <h2 className="text-xl text-gray-800 font-semibold">{service.name}</h2>
            <p className="text-blue-500 text-sm font-semibold ">{service.service}</p>
            <p className="mt-2 text-gray-400 text-sm px-1">{service.desc}</p>

            {/* Star Rating */}
            <div className="flex justify-center items-center mt-5">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.149h4.362c.969 0 1.371 1.24.588 1.81l-3.535 2.57 1.35 4.15c.3.92-.755 1.688-1.539 1.118l-3.535-2.572-3.535 2.571c-.784.57-1.839-.198-1.539-1.118l1.35-4.149-3.535-2.57c-.784-.57-.38-1.81.588-1.81h4.362l1.35-4.149z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.149h4.362c.969 0 1.371 1.24.588 1.81l-3.535 2.57 1.35 4.15c.3.92-.755 1.688-1.539 1.118l-3.535-2.572-3.535 2.571c-.784.57-1.839-.198-1.539-1.118l1.35-4.149-3.535-2.57c-.784-.57-.38-1.81.588-1.81h4.362l1.35-4.149z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.149h4.362c.969 0 1.371 1.24.588 1.81l-3.535 2.57 1.35 4.15c.3.92-.755 1.688-1.539 1.118l-3.535-2.572-3.535 2.571c-.784.57-1.839-.198-1.539-1.118l1.35-4.149-3.535-2.57c-.784-.57-.38-1.81.588-1.81h4.362l1.35-4.149z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.149h4.362c.969 0 1.371 1.24.588 1.81l-3.535 2.57 1.35 4.15c.3.92-.755 1.688-1.539 1.118l-3.535-2.572-3.535 2.571c-.784.57-1.839-.198-1.539-1.118l1.35-4.149-3.535-2.57c-.784-.57-.38-1.81.588-1.81h4.362l1.35-4.149z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.149h4.362c.969 0 1.371 1.24.588 1.81l-3.535 2.57 1.35 4.15c.3.92-.755 1.688-1.539 1.118l-3.535-2.572-3.535 2.571c-.784.57-1.839-.198-1.539-1.118l1.35-4.149-3.535-2.57c-.784-.57-.38-1.81.588-1.81h4.362l1.35-4.149z" />
                    </svg>
                </div>
                <span className="ml-2 text-gray-600 text-sm">4.2</span>
            </div>

            <p className="mt-4 text-gray-400 font-medium">Hourly Rate <span className=" ml-1 text-gray-700 font-bold">{service.rate}</span></p>
        </div>
    );
}

export function ServiceTypeCard({ service }: ServiceTypeProps) {
    return (
        <div className="p-4 rounded-lg bg-white">
            <h2 className="text-lg text-gray-600 font-semibold">{service.name}</h2>
            <img src={service.src} alt='image' className="mb-4 rounded-lg" />
        </div>
    );
}