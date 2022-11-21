import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './App.css';
import { bgcolor } from '@mui/system';

function App() {
  const [m, setm] = useState('');
  const [n, setn] = useState('');
  const [showsec2, setshowsec2] = useState(false)
  const handleForm = (e) => {
    e.preventDefault();
    if (m < n) {
      alert('M should be greater than N')
    }

    let a = m * m - n * n;
    let b = 2 * m * n;
    let c = m * m + n * n;

    localStorage.setItem('values', JSON.stringify({ 'a': a, 'b': b, 'c': c }));
    setshowsec2(true);
  }

  let values = JSON.parse(localStorage.getItem("values"));
  console.log(values)
  return (
    <div className="app">
      <form className='sectionOne' onSubmit={handleForm}>
        <h2>Enter the values of M and N to see the Magic!!!</h2>
        <p>(PS. let the value of M be larger than N)</p>
        <TextField id="outlined-basic" label="Enter M" variant="outlined" placeholder='Enter the value of M...'
          required value={m} onChange={(e) => setm(e.target.value)} pattern='[0-9]^' autoComplete='off' />
        <TextField id="outlined-basic" label="Enter N" variant="outlined" placeholder='Enter the value of N...'
          required value={n} onChange={(e) => setn(e.target.value)} pattern='[0-9]^' autoComplete='off' />
        <Button type='submit' variant="contained" disableRipple sx={{
          width: '0.4', bgcolor: 'black'
        }}>ENTER</Button>
      </form>
      {
        showsec2 &&
        <div className='sectionTwo'>
          <img src={require('./assets/PngItem_882153.png')} alt='triangle' className='triangleImg' />
          <h3 className='absoluteP valueA'>{values.a}</h3>
          <h3 className='absoluteP valueB'>{values.b}</h3>
          <h3 className='absoluteP valueC'>{values.c}</h3>
        </div>}
    </div>
  );
}

export default App;
