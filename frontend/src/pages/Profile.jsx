import React, { useState, useEffect } from 'react'

import Header from '../tempcomponents/Layout/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import BaseRequest from "../services/requests/Base";
import { BASE_URL } from '../constants/routes';

const getAge = (age) => {
    if (age == "below30") {
        return "18-29"
    } else if (age == "below40") {
        return "30-39"
    } else if (age == "below50") {
        return "40-49"
    } else return "50+"
}

const getGoal = (goal) => {
    if (goal == "loseweight") {
        return "Lose Weight"
    } else if (goal == "gainmuscle") {
        return "Gain Muscle"
    } else return "Get Shredded"
}

const getBodyType = (goal) => {
    if (goal == "ectomorph") {
        return "Ectomorph"
    } else if (goal == "mesomorph") {
        return "Mesomorph"
    } else return "Endomorph"
}

const Profile = () => {
    const [userData, setUserData] = useState({
        fName: '',
        dName: "",
        email: '',
        age: '',
        goal: '',
        bodyType: '',
    });

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await BaseRequest.getAuthenticated(`${BASE_URL}/profile/${userId}`)
                const user = response.data.userProfile;

                setUserData({
                    fName: user.fName,
                    email: user.email,
                    age: getAge(user.age),
                    goal: getGoal(user.goal),
                    bodyType: getBodyType(user.bodyType),
                    dName: user.dName
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>
            <Header />
            <br></br>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <br></br>
                        <br></br>
                        <Form className="form mt-5">
                            <div className='d-flex justify-content-between align-items-center mb-5'>
                                <h3 className='color-secondary'>User Profile</h3>
                                <button className='color-white p-2 primary-btn'>
                                    <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
                                </button>

                            </div>

                            <Form.Group controlId="formCategory1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.fName} disabled />

                            </Form.Group>
                            <Form.Group controlId="formCategory2">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control className="color-gray mb-3" type="text" defaultValue={userData.dName} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.age} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory4">
                                <Form.Label>Goal</Form.Label>
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.goal} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory5">
                                <Form.Label>Body Type</Form.Label>
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.bodyType} disabled />

                            </Form.Group>

                            <br></br>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
