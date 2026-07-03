import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://listify.vercel.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/privacy'],
        disallow: ['/dashboard', '/api'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
