import { FaRegSadCry } from 'react-icons/fa';

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-[25%] md:mt-[15%] w-full">
        <FaRegSadCry className="text-3xl md:text-6xl text-gray-800 mx-auto mb-4" />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">404 - User Not Found</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Sorry, we couldn’t find the user you’re looking for.
        </p>
      </div>
    );
}

export default NotFound