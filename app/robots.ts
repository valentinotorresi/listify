import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'https://listify-one.vercel.app';
  };

  const baseUrl = getBaseUrl();
  
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
