import * as React from 'react';
import { Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function RankList({ rank }) {
  return (
    <Grid sx={{margin:'20px 0'}}>
      {rank?.map((word,i) => {
        return (
          <Box sx={{display:'flex',width:'300px',justifyContent:'space-between'}} key={word[0]}>
            <Typography component="legend">{word[0]}</Typography>
            <Rating
              name="raitin"
              value={5-i}
              readOnly 
            />
          </Box>
        )
      })}
    </Grid>
  );
}
