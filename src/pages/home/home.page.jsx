import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
