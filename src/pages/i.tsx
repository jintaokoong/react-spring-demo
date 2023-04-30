import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import Code from "../components/code";

const contents = `  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <main>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "hotpink",
          borderRadius: 8,
          ...springs,
        }}
      />
    </main>
  );
`;

export default function I() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <main>
      <Link to="/">Back to top</Link>
      <h2>Basic Example</h2>
      <Code contents={contents} />
      <section style={{ marginTop: "1.5rem" }}>
        <animated.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "hotpink",
            borderRadius: 8,
            ...springs,
          }}
        />
      </section>
    </main>
  );
}
