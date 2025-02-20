import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
                <h1 className="text-[#0A303A] text-4xl font-bold text-center py-5">Choose pet of your choice</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 pb-12">
                    <div className="flex items-center p-8 justify-center border-[#0A303A] hover:border-[#F04336] border-2 rounded-lg">
                        <Link to={`/petlisting/cat`}>
                        <img className="w-36 h-36 object-contain" src="https://www.shutterstock.com/image-vector/cat-icon-coloring-book-cute-600nw-2425844347.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="flex items-center p-8 justify-center border-[#0A303A] hover:border-[#F04336] border-2 rounded-lg">
                    <Link to={`/petlisting/rabbit`}>
                    <img className="w-36 h-36 object-contain" src="https://cdn-icons-png.flaticon.com/512/802/802389.png" alt="" />
                    </Link>
                    </div>
                    <div className="flex items-center p-8 justify-center border-[#0A303A] hover:border-[#F04336] border-2 rounded-lg">
                    <Link to={`/petlisting/dog`}>
                    <img className="w-36 h-36 object-contain" src="https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png" alt="" />
                    </Link>
                    </div>
                    <div className="flex items-center p-8 justify-center border-[#0A303A] hover:border-[#F04336] border-2 rounded-lg">
                    <Link to={`/petlisting/bird`}>
                    <img className="w-36 h-36 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHG-AJREyBOlYYnrDU2yAh0iznD0pr2FYg&s" alt="" />
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;