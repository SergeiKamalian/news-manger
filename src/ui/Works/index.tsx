import { memo } from "react";
import { WorkItem } from "./WorkItem";
import { PROJECTS } from "../../constants";

export const Works = memo(() => {
  return (
    <div className="w-full" style={{ marginTop: 200 }}>
      <div
        className="max-w-[1100px] m-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px 20px",
        }}
      >
        {PROJECTS.map((project) => (
          <WorkItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
});
