import { Star } from "lucide-react";

export default function Relevanttwo() {
  return (
    <div className="bg-white w-[70%] mx-auto my-10">
        <h1 className="text-4xl text-[#0A303A] font-bold text-center">Read Reviews From Our Customers</h1>
    <div className="flex justify-around gap-6 p-6">

      <div className="bg-white rounded-2xl shadow-lg p-5 w-80 flex flex-col justify-between">
        <div className="flex text-yellow-500 mb-2">
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
        </div>

        <p className="text-gray-800 text-sm mb-4">
          Adopting from PawsHome was the best decision! The team made the whole
          process smooth, and now I have a loving companion who brightens my days.
        </p>

        <hr className="my-2" />

        <div className="flex items-center gap-3 mt-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Emily Johnson"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Emily Johnson</h4>
            <p className="text-xs text-gray-500">Adopted Bella the Golden Retriever</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-5 w-80 flex flex-col justify-between">
        <div className="flex text-yellow-500 mb-2">
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
        </div>

        <p className="text-gray-800 text-sm mb-4">
          I was nervous about adopting, but the staff guided me step by step. Max
          has been the sweetest cat and truly feels like family now.
        </p>

        {/* Divider */}
        <hr className="my-2" />

        {/* User Info */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="David Martinez"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">David Martinez</h4>
            <p className="text-xs text-gray-500">Adopted Max the Tabby Cat</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-5 w-80 flex flex-col justify-between">
        {/* Stars */}
        <div className="flex text-yellow-500 mb-2">
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
          <Star className="w-5 h-5 fill-yellow-500" />
        </div>

        {/* Review Text */}
        <p className="text-gray-800 text-sm mb-4">
          The adoption process was quick and transparent. I highly recommend them
          if you're looking to give a pet a forever home.
        </p>

        {/* Divider */}
        <hr className="my-2" />

        {/* User Info */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Sophia Lee"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Sophia Lee</h4>
            <p className="text-xs text-gray-500">Adopted Coco the Parrot</p>
          </div>
        </div>
      </div>

    </div>
    </div>

  );
}
