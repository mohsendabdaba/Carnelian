import React, { Component } from 'react';
import courses from '../../__mocks__/courses.json'
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Input
} from '@material-ui/core';
import assessments from '../../__mocks__/assessments.json'
export default class AddStudentNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredItems: courses.filter(item => item.id == "001"),
            clo: "select"
        };
    }
    render() {
        return (
            <div className="wrapper">
                <h2 style={{ textAlign: 'center' }}>
                    {this.state.filteredItems[0].courseLearningOutcomes[0].title}</h2>
                <Card style={{ width: "100%" ,marginBottom:"30px"}}>
                    <PerfectScrollbar>
                        <Box sx={{ Width: 800 }}>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Name
                </TableCell>
                                        {assessments[0].Assessemnts[0].evaluation.map((assessment) => (
                                            <TableCell>
                                                {assessment.type}
                                            </TableCell>
                                        ))}


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {assessments.map((assessment) => (
                                        <TableRow
                                            hover
                                            key={assessment.id}

                                        >

                                            <TableCell>
                                                {assessment.name}
                                            </TableCell>
                                            {assessments[0].Assessemnts[0].evaluation.map((assessment) => (
                                                <TableCell>
                                                    <Input >{assessment.note}</Input> / {assessment.totalMarks}
                                                </TableCell>

                                            ))}


                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </PerfectScrollbar>

                </Card>
            </div>
        )
    }
}