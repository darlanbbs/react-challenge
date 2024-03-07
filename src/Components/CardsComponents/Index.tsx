import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Item } from "../../@Types/Types";
import { getData } from "../../Config/Database";
import { ItemCard } from "./ItemCard";

const Card = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const items = await getData();
      // corrigindo valores com id duplicado vindo da api
      const uniqueIds = new Set<number>();
      const uniqueItems: Item[] = [];

      for (const item of items) {
        if (!uniqueIds.has(item.id)) {
          uniqueIds.add(item.id);
          uniqueItems.push(item);
        }
      }

      setData(uniqueItems);
    };

    fetchDataAsync();
  }, []);

  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={2}>
        {data.map((item: Item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default Card;
