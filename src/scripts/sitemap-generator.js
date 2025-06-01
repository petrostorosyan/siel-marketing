const fs = require("fs");
const path = require("path");

const config = {
  domain: "https://www.sielmarketing.com",
};
const siteUrl = config.domain;

const pagesDir = path.join(process.cwd(), "src", "app");

function getStaticPages() {
  const pages = [];

  function readPages(dir, parentPath = "") {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!file.startsWith("[")) {
          readPages(fullPath, `${parentPath}/${file}`);
        }
      } else if (file === "page.js" || file === "page.tsx") {
        pages.push(parentPath);
      }
    });
  }

  readPages(pagesDir);
  return pages;
}

function generateStaticSitemap() {
  const staticPages = getStaticPages();
  const urls = [];

  urls.push(`
    <url>
      <loc>${siteUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
  `);

  staticPages.forEach((pagePath) => {
    if (pagePath === "") return;

    urls.push(`
      <url>
        <loc>${siteUrl}${pagePath}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `);
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemapContent, "utf8");

  console.log("✅ Статический sitemap успешно сгенерирован без префикса языка!");
}

generateStaticSitemap();
