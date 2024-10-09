import Rating from "./Rating";

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
        <div className="flex flex-col justify-center items-center text-center p-3 py-6 cursor-pointer border rounded-lg bg-white">
            <img src={service.src} alt='image' className="mb-4 rounded-lg" />
            <h2 className="md:text-xl text-gray-800 font-semibold">{service.name}</h2>
            <p className="text-blue-600 text-sm font-semibold ">{service.service}</p>
            <p className="my-2 text-gray-400 text-sm ">{service.desc}</p>

            {/* Star Rating */}
            <Rating />

            <p className="mt-4 text-gray-400 font-medium">Hourly Rate <br /> <span className=" ml-1 text-gray-700 font-bold">{service.rate}</span></p>
        </div>
    );
}

export function ServiceTypeCard({ service }: ServiceTypeProps) {
    return (
        <div className="p-4 mr-4 rounded-lg bg-white h-56 min-w-52 flex flex-col items-center">
            <h2 className=" w-full text-lg text-center text-gray-600 font-semibold">{service.name}</h2>
            <img src={service.src} alt='image' className="rounded-lg" />
        </div>
    );
}