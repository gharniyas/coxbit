"use client";
import React from "react";
import Image from "next/image";

const NewsCard = ({ photo, index, onCardClick, cardType = "grid" }) => {
  const handleClick = () => {
    onCardClick(photo);
  };

  if (cardType === "marquee") {
    return (
      <div
        onClick={handleClick}
        className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="relative h-48">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 text-white">
            <span className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">
              {photo.date}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-sm truncate">
            {photo.title}
          </h3>
          <p className="text-gray-600 text-xs mt-1">CoEB Updates</p>
        </div>
      </div>
    );
  }

  if (cardType === "grid") {
    return (
      <div
        onClick={handleClick}
        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-40 overflow-hidden">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              NEW
            </span>
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
            {photo.title}
          </h4>
          <p className="text-blue-600 text-xs font-medium mb-2">{photo.date}</p>
          <p className="text-gray-600 text-xs">Latest updates from CoEB</p>
        </div>
      </div>
    );
  }

  // Diagonal floating card type
  if (cardType === "diagonal") {
    return (
      <div
        onClick={handleClick}
        className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
          index % 2 === 0 ? "animate-float" : "animate-float-delayed"
        }`}
        style={{
          width: "120px",
          height: "160px",
          animationDelay: `${index * 0.5}s`,
        }}
      >
        <Image
          src={photo.image}
          alt={photo.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    );
  }

  return null;
};

export default NewsCard;
