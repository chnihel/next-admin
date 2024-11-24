/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http', // ou 'https' selon votre besoin
            hostname: 'localhost', // ou votre domaine spécifique
            port: '3000', // port de votre serveur local
            pathname: '/file/**', // chemin vers vos images
          },
        ],
      },
};

export default nextConfig;

