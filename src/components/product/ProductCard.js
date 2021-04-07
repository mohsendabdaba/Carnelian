import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const ProductCard = ({ course, ...rest }) => {
  const classes = useStyles();
  const classes1 = useStyles1();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      {...rest}
    >
      <CardContent style={{ height: '100%', 'display': 'flex', 'flex-direction': 'column', "justifyContent": "space-between" }}>

        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {course.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {course.Description}
        </Typography>
        <div style={{ "display": "flex", "justifyContent": "space-around", "marginTop": "10px", "marginEnd": "10px" }}>
          <Grid style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56,
              }}
            >
              6
          </Avatar>
            <p style={{ "marginTop": "10px", "fontSize": "14px" }}>CLOs Number</p>
          </Grid>
          <Grid item style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56
              }}
            >
              20
          </Avatar>
            <p style={{ "marginTop": "10px", "fontSize": "14px" }}>Students Number</p>
          </Grid>
          <Grid item style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              70%
          </Avatar>
            <p style={{ "marginTop": "10px", "fontSize": "14px" }}>Passed Succsufully</p>
          </Grid>

        </div>


      </CardContent>
      <div>
        <Grid container alignItems="center" className={classes.root} >
          
          <div className={classes1.root} style={{"width":"48%",textAlign:"center"}}>
            <Button component={RouterLink} to='/app/assessments' color="warning" >ASSESSMENTS</Button>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes1.root} style={{"width":"48%",textAlign:"center"}}>
            <Button   component={RouterLink} to='/app/outcomes'color="warning">OutComes</Button>

          </div>
        </Grid>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  course: PropTypes.object.isRequired
};

export default ProductCard;
