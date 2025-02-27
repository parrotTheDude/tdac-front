/** @type {import('next').NextConfig} */
const nextConfig = {
trailingSlash: true,
output: 'export',
env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
}
module.exports = nextConfig