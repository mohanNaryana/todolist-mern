

export default function Add() {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="flex space-x-2 p-4 bg-gray-900 border border-gray-700 rounded-lg w-full max-w-lg shadow-lg">
                <input
                    className="flex-grow border border-gray-600 bg-gray-800 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    type="text"
                    placeholder="Add new Todo"
                />
                <button className="bg-blue-500 text-white rounded-md text-sm px-4 py-2 shadow-md hover:bg-blue-600 transition duration-200 ease-in-out">
                    Add
                </button>
            </div>
        </div>
    );
}