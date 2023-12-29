import featured1 from '../assets/featured1.jpg';
import featured2 from '../assets/featured2.jpg';
import featured3 from '../assets/featured3.jpg';



const Featured = () => {
    return (

        ///Do landscape photos///
        <div className="container mx-auto my-8 pb-10">
            <h1 className=" text-3xl text-center">FEATURED</h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="bg-white shadow-lg p-6 rounded-md">
                    <img
                        src={featured1}
                        alt="product"
                        className="w-full h-15 object-cover mb-4 rounded-md"
                    />
                    <div className="text-red-500 font-bold mb-2 text-center">Limited time</div>
                    <h3 className="text-xl mb-2 text-center">ELOTE</h3>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full transition-transform transform hover:translate-y-1">VIEW PRODUCT</button>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-md">
                    <img
                        src={featured2}
                        alt="product"
                        className="w-full h-15 object-cover mb-4 rounded-md"
                    />
                    <div className="text-red-500 font-bold mb-2 text-center">Limited Time</div>
                    <h3 className="text-xl mb-2 text-center">CAMARONES</h3>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full transition-transform transform hover:translate-y-1">VIEW PRODUCT</button>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-md">
                    <img
                        src={featured3}
                        alt="product"
                        className="w-full h-15 object-cover mb-4 rounded-md"
                    />
                    <div className="text-red-500 font-bold mb-2 text-center">Limited Time</div>
                    <h3 className="text-xl mb-2 text-center">FLAUTAS</h3>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full transition-transform transform hover:translate-y-1">VIEW PRODUCT</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
