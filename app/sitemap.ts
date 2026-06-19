import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
