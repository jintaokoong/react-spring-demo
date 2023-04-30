import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import Code from "../components/code";
import { useState } from "react";

const contents = `  const [direction, setDirection] = useState<"left" | "right">("right");
  const toggle = () => setDirection((d) => (d === "right" ? "left" : "right"));

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <animated.div
      onClick={() => {
        const opt = direction === "right" ? { x: 100 } : { x: 0 };
        api.start(opt);
        toggle();
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

export default function III() {
  const [direction, setDirection] = useState<"left" | "right">("right");
  const toggle = () => setDirection((d) => (d === "right" ? "left" : "right"));

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <main>
      <Link to="/">Back to top</Link>
      <h2>Reacting to Events - Tweaking (i)</h2>
      <Code contents={contents} />
      <section style={{ marginTop: "1.5rem" }}>
        <animated.div
          onClick={() => {
            const opt = direction === "right" ? { x: 100 } : { x: 0 };
            api.start(opt);
            toggle();
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
