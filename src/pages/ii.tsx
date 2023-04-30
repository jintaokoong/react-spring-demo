import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import Code from "../components/code";

const contents = `  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <animated.div
      onClick={() => {
        api.start({
          from: { x: 0 },
          to: { x: 100 },
        });
      }}
      style={{
        width: 80,
        height: 80,
        background: "hotpink",
        borderRadius: 8,
        cursor: "pointer",
        ...springs,
      }}
    />
  );
`;

export default function II() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <main>
      <Link to="/">Back to top</Link>
      <h2>Reacting to Events</h2>
      <Code contents={contents} />
      <section style={{ marginTop: "1.5rem" }}>
        <animated.div
          onClick={() => {
            api.start({
              from: { x: 0 },
              to: { x: 100 },
            });
          }}
          style={{
            width: 80,
            height: 80,
            background: "hotpink",
            borderRadius: 8,
            cursor: "pointer",
            ...springs,
          }}
        />
      </section>
    </main>
  );
}
