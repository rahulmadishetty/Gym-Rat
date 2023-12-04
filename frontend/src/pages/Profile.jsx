import React, { useState, useEffect } from 'react'

import Header from '../components/Layout/Header'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import BaseRequest from "../services/requests/Base"

const Profile = () => {

    const [userData, setUserData] = useState({
        fName: '',
        dName:"",
        email: '',
        age: '',
        goal: '',
        bodyType: '',
    });

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await BaseRequest.getAuthenticated(`http://localhost:3000/profile/${userId}`)
                
                const user = response.data.userProfile;
                
                setUserData({
                    fName: user.fName,
                    email: user.email,
                    age: user.age,
                    goal: user.goal,
                    bodyType: user.bodyType,
                    dName:user.dName
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // UpdateProfileHandler = (e) => {
    //     e.preventDefault();
    //     //create object of form data
    //     const formData = new FormData();

    //     //update-profile
    //     axios.post("http://localhost:3000/profile/create", formData, {
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     }).then(res => {
    //         console.log(res);
    //     })
    //         .catch(err => console.log(err))
    // }

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
                        <h1>User Profile</h1>
                        <Form className="form">
                            <p>Welcome</p>
                            <Form.Group controlId="formCategory1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" defaultValue={userData.fName} disabled />

                            </Form.Group>
                            <Form.Group controlId="formCategory1">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control type="text" defaultValue={userData.dName} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" defaultValue={userData.age} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Goal</Form.Label>
                                <Form.Control type="text" defaultValue={userData.goal} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Body Type</Form.Label>
                                <Form.Control type="text" defaultValue={userData.bodyType} disabled />

                            </Form.Group>

                            <br></br>
                            <Button variant="primary">Update Profile</Button>
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
