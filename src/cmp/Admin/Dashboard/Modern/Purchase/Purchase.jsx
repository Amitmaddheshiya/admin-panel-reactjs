import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button
  } from "@mui/material";
  import Chart from "react-apexcharts";
  import {
    useState
  } from "react";

  
const Purchase = ()=>{

  const options = {
    labels:[
      "Laptop",
      "Watch",
      "Book",
      "Mobile",
      "Desktop"
  ]};
  const [series,setSeries] = useState([
    50,
    150,
    10,
    100,
    113
  ]);

    const design = (
      <>
       <Grid item xs={12} sm={3}>
       <Card style={{height:"200px"}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         purchase
        </Typography>
        </CardContent>
        <Chart 
        options={options}
        series={series}
        type="pie"
        >
        </Chart>
       </Card>
       </Grid>
      </>
    );
    return design;
  }
  export default Purchase;
  