const { default: LayoutMain } = require("../_components/layoutMain");

const Page = ({}) => {
    return (
        <LayoutMain>
            <div className="w-full max-w-sm min-w-60 p-5 bg-white border border-gray rounded-lg shadow">
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Perfil"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Nombre
                    </span>
                    
                    <div className="flex mt-4 md:mt-6 justify-center">
                        <a
                            href="#"
                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Historial
                        </a>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
};

export default Page;
