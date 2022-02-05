import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = () => {
  const [sales, setSales] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(process.env.BASE_URL + "sales.json", (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const loadedSales = Object.entries(data).map((sale) => ({
        id: sale[0],
        username: sale[1].username,
        number: sale[1].volume,
      }));
      setSales(loadedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(process.env.BASE_URL + "sales.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const loadedSales = Object.entries(data).map((sale) => ({
  //           id: sale[0],
  //           username: sale[1].username,
  //           number: sale[1].volume,
  //         }));
  //         setSales(loadedSales);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => setIsLoading(false));
  //   }, []);
  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  // if (!sales) {
  //     return <p>Not found sales...</p>;
  //   }

  if (error) {
    return <p>Failed to load...</p>;
  }
  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Last Sales Page</h1>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>{sale.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default LastSales;

