/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
        "cdn.sanity.io",
          'res.cloudinary.com', 
          'avatars.githubusercontent.com',
          'lh3.googleusercontent.com'
        ]
      }
}

module.exports = nextConfig