import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import logo from '../../assets/logo.svg'

import styles from './styles'

const company = ['about', 'careers']
const categories = ['Dog', 'Cat', 'Fish', 'Bird']
const support = ['contact us', 'site feedback']
const getInTouch = ['Privacy', 'Help', 'Contact']
const navItems = ['Resource center', 'Guides']

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Box sx={styles.wrapper}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant='h3'>Company</Typography>
            <List>
              {company.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant='h3'>Categories</Typography>
            <List>
              {categories.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant='h3'>Support</Typography>
            <List>
              {support.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant='h3'>Get in touch</Typography>
            <List>
              {getInTouch.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
            <Box sx={styles.links}>
              <IconButton>
                <InstagramIcon sx={styles.icon} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={styles.icon} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={styles.icon} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={styles.copyrightBlock}>
          <Typography sx={styles.logo}>
            <Box component='img' src={logo} sx={{ width: "200px" }} />
          </Typography>
          <Typography sx={styles.copyrightText}>
            Copyright © 2022. All Right Reserved.
          </Typography>
          <Box sx={styles.nav}>
            {navItems.map((item, index) => {
              return (
                <Button key={index} sx={styles.linkBtn}>
                  {item}
                </Button>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
