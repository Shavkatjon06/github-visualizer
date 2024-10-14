import React from 'react';
import { FaBlog, FaGithub } from 'react-icons/fa'

const ProfileCard = ({ avatar_url, name, bio, followers, following, location, company, public_repos, blog, html_url }) => (
  <div className="p-6 bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl border border-gray-200">
    <div className="relative w-28 h-28 border rounded-full overflow-hidden mx-auto">
      <img 
        src={avatar_url} 
        alt={name} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h2 className="text-2xl font-semibold text-center mt-4 text-gray-800">{name}</h2>
    <p className="text-gray-600 text-center mt-2">{bio}</p>
    <div className="flex items-center justify-center text-center text-gray-500 mt-4 gap-3">
      {location && <p>📍 <span className="font-medium">{location}</span></p>}
      {company && <p>🏢 <span className="font-medium">{company}</span></p>}
    </div>
    <div className="flex justify-around mt-6">
      <div className="text-center">
        <h3 className="text-lg font-medium">Followers</h3>
        <p className="text-blue-500 font-semibold">{followers}</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">Following</h3>
        <p className="text-blue-500 font-semibold">{following}</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">Repos</h3>
        <p className="text-blue-500 font-semibold">{public_repos}</p>
      </div>
    </div>
    <div className="flex justify-center mt-6 gap-3">
        {blog && (
          <a href={blog} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <FaBlog className="mr-2 text-xl" />
            <span className="hidden sm:inline">Blog</span>
        </a>)}
        {html_url && (
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-black transition-colors duration-200">
            <FaGithub className="mr-2 text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        )}
      </div>
  </div>
);

export default ProfileCard