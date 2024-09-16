import { use } from 'react';
import { services } from '../../data/Service';
import Rating from '../../components/Rating';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function ServicePage({ params }: { params: { id: string } }) {
    const serviceId = params.id;
    const service = services.find((s) => s.id === parseInt(serviceId));

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <>
            <Navbar />
            
            <div className="container bg-white rounded-lg mt-10 mx-auto w-full text-black">
                <div className="bg-white w-full p-6 rounded-lg flex items-center space-x-4">
                    <img src={service.src} alt={service.name} className="rounded-full w-24 h-24" />
                    <div className='flex flex-col justify-center'>
                        <h2 className="text-2xl font-semibold">{service.name}</h2>
                        <p className="text-blue-500">{service.service}</p>
                        
                        <div>
                            <span className='flex items-center space-x-1'>
                                <img src="/icons/location2.png" alt=""  width={15}/>
                                <p>Nigeria</p>
                            </span>
                        <Rating />
                        </div>

                        <div className="flex space-x-2 mt-2">
                            {service.tags.map((tag, index) => (
                                <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded">{tag}</span>
                            ))} 
                        </div>
                        <p className="text-blue-600 font-semibold text-xl">{service.rate} /hr</p>
                    </div>

                </div>
                    <p className='p-5'>Lorem ipsum dolor sit amet consectetur. Pellentesque mattis facilisis id porttitor tincidunt. Parturient praesent velit amet sed dapibus. Commodo nunc fermentum sit eget. Leo nunc tempus pellentesque pharetra porttitor et eget quisque. Egestas non bibendum cras pharetra lacinia in dis posuere at. Ultrices in nibh cursus scelerisque dui quisque felis. Et enim nisl velit mattis cum cursus. Tristique aliquam enim ac ipsum pulvinar mi purus. Dignissim suspendisse quisque arcu turpis a tempus vel dictum. Amet pellentesque nisl amet platea malesuada. Vitae habitant tortor auctor fringilla mattis. Cras nullam mattis volutpat nibh tortor risus purus. Sed rhoncus sagittis iaculis viverra tortor velit adipiscing metus ornare. Nisi ultrices nulla orci sed mi ultrices. Sed sed viverra a scelerisque pretium cursus nibh. Maecenas nunc sagittis malesuada elementum mi quam massa feugiat. Nulla quis leo purus nibh sit ac sed est. Fermentum ut blandit faucibus ligula mauris est lacus eget tincidunt. Nibh diam pharetra ornare egestas duis lacus id vitae lectus. Imperdiet in semper rutrum volutpat pharetra. Ultrices at in mi ut tincidunt. Egestas morbi lectus fusce leo. Dignissim consequat diam mi malesuada scelerisque. Sollicitudin gravida neque consectetur tincidunt tristique et dictum nunc. Pharetra amet suscipit purus eu. Pellentesque nisl velit eget condimentum facilisi nullam in volutpat. In porta suspendisse semper amet etiam vitae. Sed sit est at feugiat mi consectetur
                        mi purus at. Nunc faucibus malesuada nunc ac. In faucibus aenean elementum vitae lobortis diam. Sapien nulla senectus vitae enim pellentesque consequat in tortor ut. Nec orci interdum aliquam pellentesque amet sed praesent euismod. Et id a aliquet est turpis. Sapien pulvinar etiam semper et tincidunt semper aliquet sed. Eget eu nibh nulla sapien tortor. Magna ut lacinia arcu maecenas nec mollis. Nulla erat nunc diam proin. Rhoncus erat vitae molestie tempor vitae ipsum est non est. Neque curabitur imperdiet congue vitae mattis. Donec eget bibendum fames odio velit ut in vel leo. Volutpat vestibulum imperdiet risus etiam at sed at morbi. Duis potenti hac aliquet aliquam mauris netus facilisi sed. At morbi sit lorem diam hendrerit ac odio sit. Aliquam nisl laoreet nisi ultrices massa rhoncus faucibus. Mattis eu vel at nulla suscipit at nec sed purus. Vel iaculis massa volutpat suspendisse massa purus amet. Integer sit ut velit id in diam in pulvinar posuere. Sit lacinia consectetur volutpat nunc. Leo pharetra lacinia auctor orci nibh massa nisi sem cursus. Cursus vitae commodo eget dolor in neque. Velit netus etiam diam eget.</p>

                {/* Projects Section */}
                <div className="p-6"> 
                    <h3 className="text-xl font-semibold">Projects</h3>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {service.projects.map((project, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img src="/images/portfolio.png" alt={project.name} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full  flex items-center'>
                    <button className="m-6 px-6 py-2 mx-auto w-80 bg-blue-700 text-white rounded-lg">Book Now</button>
                </div>
            </div> 

            <Footer />
        </>
    );
}