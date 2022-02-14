import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const { title, slug, image, content } = props.post;
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
        />
      );
    },
    code(code) {
      const { children, className } = code;
      const match = /language-(\w+)/.exec(className || "");
      return (
        <SyntaxHighlighter style={atomDark} language={match[1]}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
