import React, { Component } from 'react';
import { Select } from 'antd';
import courses from '../../__mocks__/courses.json'
const { Option } = Select;
export default class SelectClo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredItems : courses.filter(item => item.id == "001"),
            clo:"select"
        };
    }

    handleChange =(e)=>{
     this.setState({ clo: e.target.value });
        console.log(e.target.value,"clo Selected!!")
        console.log(this.state.clo,"clo in state!!")
      }
  render() {
    return(

      <div className="wrapper" style={{"textAlign":"center",
      "display":"flex",flexDirection:"column",alignItems:"center","marginTop":"15%"}}>
          <h1>Select Course Learning Outcome</h1>
        <select  onChange={this.handleChange}
    showSearch
    style={{ width: 700 ,height:"40px"}}
    placeholder="Select CLO"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >

{this.state.filteredItems[0].courseLearningOutcomes.map(outcome => (
 <option key={outcome.id} value={outcome.title}>{outcome.title}</option>
              
                    ))}
    
  </select>
      </div>
    )
  }
}