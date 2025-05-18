/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            
        ],
    },
    experimental: {
        allowedDevOrigins: ["192.168.86.131:3000"],
    },
};

export default nextConfig;
