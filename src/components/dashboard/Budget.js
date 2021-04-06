import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/LibraryBooks';
import { red } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'
const Budget = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
   
  >
   <div  >


    <CardContent >
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
        component={Link} to="/app/products"
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h3"
           
          >
            COURSES
          </Typography>
          {/* <Typography
            color="textPrimary"
            variant="h5"
          >
            You have 6 courses
          </Typography> */}
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography> */}
        <Typography
          variant="h5"
        >
          You have 6 courses
        </Typography>
      </Box>
    </CardContent>
    </div>
  </Card>
);

export default Budget;
