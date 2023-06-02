import React,{useState , useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import Cards from './card'

const Shows = ({shows,setShows,bodyPart}) => {
  const [currentPage,setCurrentPage] = useState('1')
  const showsPerPage= 9
  const paginate = (e,value)=>{
    setCurrentPage(value)

    window.scrollTo({ top:1800, behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExcercisesData= async() =>{
      let showsData=[]

      if(bodyPart==='all'){
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        showsData = await response.json()
        
        // console.log(showsData)
      }else{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${bodyPart}`)
        showsData = await response.json()
        
      }

      setShows(showsData)
    }
    fetchExcercisesData()
  },[bodyPart])

  const indexOfLastshows= currentPage*showsPerPage;
  const indexOfFirstshows= indexOfLastshows-showsPerPage
  const currentshows= shows.slice(indexOfFirstshows,indexOfLastshows)

  return (
    <Box id='shows'
      sx={{mt:{lg:'110px'}}}
      mt={'50px'}
      p={'20px'}
    >
      <Typography variant="h4" fontWeight="bold" color={'grey'} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Popular
      </Typography>
      <Stack direction={'row'} sx={{gap:{lg:'40px', sm:'20px'}}}
      flexWrap={'wrap'} justifyContent={'center'}>
        {/* {currentshows.forEach((shows, index) => {
            <Showscard key={index} shows={shows}/>
        })} */}
        {currentshows.map((shows,index)=>(
           <Cards key={index} shows={shows}/>
        ))}
      </Stack>
      <Stack mt={'100'} alignItems={'center'}>
        {shows.length>9 && <Pagination
          color='standard'
          defaultPage={1}
          shape='rounded'
          count={Math.ceil(shows.length /showsPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />}

      </Stack>
    </Box>
  )
}

export default Shows