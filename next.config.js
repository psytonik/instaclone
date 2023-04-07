/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: [
        '1000logos.net',
      'upload.wikimedia.org',
      'anthonyfink.dev',
      'i.pravatar.cc',
      'images.unsplash.com',
      'plus.unsplash.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
