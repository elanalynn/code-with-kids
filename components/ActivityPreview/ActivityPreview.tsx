import Link from "next/link";

import { CoverImage } from "../CoverImage";
import type { Activity } from "../../types";

export function ActivityPreview({
  coverImage,
  excerpt,
  slug,
  title,
}: Activity) {
  return (
    <>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={100}
          width={556}
        />
      </div>
      <h3>
        <Link as={`/activities/${slug}`} href="/activities/[slug]">
          {title}
        </Link>
      </h3>
      <p>{excerpt}</p>
    </>
  );
}
