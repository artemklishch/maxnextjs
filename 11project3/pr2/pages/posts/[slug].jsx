import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getAllPosts, getPostData } from "../../lib/posts-util";

function PostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.slug}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export default PostPage;

export function getStaticProps(context) {
  const data = context;
  const post = getPostData(data.params.slug);
  return {
    props: {
      post: post,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllPosts().map((p) => ({ params: { slug: p.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
}
