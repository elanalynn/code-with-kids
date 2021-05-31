import { ActivityPreview } from "../ActivityPreview";
import type { Activity } from "../../types";

export function Activities({ activities }: { activities: Activity[] }) {
  return (
    <section>
      <h2>Activities</h2>
      <div>
        {activities.map((activity: Activity) => (
          <ActivityPreview
            key={activity.slug}
            coverImage={activity.coverImage}
            excerpt={activity.excerpt}
            title={activity.title}
            slug={activity.slug}
          />
        ))}
      </div>
    </section>
  );
}
