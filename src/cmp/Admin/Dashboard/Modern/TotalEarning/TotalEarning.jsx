import "./TotalEarning.css"
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

  
const TotalEarning = ()=>{

  const options = {
    chart: {
      toolbar: {
        tools: {
          download: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      },
      sparkline : {
        enabled : true
      }
    },
    theme : {
      palette : "palette8"
    },
    title :{
      text : "$10000",
      offsetX : 8,
      offsetY : 8,
      style : {
        fontSize : "18px"
      }
    }
  }
  const [series,setSeries] = useState([
    {
    name : "Earning",
    data : [10,20,40,200,500,700,900,30,60,70,600,200,400,1000]
  }
]);

    const design = (
      <>
       <Grid item xs={12} sm={4}>
       <Card className="chart-box">
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        TotalEarning
        </Typography>
        <Chart
        options={options}
        series={series}
        type="area"
        height="160px"
        className="chart"
        >
        </Chart>
        </CardContent>
       </Card>
       </Grid>
      </>
    );
    return design;
  }
  export default TotalEarning;
  