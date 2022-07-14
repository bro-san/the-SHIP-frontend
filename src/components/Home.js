import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
  // const [waifuData, setWaifuData] = useState([]);

  // useEffect(() => {
  //   fetch()
  //     .then((res) => res.json())
  //     .then((data) => setWaifuData(data));
  // }, []);

  return (
    <>
      <Typography
        variant='h5'
        gutterBottom
        component='div'
        className='animate__animated animate__fadeIn'
        sx={{ margin: '5px' }}
      >
        Welcome! Feel free to browse and create ships, and don't forget to
        create your own!
      </Typography>
    </>
  );
}

export default Home;
