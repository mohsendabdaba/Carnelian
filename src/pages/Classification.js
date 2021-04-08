import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';

import DashboardSidebar from '../components/DashboardSidebar';
import { useState } from 'react';
const Classification = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
          paddingLeft: '256px'
        }}
      >
            <DashboardSidebar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <Helmet>
                <title> Assessments | Material Kit</title>
            </Helmet>
            
            <h1>hello this s classification</h1>
        </Box>
    )
}

export default Classification;
