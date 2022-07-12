import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #fff' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '250px',
        height: '260px',
        cursor: 'pointer',
        gap: '45px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '50px', height: '50px' }} />
      <Typography fontWeight='bold'>
        {item}
      </Typography>
    </Stack >
  )
}

export default BodyPart
