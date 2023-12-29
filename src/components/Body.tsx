import body1 from '../assets/body1.jpg';
import body2 from '../assets/body2.jpg';

const Body = () => {
    return (
        <>
            <div className="bg-gray-300 ">
                <div className='container mx-auto'>
                    <div className='flex items-center md:flex-row pl-8 px-5 py-8'>
                        <p className='font-bold text-4xl hidden sm:block'>
                            JOIN TACO SHOP'S REWARDS. GET FREE FOOD. SIMPLE
                        </p>
                        <div className='flex justify-center items-center text-white md:justify-start pr-5 md:items-center flex-grow'>
                            <button className=' bg-red-500 transition-transform transform hover:translate-y-1 py-2 px-2 ml-4 rounded-md'>CREATE ACCOUNT</button>
                            <p className='pl-4 text-black'>or</p>
                            <button className=' text-black underline hover:text-red-300 py-2 px-2 ml-1 rounded-md'>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center">
                    <div className='w-full md:w-1/2'>
                        <img src={body1}
                            className=' md:mb-0 rounded-md' />
                    </div>
                    <div className='md:w-1/2 mx-auto'>
                        <h2 className='text-2xl font-bold text-center md:pt-10'>
                            MENU
                        </h2>
                        <p className='text-gray-700 text-center p-8 ml-6 hidden md:block'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <div className='text-center'>
                            <button className='bg-red-500 text-white transition-transform transform hover:translate-y-1 px-4 mb-4 mx-4 rounded-md'>ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Larger viewports  */}
                    <div className='md:w-1/2 order-2 md:order-1'>
                        <h2 className='text-2xl font-bold text-center md:mt-10 sm:text-center'>
                            CATERING
                        </h2>
                        <p className='text-gray-700 text-center p-8 ml-6 hidden md:block'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <div className='text-center'>
                            <button className='bg-red-500 text-white transition-transform transform hover:translate-y-1 px-4 mx-4 rounded-md'>SCHEDULE NOW</button>
                        </div>
                    </div>
                    <div className='md:w-1/2 order-1 md:order-1'>
                        <img src={body2}
                            className=' md:mb-0 rounded-md' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
