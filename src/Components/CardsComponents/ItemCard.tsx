import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { ItemCardProps } from "../../@Types/Types";

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ maxWidth: 345 }}>
        <CardMedia style={{ height: 140 }} image={item.img} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
