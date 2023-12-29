

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="mx-auto p-8">
                <div className="flex gap-4 justify-between px-4">
                    <div className="flex flex-col text-white">
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">CONTACT US</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">CAREERS</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">GIFT CARDS</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">REWARDS</a>
                    </div>
                    <div className="flex flex-col">
                        <div className="container">
                            <h2 className="text-white text-5xl font-bold mb-4 text-center">JOIN OUR REWARDS!</h2>
                            <p className="text-gray-300 text-center py-2">Limited time </p>
                        </div>
                        <button className="bg-red-500 text-white text-xl px-4 py-2 rounded-md transition-transform transform hover:translate-y-1">Join today</button>
                        <a href="#" className="text-white text-center py-4 hover:text-red-300 underline">Learn More</a>
                        <p className="text-center mt-6 text-slate-700">© The Taco Shop 2024</p>
                    </div>
                    <div className="flex flex-col text-white">
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">OUR VALUES</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">NEWS & EVENTS</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">ALL LOCATIONS</a>
                        <a href="#" className="py-4 hover:text-red-500 hidden sm:block">HEALTH & SAFETY</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
