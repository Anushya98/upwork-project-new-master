import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//import images
import avatar1 from '../assets/images/users/avatar-3.jpg'
import avatar2 from '../assets/images/users/avatar-4.jpg'
import avatar3 from '../assets/images/users/avatar-5.jpg'
import avatar4 from '../assets/images/users/avatar-6.jpg'

const Overview = () => {

    const inbox = [
        {
            id: 1,
            img: avatar1,
            name: 'Paul',
            desc: "Hey! there I'm available",
            time: '05 min'
        },
        {
            id: 2,
            img: avatar2,
            name: 'Mary',
            desc: "This theme is awesome!",
            time: '12 min'
        },
        {
            id: 3,
            img: avatar3,
            name: 'Cynthia',
            desc: "Nice to meet you",
            time: '18 min'
        },
        {
            id: 4,
            img: avatar4,
            name: 'Darren',
            desc: "I've finished it! See you so",
            time: '2hr ago'
        },
    ]

    return (
        <React.Fragment>
            <Col lg={4}>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Inbox</h4>

                        <ul className="inbox-wid list-unstyled">
                        {inbox.map((inbox, key) => (
                            <li className="inbox-list-item" key={key}>
                                <Link to="#">
                                    <div className="d-flex align-items-start">
                                        <div className="me-3 align-self-center">
                                            <img src={inbox.img} alt=""
                                                className="avatar-sm rounded-circle" style={{
                                                    height: "2.5rem",
                                                    width: "2.5rem",
                                                   
                                                }} />
                                        </div>
                                        <div className="flex-1 overflow-hidden"
                                        style={{
                                            color: "#8687a7",
                                            display: "block",
                                            padding: "14px 10px",
                                            borderBottom: "1px solid #eff2f7",
                                            //marginLeft: "1rem !important"
                                        }}
                                        >
                                            <h5 className="font-size-16 mb-1" style={{
                                                color: "#495057",
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                lineHheight: "1.2",                                                                                  
                                            }}>{inbox.name}</h5>
                                            <p className="text-truncate mb-0" style={{
                                                fontSize: "14px",
                                            }}
                                            >{inbox.desc}</p>
                                        </div>
                                        <div className="font-size-12 ms-auto">
                                            {inbox.time}
                                                    </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                            
                        </ul>

                        <div className="text-center">
                            <Link to="#" className="btn btn-primary btn-sm">Load more</Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Overview;