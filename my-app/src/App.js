import './App.css';
import { Button, Grid, TextField } from '@mui/material'
import {  useState } from 'react';
import axios from "axios";
import RankList from './RankList';


const mockText = 'NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA), to give the US spacs Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as <i>New Horizons</i>; and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated program'
function App() {
  const [title, setTitle] = useState('')
  const [rank, setRank] = useState([])

  const handleClick = (titleName) => {
    // const headers = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json',
    // };
    // axios.get('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=NASA&format=json&callback=callback', { headers })
    //   .then(response => console.log(response))

      //Get CORS error - so add just mock data for test functional
    ranksWord(mockText)

    setTitle('')
  }

  //Function that create map with key,value(word,counter)
  const addToRank = (data) => {
    let rankList = {}
    data.map(word => {
      //if word exist increment counter
      if (rankList[word]) {
        rankList = { ...rankList, [word]: rankList[word] + 1 }
      } else {
        //if word is new add to map with counter 1
        rankList = { ...rankList, [word]: 1 }
      }
    })
    return rankList
  }

  //sorting list 
  const sortRank = (fullRank) => {
    let sortedRank = []
    for (var word in fullRank) {
      sortedRank.push([word, fullRank[word]])
    }
    sortedRank.sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0].localeCompare(a[0])
      } else {
        return b[1] - a[1]
      }
    })
    setRank(sortedRank.slice(0, 5))
  }
  const ranksWord = (data) => {
    const newText = data.split(' ')
    const fullRank = addToRank(newText)
    sortRank(fullRank)
  }
  return (
    <Grid sx={{ margin: '10px' }}>
      <TextField
        placeholder='enter title'
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <Button
      sx={{margin:'10px'}}
        onClick={handleClick}>
        Submit
      </Button>
      <RankList rank={rank} />
    </Grid>
  );
}

export default App;
