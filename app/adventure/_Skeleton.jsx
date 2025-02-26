export default function skeletonLoader() {
    return (
        <div className="p-10">
            <div role="status" className="animate-pulse">
                <div className="flex items-center justify-center mt-4">
                    <svg
                        className="w-8 h-8 ml-5 text-gray dark:text-gray me-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="w-20 h-2.5 bg-gray rounded-full dark:bg-gray me-3"></div>
                    <div className="w-24 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

            <div
                role="status"
                className="mt-5 p-4 border border-gray rounded shadow animate-pulse dark:border-gray grid grid-cols-2 gap-4"
            >
                <div>
                    <div
                        role="status"
                        className=" p-4 space-y-4 border border-gray divide-y divide-gray rounded shadow animate-pulse dark:divide-gray md:p-6 dark:border-gray h-full"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                            </div>
                            <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                            </div>
                            <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                            </div>
                            <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                            </div>
                            <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                            </div>
                            <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
                        </div>
                    </div>
                    <br />
                </div>
                {/* Imagen */}

                <div className="flex items-center justify-center w-full h-full bg-gray rounded dark:bg-gray">
                    <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
