import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "Getting started with NextJS",
  image: "getting-started-with-nextjs.png",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post.",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
