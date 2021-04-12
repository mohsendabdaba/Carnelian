import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';
import { Steps, Button, message } from 'antd';
import DashboardSidebar from '../components/DashboardSidebar';
import { useState } from 'react';
import AddStudentNotes from "./AssessmentsSteps/AddStudentNotes";
import DisplayResult from "./AssessmentsSteps/DisplayResult";
import SelectClo from './AssessmentsSteps/SelectClo';
import React from 'react';

const { Step } = Steps;

const steps = [
    {
        title: 'First',
        content: <SelectClo />,
    },
    {
        title: 'Second',
        content: <AddStudentNotes />,
    },
    {
        title: 'Last',
        content: <DisplayResult />,
    },
];
const Assessments = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [seleted, setselected] = useState('');
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const handleChangeValue  = (e) => {
        setselected(e.target.value)
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
                paddingLeft: '256px',

            }}
        >
            <DashboardSidebar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <Helmet>
                <title> Assessments | Material Kit</title>
            </Helmet>
            <div style={{ margin: "0px 50px" }}>
                <Steps current={current} >
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div 
                style={{"display":"flex","justifyContent":"end"}}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        </Box>
    )
}

export default Assessments;
