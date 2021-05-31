import { Layout, Activities } from "../../components";
import { getAllActivities } from "../../lib";

export default function Index({ activities }: any) {
  return (
    <Layout>
      <Activities activities={activities} />
    </Layout>
  );
}
export async function getStaticProps({ params }: any) {
  const activities: any = getAllActivities();
  return {
    props: {
      activities,
    },
  };
}
