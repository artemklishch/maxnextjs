import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/events">Events page</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
