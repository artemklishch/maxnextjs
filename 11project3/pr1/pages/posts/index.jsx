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
  {
    title: "NextJS file based routing",
    image: "nextjs-file-based-routing.png",
    excerpt: "Some description",
    date: "2022-01-13",
    slug: "nextjs-file-based-routing",
  },
];

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
