import './index.scss'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import ListItem from '@mui/material/ListItem';
import MediaCard from '../mediacard';

const Homepage = () => {
    return(
        <div className="home container">
            <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
                
            <div className="text">
            <h2  >Hello ! my name is  </h2>
            <h1> Soham Chakraborty </h1>
            <div className='i-title'>
            <div className='i-title-wrapper'>
            <div className='i-title-item'>
                Web Developer
            </div>
            <div className='i-title-item'>
                UI/UX designer
            </div>
            <div className='i-title-item'>
                ML enthusiast
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} style={{top:'50%',}}>
                <ListItem >
                <Button style={{top:'50%',}} className='dwld' variant='contained' color='secondary' startIcon={<DownloadIcon/>}>Download CV</Button>
                </ListItem>
                <div style={{marginTop:'20px',}}>
                <MediaCard/>
                </div>
                
            </Grid>
            </Grid>
            
        </div>
         
        
    )
}

export default Homepage



  



