import Link from "next/link";
import Image from "next/image";

import { Activity } from "../../types";

interface CoverImageProps extends Activity {
  src?: string;
  height: string | number;
  width: string | number;
}

export function CoverImage({
  title,
  src,
  slug,
  height,
  width,
}: CoverImageProps) {
  const image = (
    <Image
      src={src || ""}
      alt={`Cover Image for ${title}`}
      className={slug}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/activities/${slug}`} href="/activities/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
