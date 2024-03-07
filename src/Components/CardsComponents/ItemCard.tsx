import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { ItemCardProps } from "../../@Types/Types";

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4} className="item-card">
      <Card style={{ maxWidth: 345 }}>
        <CardMedia
          style={{ height: 140 }}
          image={item.img}
          title={item.name}
          className="item-card-img"
        />
        <CardContent className="item-card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="item-card-title"
          >
            {item.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
