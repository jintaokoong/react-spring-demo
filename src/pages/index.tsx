import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main>
      <h2>List of demos</h2>
      <ol>
        <li>
          <Link to={"/i"}>Basic Example</Link>
        </li>
        <li>
          <Link to={"/ii"}>Reacting to Events</Link>
        </li>
      </ol>
    </main>
  );
}
