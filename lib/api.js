import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const activitiesDirectory = join(process.cwd(), "_activities");

export function getActivitySlugs() {
  return fs.readdirSync(activitiesDirectory);
}

export function getActivityBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(activitiesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    content,
  };
}

export function getAllActivities(fields = []) {
  const slugs = getActivitySlugs();
  const activities = slugs
    .map((slug) => getActivityBySlug(slug, fields))
    .sort((activity1, activity2) => (activity1.date > activity2.date ? -1 : 1));
  return activities;
}
