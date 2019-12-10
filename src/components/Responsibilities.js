import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Responsibilities.css'

export default class Responsibilities extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: [{
        "responsibility_name": "Autonomy",
        "responsibility_descriptions": [
          {
            "level": 1,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under supervision."
              },
              {
                "responsibility_criterion": "Uses little discretion."
              },
              {
                "responsibility_criterion": "Is expected to seek guidance in unexpected situations."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under routine direction."
              },
              {
                "responsibility_criterion": "Uses limited discretion in resolving issues or enquiries."
              },
              {
                "responsibility_criterion": "Works without frequent reference to others."
              }
            ]
          },
          {
            "level": 3,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under general direction."
              },
              {
                "responsibility_criterion": "Uses discretion in identifying and responding to complex issues and assignments."
              },
              {
                "responsibility_criterion": "Receives specific direction, accepts guidance and has work reviewed at agreed milestones. Determines when issues should be escalated to a higher level."
              }
            ]
          },
          {
            "level": 4,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under general direction within a clear framework of accountability."
              },
              {
                "responsibility_criterion": "Exercises substantial personal responsibility and autonomy."
              },
              {
                "responsibility_criterion": "Plans own work to meet given objectives and processes."
              }
            ]
          },
          {
            "level": 4,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under general direction within a clear framework of accountability."
              },
              {
                "responsibility_criterion": "Exercises substantial personal responsibility and autonomy."
              },
              {
                "responsibility_criterion": "Plans own work to meet given objectives and processes."
              }
            ]
          },
          {
            "level": 4,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under general direction within a clear framework of accountability."
              },
              {
                "responsibility_criterion": "Exercises substantial personal responsibility and autonomy."
              },
              {
                "responsibility_criterion": "Plans own work to meet given objectives and processes."
              }
            ]
          },
          {
            "level": 4,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Works under general direction within a clear framework of accountability."
              },
              {
                "responsibility_criterion": "Exercises substantial personal responsibility and autonomy."
              },
              {
                "responsibility_criterion": "Plans own work to meet given objectives and processes."
              }
            ]
          }
        ]
      },
      {
        "responsibility_name": "Influence",
        "responsibility_descriptions": [
          {
            "level": 1,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Minimal influence."
              },
              {
                "responsibility_criterion": "May work alone, or interact with immediate colleagues."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          },
          {
            "level": 2,
            "responsibility_criteria": [
              {
                "responsibility_criterion": "Interacts with and may influence immediate colleagues."
              },
              {
                "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
              },
              {
                "responsibility_criterion": "May have more influence in own domain."
              },
              {
                "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
              }
            ]
          }
        ]
      }],
      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No",
      disable: true,
      respYesArr: [],
      respNoArr: [],
      lvl: ""
    }
  }

  /**
   * Gets the responsibilities from the database and sets it in the state
   */
  getResp = () => {
    fetch(`http://localhost:3500/API/showResponsibilities`)
      .then(response => response.json())
      .then(responsibility_info => this.setState({ resp: responsibility_info }))
  }

  /**
   * Calls the getResp function 
   */
  componentDidMount = () => {
    this.getResp();
  }

  /**
   * Enables the select boxes in the first column
   */
  componentDidUpdate = () => {
    var select = document.getElementsByName("0");
    var arr = Array.from(select);
    for (var i = 0; i < arr.length; i++) {
      arr[i].firstElementChild.disabled = false;
    }
  }

  /**
   * Calculates the percentage of true and false select boxes for each column 
   * Then calls the enable function if greater than 2/3
   * Calls disable function if less
   */
  selectCount = (index) => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var select = Array.from(carousel[0].querySelectorAll("[name=" + "'" + index + "'" + "]"))
    var count = 0, per = 0, total = 0;
    for (var i = 0; i < select.length; i++) {
      if (select[i].firstElementChild.value === "true") {
        count++;
      }
      total++;
    }
    per = ((count / total) * 100).toFixed(2);
    if (per > ((2 / 3) * 100)) {
      switch (index) {
        case 0:
          this.enableSelect(1);
          break;
        case 1:
          this.enableSelect(2);
          break;
        case 2:
          this.enableSelect(3);
          break;
        case 3:
          this.enableSelect(4);
          break;
        case 4:
          this.enableSelect(5);
          break;
        case 5:
          this.enableSelect(6);
          break;
      }
    } else {
      switch (index) {
        case 0:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(1);
            this.disableSelect(2);
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 1:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(2);
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 2:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 3:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 4:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 5:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(6);
          }
          break;
      }
    }
  }

  /**
   * Gets the select boxes for the column from the input param
   * Enables all boxes in the column
   */
  enableSelect = (input) => {
    var select = document.getElementsByName(input);
    var arr = Array.from(select);
    for (var i = 0; i < arr.length; i++) {
      arr[i].firstElementChild.disabled = false;
    }
  }

  /**
  * Gets the select boxes for the column from the input param
  * Disables all boxes in the column and sets to default value
  */
  disableSelect = (input) => {
    var span = document.getElementsByName(input);
    var arr = Array.from(span);
    for (var i = 0; i < arr.length; i++) {
      var select = [arr[i].firstElementChild];
      for (var opt, j = 0; opt = select[j]; j++) {
        opt.selectedIndex = 0;
        select[j].disabled = true;
      }
    }
  }

  /**
   * Gets level based on which column select boxes are enabled
   * Calls addArr function passing current level
   */

  handleOnClick = () => {
    this.getLvl();
    this.nextPage();
  }

  getLvl = () => {
    var span = document.getElementsByTagName("span");
    var lvl = this.state.lvl;
    var name, select;
    for (var i = 0; i < span.length; i++) {
      name = span[i].getAttribute("name");
      select = span[i].firstElementChild;
      if (select !== null) {
        if (select.disabled === false) {
          lvl = parseInt(name);
        }
      }
    }
    switch (lvl) {
      case 0:
        this.addArr(lvl);
        break;
      case 1:
        this.addArr(lvl);
        break;
      case 2:
        this.addArr(lvl);
        break;
      case 3:
        this.addArr(lvl);
        break;
      case 4:
        this.addArr(lvl);
        break;
      case 5:
        this.addArr(lvl);
        break;
      case 6:
        this.addArr(lvl);
        break;
    }
  }

  nextPage = () => {
    this.props.handlePageChange("SkillList")
  }

  /**
   * Creates arrays for all select boxes with true value for current level
   * Creates arrays for all select boxes with false value for previous level
   * Assigns arrays and current level to state
   * Calls pushResp function 
   */
  addArr = (lvl) => {
    var curLvl = document.getElementsByName(lvl);
    var prevLvl = document.getElementsByName(lvl - 1);
    var curArr = Array.from(curLvl);
    var prevArr = Array.from(prevLvl);
    var yArr = [];
    var nArr = [];
    if (lvl === 0) {
      for (var i = 0; i < curArr.length; i++) {
        if (curArr[i].firstElementChild.value === "true") {
          yArr.push(curArr[i].lastElementChild.innerHTML);
        } else if (curArr[i].firstElementChild.value === "false") {
          nArr.push(curArr[i].lastElementChild.innerHTML);
        }
      }
    } else {
      for (var j = 0; j < curArr.length; j++) {
        if (curArr[j].firstElementChild.value === "true") {
          yArr.push(curArr[j].lastElementChild.innerHTML);
        }
      }
      for (var k = 0; k < prevArr.length; k++) {
        if (prevArr[k].firstElementChild.value === "false") {
          nArr.push(prevArr[k].lastElementChild.innerHTML);
        }
      }
    }
    this.state.lvl = lvl;
    this.state.respYesArr = yArr;
    this.state.respNoArr = nArr;
    this.pushResp();
  }

  /**
   * Passes array and level in state to SessionWindow
   */
  pushResp = () => {
    var lvl = this.state.lvl;
    var newYArray = this.state.respYesArr;
    var newNArray = this.state.respNoArr;
    this.props.pushResp(newYArray);
    this.props.pushResp1(newNArray);
    this.props.pushLvl(lvl)
  }

  render() {
    return (
      <Container>
        <div className="lvls">
          <table id="table" class="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Level 1</th>
                <th>Level 2</th>
                <th>Level 3</th>
                <th>Level 4</th>
                <th>Level 5</th>
                <th>Level 6</th>
                <th>Level 7</th>
              </tr>
            </thead>
            <tbody id="list">
              {this.state.resp.map((name, index) => (
                <tr id="">
                  <td><b>{name.responsibility_name}</b></td>
                  {name.responsibility_descriptions.map((desc, index) => (
                    <td>
                      {desc.responsibility_criteria.map((desc2, index2) => (
                        <span name={index}>
                          <select id={index2} disabled={this.state.disable} onChange={() => this.selectCount(index)}>
                            <option selected>{this.state.lblDefault}</option>
                            <option value="true">{this.state.lblYes}</option>
                            <option value="false">{this.state.lblNo}</option>
                          </select>
                          <p id="info">{desc2.responsibility_criterion}</p>
                        </span>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div><br />
        <button name="skillList" onClick={() => this.handleOnClick()}>Skill List Selection</button>
      </Container>
    );
  }
}