// import { Helmet } from 'react-helmet';
// import {
//     Box,
//     Container,
//     Grid
// } from '@material-ui/core';

// import DashboardSidebar from '../components/DashboardSidebar';
// import { useState } from 'react';
// const Outcomes = () => {
//     const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//     return (

//         <Box
//         sx={{
//           backgroundColor: 'background.default',
//           minHeight: '100%',
//           py: 3,
//           paddingLeft: '256px'
//         }}
//       >      <DashboardSidebar
//                 onMobileClose={() => setMobileNavOpen(false)}
//                 openMobile={isMobileNavOpen}
//             />
//             <Helmet>
//                 <title> Assessments | Material Kit</title>
//             </Helmet>
          
//         </Box>
//     )
// }

// export default Outcomes;


import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';
import courses from '../__mocks__/courses.json'
import DashboardSidebar from '../components/DashboardSidebar';
import { useState } from 'react';
import CLOCard from'../components/CLOCard';

const Outcomes = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const filteredItems = courses.filter(item => item.id=="001")

    // let CourseLearningOutcomes=CourseLearningOutcomes(filteredItems.CourseLearningOutcomes)
    console.log(courses, "courses")
    console.log(filteredItems, "outcomes")
    console.log(filteredItems[0].courseLearningOutcomes, "CourseLearningOutcomes")
    return (

        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
                paddingLeft: '256px'
            }}
        >      <DashboardSidebar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <Helmet>
                <title> Assessments | Material Kit</title>
            </Helmet>
            <Grid
                item
                lg={12}
                md={12}
                xs={12}
                style={{ "padding": "10px", "margin": " 0px 20px", "background": "rgb(189,189,189,0.5)", "borderRadius": "4px" }}
            >
                <h2>Junior Design Seminar</h2>
            </Grid>
            
            <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {filteredItems[0].courseLearningOutcomes.map((outcome) => (
              <Grid
                item
                key={outcome.id}
                lg={12}
                md={12}
                xs={12}
              >
<CLOCard/>              </Grid>
            ))}
          </Grid>
        </Box>
        </Box>
    )
}

export default Outcomes;