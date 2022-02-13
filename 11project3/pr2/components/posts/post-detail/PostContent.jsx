import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";
import Image from 'next/image'

const PostContent = (props) => {
  const { title, slug, image, content } = props.post
  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
          priority={true}
        />)
    }
  }
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
