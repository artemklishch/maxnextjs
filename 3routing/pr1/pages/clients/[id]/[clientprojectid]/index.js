import { useRouter } from "next/router";

function CertainProjectPage() {
  const router = useRouter();
  console.log("first", router);
  return (
    <div>
      <h1>The Certain Project Page</h1>
    </div>
  );
}
export default CertainProjectPage;
