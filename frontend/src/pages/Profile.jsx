import React, { useState, useEffect, useContext } from 'react'

import Header from '../tempcomponents/Layout/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import BaseRequest from "../services/requests/Base";

import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/routes';

import { BASE_URL } from '../constants/routes';
import { OnboardingContext } from '../context/Onboarding';


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
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fName: '',
        dName: "",
        email: '',
        age: '',
        goal: '',
        bodyType: '',
    });


    const [buttonsVisible, setButtonsVisible] = useState(false);

    const handleToggleButtons = () => {
        setButtonsVisible(!buttonsVisible); // Toggles the visibility state
    };

    const handleSave = () => {
        navigate(HOME.INDEX);
    }

    const { token } = useContext(OnboardingContext);


    const userId = localStorage.getItem("userId");

    const tokenNew = () => {
        return token || localStorage.getItem("token")
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await BaseRequest.getAuthenticated(`${BASE_URL}/profile/${userId}`, {
                    headers: {
                        'Authorization': `${tokenNew()}`,
                        'Content-Type': 'application/json',
                    }
                })
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

                                <Button style={{ backgroundColor: "#69A2B0" }} hidden={buttonsVisible} onClick={handleToggleButtons}>
                                    <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
                                </Button>


                            </div>

                            <Form.Group controlId="formCategory1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.fName} disabled={!buttonsVisible} />

                            </Form.Group>
                            <Form.Group controlId="formCategory2">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control className="color-gray mb-3" type="text" defaultValue={userData.dName} disabled={!buttonsVisible} />

                            </Form.Group>

                            <Form.Group controlId="formCategory3">
                                <Form.Label>Age</Form.Label>
                                {!buttonsVisible ? (
                                    <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.age} disabled={!buttonsVisible} />
                                ) : (
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Age</option>
                                        <option value="1">18-29</option>
                                        <option value="2">30-39</option>
                                        <option value="3">40-49</option>
                                        <option value="4">50+</option>
                                    </Form.Select>
                                )}
                            </Form.Group>

                            <Form.Group controlId="formCategory4">
                                <Form.Label>Goal</Form.Label>
                                {!buttonsVisible ? (
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.goal} disabled={!buttonsVisible} />
                                ) : (
                                <Form.Select aria-label="Default select example">
                                    <option>Select Goal</option>
                                    <option value="1">Lose weight</option>
                                    <option value="2">Gain Muscle</option>
                                    <option value="3">Get Shredded</option>
                                </Form.Select>
                                )}
                            </Form.Group>

                            <Form.Group controlId="formCategory5">
                                <Form.Label>Body Type</Form.Label>
                                {!buttonsVisible ? (
                                <Form.Control type="text" className="color-gray mb-3" defaultValue={userData.bodyType} disabled={!buttonsVisible} />
                                ) : (
                                <Form.Select aria-label="Default select example">
                                    <option>Select Body Type</option>
                                    <option value="1">Ectomorph</option>
                                    <option value="2">Mesomorph</option>
                                    <option value="3">Endomorph</option>
                                </Form.Select>
                                )}
                            </Form.Group>
                            <Button style={{ marginTop: "30px", marginLeft: "70px", backgroundColor: "#69A2B0" }} hidden={!buttonsVisible} onClick={handleSave}>Save</Button>
                            <Button style={{ marginTop: "30px", marginLeft: "110px", backgroundColor: "#69A2B0" }} hidden={!buttonsVisible} onClick={handleToggleButtons}>Cancel</Button>
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
