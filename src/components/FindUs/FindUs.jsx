import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md ">
            <h2 className="font-bold text-lg mb-4">Find us now</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <button className="btn w-full justify-start items-center gap-3 bg-gray-100 hover:bg-blue-100 text-black">
                    <FaFacebook className="text-blue-600 text-lg" />
                    <span>Facebook</span>
                </button>

                <button className="btn w-full justify-start items-center gap-3 bg-gray-100 hover:bg-sky-100 text-black">
                    <FaTwitter className="text-sky-500 text-lg" />
                    <span>Twitter</span>
                </button>

                <button className="btn w-full justify-start items-center gap-3 bg-gray-100 hover:bg-blue-200 text-black">
                    <FaLinkedinIn className="text-blue-800 text-lg" />
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    );
};

export default FindUs;
