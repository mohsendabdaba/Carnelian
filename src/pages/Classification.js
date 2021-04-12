import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';
import Slider from "nouislider";
import "nouislider/distribute/nouislider.css";

import DashboardSidebar from '../components/DashboardSidebar';
import React,{useState,useEffect } from 'react';

const Classification = () => {
        useEffect(() => {
            const here=document.getElementById("sliderRegular")
            var tooltipSlider = document.getElementById('slider-tooltips');

            Slider.create(here, {
              start: [20,40,60,80],
              connect: [true, true,true,true,true],
              step: 1,
              range: { min: 0, max: 100 },
              tooltips: [true, true, true,true],
              pips: {mode: 'count', values: 5}

            });

            var connect = here.querySelectorAll('.noUi-connect');
            var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
            for (var i = 0; i < connect.length; i++) {
                connect[i].classList.add(classes[i]);
            }


          }, []);


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
            
            <h1>hello</h1>
            <div className="input-slider-container">
      <div id="sliderRegular" style={{width:'600px'}}></div>
    </div>
            </Box>
    )
}

export default Classification;
