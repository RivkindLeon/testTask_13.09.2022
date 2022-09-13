import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function RankList({ rank }) {
  console.log(rank, 'in rank')
  return (
    <Grid sx={{margin:'20px 0'}}>
      {rank?.map((word,i) => {
        return (
          <Box sx={{display:'flex',width:'300px',justifyContent:'space-between'}}>
            <Typography component="legend">{word[0]}</Typography>
            <Rating
              name="raitin"
              value={5-i}
            />
          </Box>
        )
      })}
    </Grid>
  );
}
