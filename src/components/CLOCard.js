import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const TotalCustomers = (props) => {

    console.log(props.outcome, 'here it is')
    return (
        <Card {...props}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h3"

                        >
                            {props.outcome.title}
                        </Typography>
                    </Grid>
                  
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: green[600],
                                height: 56,
                                width: 56
                            }}
                        >
                            <PeopleIcon />
                        </Avatar>
                    </Grid>
                </Grid>

               
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
            </CardContent>
        </Card>
    );
}

export default TotalCustomers;
