import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { Layout, PostBody, PostHeader, PostTitle } from "../../components";
import { getActivityBySlug, getAllActivities, markdownToHtml } from "../../lib";

interface ActivityProps {
  activity: {
    author: string;
    content: string;
    coverImage: string;
    date: string;
    slug: string;
    title: string;
  };
}

export default function Activity({ activity }: ActivityProps) {
  const { author, content, coverImage, date, slug, title } = activity;
  console.log(coverImage);
  const router = useRouter();
  if (!router.isFallback && !activity.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <PostTitle>{title}</PostTitle>
      <article>
        <PostHeader
          title={title}
          coverImage={coverImage}
          date={date}
          author={author}
          slug={slug}
        />
        <PostBody content={content} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const activity: any = getActivityBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const parsedContent = await markdownToHtml(activity.content);
  return {
    props: {
      activity: {
        ...activity,
        content: parsedContent,
      },
    },
  };
}

export async function getStaticPaths() {
  const activities = getAllActivities();

  return {
    paths: activities.map((activity: any) => {
      return {
        params: {
          slug: activity.slug,
        },
      };
    }),
    fallback: false,
  };
}
