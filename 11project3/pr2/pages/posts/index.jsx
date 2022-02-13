import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from '../../lib/posts-util'

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export default AllPostsPage;

export function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}
