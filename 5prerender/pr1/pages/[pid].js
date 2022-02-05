import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetailsPage(props) {
  const { product } = props;
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  // console.log("first", context);
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const certainProduct = data.products.find((pr) => pr.id === productId);
  if (!certainProduct) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: certainProduct,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));
  return {
    // paths: [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    // fallback: false,
    paths: params,
    // paths: [],
    fallback: true,
    // fallback: "blocking",
  };
}

export default ProductDetailsPage;
