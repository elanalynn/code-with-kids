import { DateFormatter } from "../DateFormatter";
import { CoverImage } from "../CoverImage";

export function PostHeader({ title, coverImage, date, author, slug }: any) {
  return (
    <>
      <div>
        <CoverImage
          title={title}
          slug={slug}
          src={coverImage}
          height={20}
          width={"auto"}
        />
      </div>
      <div>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
