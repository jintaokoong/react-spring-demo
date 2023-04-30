import { animated, useSpring } from "@react-spring/web";

function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "hotpink",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
}

export default App;
