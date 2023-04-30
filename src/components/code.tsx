type Props = {
  contents: string;
};

export default function Code(p: Props) {
  return (
    <pre
      style={{
        maxWidth: "80ch",
        padding: "0.5rem",
        backgroundColor: "#f8fafc",
        borderRadius: "0.25rem",
      }}
    >
      <code>{p.contents}</code>
    </pre>
  );
}
