import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log("firsdfsaft", router);
  function loadProjectHandler() {
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {  clientprojectid: "projectA", id: "max", },
    });
  }
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
