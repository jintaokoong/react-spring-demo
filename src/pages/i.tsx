import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

const contents = `
  const springs = useSpring({
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
      <pre style={{ maxWidth: "80ch" }}>
        <code>{contents}</code>
      </pre>
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
