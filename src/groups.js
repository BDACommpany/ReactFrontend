import React, { Component } from "react";
import { Row, Col, Card, Tabs, Tab, Button } from "react-bootstrap";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedCard: 0};
  }
  
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {/* <Button
                    key={color}
                    variant={color}
                    className="m-1 text-capitalize"
                  >
                    {color}
                  </Button> */}
        <h3> Group</h3>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12} className="mb-4">
            <Row className="mr-1">
              <Col md={6}>
                <input
                  name="search"
                  id="search"
                  className="form-control"
                  placeholder="Search"
                  type="search"
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.email}
                />
              </Col>
              <Col md={4}>
                <Button variant="info" className="m-1">
                  New Group
                </Button>
              </Col>
              <Col md={2}>
                <Button variant="info" className="m-1 ">
                  Edit
                </Button>
              </Col>
            </Row>
            {[0, 1, 2, 3].map((item) => {
              return (
                <Card className="mb-3" key={item} style={{backgroundColor:item===this.state.selectedCard?'#DFEEFA':'#FFF'}}
                onClick={()=>this.setState({selectedCard:item})}>
                  <Card.Body>
                    {/* <div className="simple-card-title"> */}
                    <h3 className="text-capitalize mb-1">TEST</h3>
                    <h6 className="text-mutee">Test</h6>
                    {/* </div> */}

                    {/* {children} */}
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
          <Col lg={8} md={8} sm={12} xs={12} className="mb-4">
            <Card className="mb-3 h-100">
              <Card.Body>
                <div
                  style={{
                    backgroundColor: "#CCD6E3",
                    padding: "10px 5px",
                    margin: "10px 0px",
                  }}
                >
                  <Row>
                    <Col md={3}>
                      <select
                        id="picker1"
                        className="form-control"
                        name="select"
                        // value={values.select}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                      >
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                    </Col>
                    <Col md={3}>
                      <select
                        id="picker1"
                        className="form-control"
                        name="select"
                        // value={values.select}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                      >
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                    </Col>
                    <Col md={3}>
                      <select
                        id="picker1"
                        className="form-control"
                        name="select"
                        // value={values.select}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                      >
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                    </Col>
                    <Col md={3}>
                      <Button
                        variant="info"
                        className="btn-rounded m-1 text-capitalize"
                      >
                        Clear
                      </Button>
                    </Col>
                  </Row>
                </div>
                <Tabs defaultActiveKey="assigned" id="uncontrolled-tab-example">
                  <Tab
                    eventKey="assigned"
                    title={
                      <>
                        <i className="i-Monitor-3 mr-1"></i>Assigned Systems
                      </>
                    }
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">SID</th>
                            <th scope="col">Client</th>
                            <th scope="col">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">S4S</th>
                            <td>
                              <span className="text-15 font-weight-200">
                                000
                              </span>
                              <br />
                            </td>
                            <td>
                              <span className="text-15 font-weight-200">
                                Description
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="grouped"
                    title={
                      <>
                        <i className="i-Data-Copy mr-1"></i>Grouped Systems
                      </>
                    }
                  >
                    TEST
                  </Tab>
                  <Tab
                    eventKey="nongrouped"
                    title={
                      <>
                        <i className="i-Big-Data mr-1"></i>Non-Grouped Systems
                      </>
                    }
                  >
                    TEST
                  </Tab>
                  <Tab
                    eventKey="detail"
                    title={
                      <>
                        <i className="i-Address-Book mr-1"></i>Detail
                      </>
                    }
                  >
                    TEST
                  </Tab>
                </Tabs>
              </Card.Body>
              <div>
                <Row className="justify-content-space-between">
                  <Col md={6}>
                    <Button variant="danger" className="m-1 text-capitalize">
                      Cancel
                    </Button>
                  </Col>
                  <Col md={6} className="text-right">
                    <Button variant="success" className="m-1 text-capitalize">
                      Save
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Groups;
