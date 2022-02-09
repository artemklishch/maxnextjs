import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

const DUMMY_POSTS = [
  {
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it maked building React sites and apps with SSR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
