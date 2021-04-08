import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { blue } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
const TotalCustomers = (props) => {

    console.log(props.outcome, 'here it is')
    return (
        <Card {...props} style={{"marginLeft": "20px","marginRight": "20px", "background": "rgb(189,189,189,0.1)" }}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                // sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item lg={6} md={6} sm={6}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h4"

                        >
                            {props.outcome.title}
                        </Typography>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                pt: 2
                            }}
                        >
                            <Grid item>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="h5"
                                >
                                    {props.outcome.Domain}
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6}>
                    <Grid
                    container
                    spacing={3}
                // sx={{ justifyContent: 'space-between' }}
                >
                        <Grid item lg={10} md={10} sm={10} >
                            <Box                             
                            sx={{
                                pt: 2
                            }}>
                            {props.outcome.Assessments.map(assessment => (
                                <Grid
                                    item
                                    key={assessment.id}
                                >
                                    {assessment.percentage !=0 && <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        {assessment.evaluation} 
                                        <div style={{ width: 340 }}>
    <Progress percent={assessment.percentage} strokeColor="rgb(30,136,229)"  />
  </div> 
                                    </Typography>}
                                </Grid>
                            ))}
                           </Box>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2}>
                        <Avatar
                            sx={{
                                backgroundColor: blue[600],
                                height: 56,
                                width: 56
                            }}
                        >
                            <EditIcon />
                        </Avatar>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>



            </CardContent>
        </Card>
    );
}

export default TotalCustomers;
