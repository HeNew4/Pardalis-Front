export default function skeletonLoader() {
    return (
        <div className="grid grid-cols-2 gap-4 p-6 bg-background rounded-lg m-4 animate-pulse">
            <div className="grid grid-cols-1">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 h-10 w-9/12 mb-10 rounded-lg border-dashed border-2 border-gray-500"
                    ></div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-gray-300 h-64 w-64 rounded-lg"></div>
            </div>
        </div>
    );
}
