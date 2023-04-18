import { useEffect, useState } from "react"
import React from 'react'
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
// import axios from 'axios'
// const token = localStorage.getItem("token");
// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

// async function getAllProjects({ value }) {
//   const allProject = await axios(`http://localhost:5000/task/?state=${value}`, {
//     ...config,
//     method: "GET",
//   });
//   const project = allProject.data;
//   return project;
// }

  const Task = () => {
    const [totalTasks, setTotalTasks] = useState([ ]);
    const [tasksCompleted, setTasksCompleted] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/task")
        .then(response => response.json())
        .then(data => {
          setTotalTasks(data.totalTasks);
          setTasksCompleted(data.tasksCompleted);
        })
        .catch(error => console.log(error));
    }, []);
  
    return (
      <React.Fragment>
        <div classname ="mytask">
        <div className="page-content">
    
          <Row style={{
                marginBottom: "3%",
                
              }}>
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="page-title mb-0 font-size-18">My task</h4>
              </div>
            </div>
          </Row>
  
          <Row>
            <Col lg={3}>
              <Card>
                <CardBody>
                  <div className="d-flex align-items-start">
                    <div className="avatar-sm font-size-20 me-3">
                      <span className="avatar-title bg-soft-primary text-primary rounded">
                        <i className="mdi mdi-tag-plus-outline"></i>
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-size-16 mt-2">Total Task</div>
                    </div>
                  </div>
                  <h4 className="mt-4">{totalTasks}+0</h4>
                  <div className="row">
                    <div className="col-7">
                      <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                        className="mdi mdi-arrow-up"></i> </span></p>
                    </div>
                    <div className="col-5 align-self-center">
  
                      <Progress
                        value="62"
                        color="primary"
                        className="bg-transparent progress-sm"
                        size="sm"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card
              style={{
                marginTop: "25%",
                
              }}
              >
                <CardBody>
                  <div className="d-flex align-items-start">
                    <div className="avatar-sm font-size-20 me-3">
                      <span className="avatar-title bg-soft-primary text-primary rounded">
                        <i className="mdi mdi-account-multiple-outline"></i>
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-size-16 mt-2">Task Completed</div>
  
                    </div>
                  </div>
                 <h4 className="mt-4">{tasksCompleted}</h4>
                  <Row>
                    <div className="col-7">
                      <p className="mb-0"><span className="text-success me-2"> 0.16% <i
                        className="mdi mdi-arrow-up"></i> </span></p>
                    </div>
                    <div className="col-5 align-self-center">
                      <Progress
                        value="62"
                        color="success"
                        className="bg-transparent progress-sm"
                        size="sm"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
  
          <Row
          style={{
            marginTop: "5%"
          }}
          >
          </Row> 
  
        </div>
        </div>
      </React.Fragment>
    )
  }
  
  export default Task;