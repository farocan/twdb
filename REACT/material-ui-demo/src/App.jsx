import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './NavBar';

function App() {
  return (
  <div>
    {/* <Button variant="contained" onClick={()=> alert("HI!")}>Contained</Button>
    <Button variant="text">Contained</Button>
    <Button variant="outlined">Contained</Button>
    <Button variant="contained" color="success">Contained</Button>
    <Button variant="contained" color="secondary" size="small">Contained</Button>
    <IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton> */}
  {/* <RatingDemo/> */}
  <NavBar/>
  <FormDemo/>
  </div>
  );
}

export default App
