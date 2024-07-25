import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 bg-white rounded-lg overflow-hidden shadow-lg h-94">
        <div className="h-32 bg-cyan-300"></div>
        <div className="relative px-6 py-4">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <img 
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
              src="src/assets/IMG_4582.jpg" 
              alt="Profile"
            />
          </div>
          <div className="text-center mt-8">
            <h2 className="text-xl font-semibold">Rahul Roy Chowdhury <span className="font-normal text-gray-500">28</span></h2>
            <p className="text-gray-500">Kolkata</p>
          </div>
        </div>
        <div className="border-t border-gray-200 "></div>
        <div className="px-6 py-4">
          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold">80K</p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div>
              <p className="font-bold">803K</p>
              <p className="text-gray-500 text-sm">Likes</p>
            </div>
            <div>
              <p className="font-bold">1.4K</p>
              <p className="text-gray-500 text-sm">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
