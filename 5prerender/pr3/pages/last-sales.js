import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
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

  if (error) {
    return <p>Failed to load...</p>;
  }
  if (!data && !sales) {
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

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.BASE_URL + "sales.json");
    const data = await res.json();
    const loadedSales = Object.entries(data).map((sale) => ({
      id: sale[0],
      username: sale[1].username,
      number: sale[1].volume,
    }));
    return {
      props: {
        sales: loadedSales,
      },
      // revalidate: 10,
    };
  } catch (err) {
    return {
      props: {
        sales: [],
      },
      // revalidate: 10,
    };
  }
}
