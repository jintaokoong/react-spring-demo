import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main>
      <h2>List of demos</h2>
      <ul>
        <li>
          <Link to={"/i"}>1. Basic Example</Link>
        </li>
      </ul>
    </main>
  );
}
