import { memo, useEffect, useRef, useState } from "react";
import { WorkItem } from "./WorkItem";
import { PROJECTS } from "../../constants";

export const Works = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRefs.current.length) return;
      const viewportCenter = window.innerHeight / 2;

      let closestId: string | null = null;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          closestId = PROJECTS[idx].id;
        }
      });

      if (closestId !== activeId) {
        setActiveId(closestId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId]);

  return (
    <div
      className="w-full mt-[130px] sm:mt-[150px] lg:mt-[200px]"
      ref={containerRef}
    >
      <div className="m-auto max-w-[1140px] px-[20px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-[60px] md:gap-x-[20px]">
        {PROJECTS.map((project, index) =>
          project.url ? (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <WorkItem
                project={project}
                isActive={Number(activeId) === project.id}
              />
            </a>
          ) : (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            <div key={project.id} ref={(el) => (itemRefs.current[index] = el)}>
              <WorkItem
                project={project}
                isActive={Number(activeId) === project.id}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
});
