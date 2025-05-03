import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-5">
      {/* Header */}
      <div className="flex items-center  bg-base-200 justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{new Date(author.published_date).toDateString()}</p>
            </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold px-4 pt-3">{title}</h2>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={image_url} alt="News" className="w-full rounded-lg" />
      </figure>

      {/* Details */}
      <div className="p-4 text-gray-700">
        <p>
          {details.length > 300 ? details.slice(0, 300) + '...' : details}
          <span className="text-orange-600 font-semibold cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2 border-t">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <span className="font-bold text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
