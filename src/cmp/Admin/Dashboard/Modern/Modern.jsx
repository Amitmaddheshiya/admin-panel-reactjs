
import Congratulation from "./Congratulation/Congratulation";
import Purchase from "./Purchase/Purchase";
import TotalEarning from "./TotalEarning/TotalEarning";
import Revenue from "./RevenueUpdates/Revenue";

import {
  Grid
} from "@mui/material";

const Modern = ()=>{
    const design = (
      <>
        <Grid container spacing={4}>
        <Congratulation />
        <Purchase />
        <TotalEarning />
        <Revenue />
        </Grid>
      </>
    );
    return design;
  }
  export default Modern;
  