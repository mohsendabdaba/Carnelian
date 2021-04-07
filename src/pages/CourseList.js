import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  dividerClasses,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product//ProductCard';
import products from 'src/__mocks__/products';
import courses from 'src/__mocks__/courses.json';
import DashboardSidebar from '../components/DashboardSidebar';
import { PaddingSharp } from '@material-ui/icons';

const CourseList = () =>  {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
console.log(courses,"courses")
  return (
    <div>
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
  
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
        paddingLeft: '256px'
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {courses.map((course) => (
              <Grid
                item
                key={course.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </div>
)
}
export default CourseList;
