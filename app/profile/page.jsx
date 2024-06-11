'use client'

import { useState } from "react";
import NotLogin from "../_components/NotLogin";

const { default: LayoutMain } = require("../_components/layoutMain");

const Page = ({}) => {

    const [login, setLogin] = useState(false)

    if (!login) {
        return <NotLogin />
    }

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
                        HeNew
                    </span>
                    
                </div>
            </div>
        </LayoutMain>
    );
};

export default Page;
