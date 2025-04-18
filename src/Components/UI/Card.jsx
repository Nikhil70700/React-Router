import React from 'react';
import './Card.css'

export const Card = ({ curMovie }) => {
  const {
    Poster = "https://via.placeholder.com/300x450",
    Title = "Movie Title",
    Type="Movie Type",
    Year="Year"
  } = curMovie;

  return (
    <div className="group bg-black rounded-xl shadow-lg overflow-hidden w-75 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
    
    <div className="relative">
    
      <div className="h-80 overflow-hidden">
        <img 
          src={Poster} 
          alt={`Poster of ${Title}`} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
        />
        
     
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
      </div>
      
    
      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
        {Year}
      </div>
      
      
      <div className="absolute top-3 right-3 bg-red-600/90 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
        {Type === 'movie' ? 'Movie' : Type === 'series' ? 'TV Series' : Type}
      </div>
      
 
      <button className="absolute bottom-4 right-4 bg-red-600 p-3 rounded-full text-white shadow-lg transform transition duration-300 hover:scale-110 hover:bg-red-700">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 4l12 6-12 6V4z" />
        </svg>
      </button>
    </div>
    
   
    <div className="p-4">
      <h3 className="text-lg font-bold text-white mb-2 truncate">{Title}</h3>
      
    
      <div className="flex items-center mb-4">
        <div className="flex text-amber-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-xs text-gray-500">4.0</span>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg transform transition duration-300 hover:shadow-md flex items-center justify-center">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 4l12 6-12 6V4z" />
        </svg>
        Watch Now
      </button>
    </div>
  </div>
  );
};
