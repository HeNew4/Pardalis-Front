/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APIurl: "https://66589a445c36170526492a57.mockapi.io/api/v1/",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "loremflickr.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
