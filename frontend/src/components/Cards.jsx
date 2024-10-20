export default function Cards({ id , tasks, date }) {

    function completed(){
        
    }

    return (
        <div className="flex justify-center items-center mt-5">
            <div className="flex justify-between items-center space-x-2 p-4 bg-gray-900 border border-gray-700 rounded-lg w-full max-w-lg shadow-lg">
                <input
                    type="checkbox"
                    onClick={completed()}
                    className="mx-3 border border-gray-600 bg-gray-800 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                />
                <span className="flex-grow text-white">{tasks}</span>
                
                
                <div className="flex flex-col items-end">
                    <span className="text-gray-400 text-xs">Updated at</span> 
                    <span className="text-gray-400 text-xs">{date}</span>
                </div>
            </div>
        </div>
    );
}