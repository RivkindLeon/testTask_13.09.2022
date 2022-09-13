import './App.css';
import Box, { Button, Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from "axios";
import RankList from './RankList';


const mockText = 'NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA), to give the US spacs Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as <i>New Horizons</i>; and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated program'
function App() {
  const [title, setTitle] = useState('')
  const [rank, setRank] = useState([])

  const handleClick = (titleName) => {
    //   const headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // };
    //   fetch('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=NASA&format=json&callback=callback',{headers})
    //   .then(response=>console.log(response))
    ranksWord(mockText)
  }

  const addToRank = (data) => {
    let rankList = {}
    data.map(word => {
      //if word exist
      if (rankList[word]) {
        rankList={ ...rankList, [word]: rankList[word] + 1 }
      } else {
        //if word is new
        rankList={ ...rankList, [word]: 1 }
      }
    })
    return rankList
  }

  const sortRank = (fullRank) => {
    let sortedRank = []
    for (var word in fullRank) {
      sortedRank.push([word, fullRank[word]])
    }
    sortedRank.sort((a, b) => {
      return b[1] - a[1]
    })
    setRank(sortedRank.slice(0, 5))
  }
  const ranksWord = (data) => {
    const regex = '[^\s.,\/\\()]+'
    const newText = data.split(' ')
    const fullRank =  addToRank(newText)
    sortRank(fullRank)
  }
  return (
    <Grid sx={{margin:'10px'}}>
      <TextField
        placeholder='enter title'
        onChange={(e) => setTitle(e.target.value)} />
      <Button
        onClick={handleClick}>
        Submit
      </Button>
      <RankList rank={rank} />
    </Grid>
  );
}

export default App;
