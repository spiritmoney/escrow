interface ConstructionProps {
    toggleConstruction: () => void;
}

export default function Maintainance({ toggleConstruction }: ConstructionProps) {

    return( 
        <div className="bg-white w-11/12 md:w-8/12 rounded-lg absolute top-20 md:top-10 inset-x-0 mx-auto z-50 p-5">
            <div className="bg-white w-full md:w-96 flex flex-col items-center rounded-lg mx-auto justify-center">
                <img src="/icons/construction.png" alt="" className="w-80"/>
                <p className="w-full text-black font-semibold text-base md:text-xl text-center">Oops! We're Temporarily Offline for maintainance. We will Be Back Soon!</p>

                <button 
                onClick={toggleConstruction}
                className="p-2 bg-blue-600 text-white w-full rounded-lg my-5">
                    Back
                </button>
            </div>
        </div>
    );
}