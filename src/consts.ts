// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Divers Paradise Komodo";
export const SITE_TITLE = "Divers Paradise Komodo";
export const SITE_DESCRIPTION = "Website of Divers Paradise Komodo";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "DPK - All Tags";
export const Tags_DESCRIPTION =
  "DPK - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Divers Paradise Komodo`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Divers Paradise Komodo`,
    description: `Browse all articles under the ${category} category in Divers Paradise Komodo`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  // { href: "/category/One/1/", title: "One" },
  // { href: "/category/Two/1/", title: "Two" },
  // { href: "/category/Three/1/", title: "Three" },
  { href: "/trip/", title: "Trip"},
  { href: "/course/", title: "Course"},
  { href: "/article/", title: "Dive Site"},
  { href: "/gallery/", title: "Gallery"},
  { href: "/contact/", title: "Contact"}
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  // { href: "/posts/why-astro/", title: "Astro" },
  // { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  // { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://www.youtube.com/channel/UCZfyjEf1lqUiZWN0eMZ_r-A",
    icon: "tabler:brand-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/diversparadisekomodo/",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.tripadvisor.co.id/Attraction_Review-g1777483-d3483340-Reviews-Divers_Paradise_Komodo-Labuan_Bajo_Flores_East_Nusa_Tenggara.html",
    icon: "tabler:brand-tripadvisor",
    label: "Trip Advisor",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
