import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  url?: string;
  image?: string;
  type?: string;
  siteName?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
};

const DEFAULT_URL = 'https://suryakavach.ai';
const DEFAULT_IMAGE = `${DEFAULT_URL}/favicon.svg`;
const DEFAULT_TYPE = 'website';
const DEFAULT_TWITTER_CARD = 'summary_large_image';
const DEFAULT_SITE_NAME = 'Suryakavach AI';

function createOrUpdateMeta(attribute: 'name' | 'property', name: string, content: string) {
  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function createOrUpdateLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  keywords,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  type = DEFAULT_TYPE,
  siteName = DEFAULT_SITE_NAME,
  twitterCard = DEFAULT_TWITTER_CARD,
  twitterSite = '@SuryakavachAI',
  twitterCreator = '@SuryakavachAI',
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    createOrUpdateMeta('name', 'description', description);
    createOrUpdateMeta('name', 'keywords', keywords);
    createOrUpdateMeta('name', 'robots', 'index, follow');
    createOrUpdateMeta('property', 'og:title', title);
    createOrUpdateMeta('property', 'og:description', description);
    createOrUpdateMeta('property', 'og:type', type);
    createOrUpdateMeta('property', 'og:url', url);
    createOrUpdateMeta('property', 'og:image', image);
    createOrUpdateMeta('property', 'og:site_name', siteName);
    createOrUpdateMeta('name', 'twitter:card', twitterCard);
    createOrUpdateMeta('name', 'twitter:title', title);
    createOrUpdateMeta('name', 'twitter:description', description);
    createOrUpdateMeta('name', 'twitter:image', image);
    createOrUpdateMeta('name', 'twitter:site', twitterSite);
    createOrUpdateMeta('name', 'twitter:creator', twitterCreator);
    createOrUpdateLink('canonical', url);
  }, [title, description, keywords, url, image, type, siteName, twitterCard, twitterSite, twitterCreator]);

  return null;
}
