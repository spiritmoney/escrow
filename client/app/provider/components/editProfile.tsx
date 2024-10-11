import { useRef, useState } from 'react';

interface EditProps {
    toggleEdit: () => void;
}

export function EditVendor({ toggleEdit }: EditProps) {
    // State to track editability of each field and input values
    const [editable, setEditable] = useState({
        firstName: false,
        lastName: false,
        storeName: false,
        kingschatNumber: false,
        emailAddress: false,
        country: false,
    });

    const [formData, setFormData] = useState({
        firstName: 'Kingsley',
        lastName: 'Odim',
        storeName: 'KO Stores',
        kingschatNumber: '+123 456 7890',
        emailAddress: 'kingsleyodim@email.com',
        country: 'Nigeria',
    });

    // Create refs for each input field
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const storeNameRef = useRef<HTMLInputElement>(null);
    const kingschatNumberRef = useRef<HTMLInputElement>(null);
    const emailAddressRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const handleEditToggle = (field: keyof typeof editable) => {
        setEditable((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));

        // Focus on the appropriate input field after setting it to editable
        setTimeout(() => {
            if (field === "firstName" && firstNameRef.current) firstNameRef.current.focus();
            if (field === "lastName" && lastNameRef.current) lastNameRef.current.focus();
            if (field === "storeName" && storeNameRef.current) storeNameRef.current.focus();
            if (field === "kingschatNumber" && kingschatNumberRef.current) kingschatNumberRef.current.focus();
            if (field === "emailAddress" && emailAddressRef.current) emailAddressRef.current.focus();
            if (field === "country" && countryRef.current) countryRef.current.focus();
        }, 100); // Delay to ensure the state is updated before focusing
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container flex items-center justify-center text-black w-full py-8">
            <div className='md:border-2 border-gray-300 rounded-lg p-7 w-[380px] md:w-[550px] flex flex-col space-y-3'>
                <div className='w-full text-center flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold'>Edit Profile</h1>
                </div>

                <div className='relative mx-auto flex items-center justify-center w-24 h-24  md:w-32 md:h-32'>
                    <img src="/images/profile4.png" alt="image" className="rounded-full w-20 h-20 md:w-28 md:h-28" />
                    <label htmlFor="profile-edit">
                        <img src="/icons/changedp.png" alt="" className='absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 cursor-pointer' />
                    </label>
                    <input className='hidden' type="file" id="profile-edit" accept="image/*" />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>First Name</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="firstName"
                            ref={firstNameRef} // Attach ref
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.firstName ? '' : 'bg-gray-200'}`}
                            value={formData.firstName}
                            readOnly={!editable.firstName}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("firstName")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Last Name</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="lastName"
                            ref={lastNameRef}
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.lastName ? '' : 'bg-gray-200'}`}
                            value={formData.lastName}
                            readOnly={!editable.lastName}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("lastName")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Store Name</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="storeName"
                            ref={storeNameRef}
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.storeName ? '' : 'bg-gray-200'}`}
                            value={formData.storeName}
                            readOnly={!editable.storeName}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("storeName")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Kingschat Number</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="kingschatNumber"
                            ref={kingschatNumberRef}
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.kingschatNumber ? '' : 'bg-gray-200'}`}
                            value={formData.kingschatNumber}
                            readOnly={!editable.kingschatNumber}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("kingschatNumber")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Email Address</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="emailAddress"
                            ref={emailAddressRef}
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.emailAddress ? '' : 'bg-gray-200'}`}
                            value={formData.emailAddress}
                            readOnly={!editable.emailAddress}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("emailAddress")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <div className="pb-5">
                    <p className='text-[12px] font-semibold'>Country</p>
                    <span className="flex space-x-2">
                        <input
                            type="text"
                            name="country"
                            ref={countryRef}
                            className={`w-full border-2 border-gray-400 rounded-lg p-2 ${editable.country ? '' : 'bg-gray-200'}`}
                            value={formData.country}
                            readOnly={!editable.country}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleEditToggle("country")}>
                            <img src="/icons/edit2.png" alt="Edit" />
                        </button>
                    </span>
                </div>

                <button
                    onClick={toggleEdit}
                    className='w-full p-3 text-sm rounded-lg bg-blue-600 text-white'
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export function EditFreelancer({ toggleEdit }: EditProps) {
    const [formData, setFormData] = useState({
        firstName: 'Kingsley',
        lastName: 'Odim',
        portfolio: 'https://Kingsleyodim.tech/',
        kingschatNumber: '+123 456 7890',
        emailAddress: 'kingsleyodim@email.com',
        country: 'Nigeria',
    });

    const [hourlyRate, setHourlyRate] = useState(10); // Default hourly rate
    const [text, setText] = useState('');
    const maxLength = 10;
    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    // Function to generate years
    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 100; i--) {
            years.push(i);
        }
        return years;
    };

    // Handler for when the text changes
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        // Ensure the input does not exceed the maximum length
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };

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

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const showUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file ? file.name : null);
    };

    return (
        <div className="container flex items-center justify-center text-black w-full py-8 h-screen overflow-scroll">
            <div className='rounded-lg p-7 w-full md:w-[550px] h-full flex flex-col space-y-3'>
                <div className='w-full text-center flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold'>Edit Profile</h1>
                </div>

                <div className='relative mx-auto flex items-center justify-center w-24 h-24  md:w-32 md:h-32'>
                    <img src="/images/profile.png" alt="image" className="rounded-full w-20 h-20 md:w-28 md:h-28" />
                    <label htmlFor="profile-edit">
                        <img src="/icons/changedp.png" alt="" className='absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 cursor-pointer' />
                    </label>
                    <input className='hidden' type="file" id="profile-edit" accept="image/*" />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>First Name</p>
                    <input
                        type="text"
                        name="firstName"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2`}
                        value={formData.firstName}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Last Name</p>
                    <input
                        type="text"
                        name="lastName"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2 `}
                        value={formData.lastName}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Kingschat Number</p>
                    <input
                        type="text"
                        name="kingschatNumber"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2 `}
                        value={formData.kingschatNumber}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Email Address</p>
                    <input
                        type="text"
                        name="emailAddress"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2`}
                        value={formData.emailAddress}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Country</p>
                    <input
                        type="text"
                        name="country"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2 `}
                        value={formData.country}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>Title</p>
                    <input
                        type="text"
                        name="storeName"
                        className={`w-full border-2 border-gray-400 rounded-lg p-2 `}
                        readOnly={false}
                        onChange={handleInputChange}
                    />
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

                <div>
                    <p className='text-[12px] font-semibold'>What is the title of the service you offer?</p>
                    <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>What is the category of the service you offer?</p>
                    <select name="category" className='w-full border-2 border-gray-400 rounded-lg p-2 text-gray-400'>
                        <option value=""><p className='w-80'>Category</p></option>
                        <option value="">Category1</option>
                        <option value="">Category2</option>
                    </select>
                </div>

                <div>
                    <p className='text-[12px] font-semibold'>What Skills do you offer?</p>

                    <button className='text-sm text-blue-600'>+ Add Another Skill</button>
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

                <div>
                    <p className='text-[12px] font-semibold'>What is your hourly rate?</p>
                    <div className='flex items-center border-2 border-gray-400 rounded-lg'>
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
                        <select className='border-2 border-gray-400 w-36 md:w-56 p-3 rounded-lg text-gray-500' value={fromYear} onChange={(e) => setFromYear(e.target.value)}>
                            <option value="">From</option>
                            {generateYears().map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* To Year Dropdown */}
                        <select className='border-2 border-gray-400 w-36 md:w-56 p-3 rounded-lg text-gray-500' value={toYear} onChange={(e) => setToYear(e.target.value)}>
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

                <div>
                    <p className='text-[12px] font-semibold'>Portfolio</p>
                    <input
                        type="text"
                        name='portfolio'
                        value={formData.portfolio}
                        readOnly={false}
                        onChange={handleInputChange}
                        className='w-full border-2 border-gray-400 rounded-lg p-2' />
                </div>

                <div>
                    <div className='w-full'>
                    <p className='text-[12px] font-semibold'>CV / Resume</p>
                    <label htmlFor="resume" className='w-full border-2 border-dashed border-gray-400 rounded-lg p-2 flex items-center justify-center cursor-pointer'>
                        <img src="/icons/upload.png" alt="" className={`${selectedFile && 'hidden'}`} />
                        <p className={`text-center text-blue-600 font-semibold ${selectedFile && 'hidden'}`}>Upload New</p>
                        <p className={`text-center text-blue-600 font-semibold ${!selectedFile && 'hidden'}`}>{selectedFile}</p>
                    </label>
                    <input type="file" id='resume' className='hidden' onInput={showUpload} accept=".pdf,.doc,.docx" />
                    <img src="/icons/docs.png" alt=""  className='py-3'/>
                </div>
                
                </div>
                
                <div className='pt-3 pb-7 w-full'>    
                    <button
                        onClick={toggleEdit}
                        className='w-full p-3 text-sm rounded-lg bg-blue-600 text-white'
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
