export function PostBody({ content }: any) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
