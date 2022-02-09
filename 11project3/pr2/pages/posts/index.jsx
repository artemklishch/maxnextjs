import AllPosts from "../../components/posts/AllPosts";

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

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
