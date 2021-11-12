import { ListItem } from '@mui/material'
import React from 'react'

function Grid() {
    return (
        <div>
            <Grid container spacing={2}>
  <Grid ListItem xs={6} md={8}>
    <ListItem>xs=6 md=8</ListItem>
  </Grid>
  <Grid ListItem xs={6} md={4}>
    <ListItem>xs=6 md=4</ListItem>
  </Grid>
  <Grid ListItem xs={6} md={4}>
    <ListItem>xs=6 md=4</ListItem>
  </Grid>
  <Grid ListListItem xs={6} md={8}>
    <ListItem>xs=6 md=8</ListItem>
  </Grid>
</Grid>
        </div>
    )
}

export default Grid
