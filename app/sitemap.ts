import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-06-02';
  const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/apply', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
