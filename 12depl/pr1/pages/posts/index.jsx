import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Look at my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export default AllPostsPage;

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
