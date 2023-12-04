import React, { useState, useEffect } from 'react'

import Header from '../components/Layout/Header'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const Profile = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        age: '',
        goal: '',
        bodytype: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/profile/2'); // Replace with your backend endpoint
                // Assuming the response.data is an array of users and you want to display the first user
                const user = response.data.userProfile;
                console.log(user);
                setUserData({
                    name: user.name,
                    email: user.email,
                    age: user.age,
                    goal: user.goal,
                    bodytype: user.bodyType,
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
                                <Form.Label>Diaplay Name</Form.Label>
                                <Form.Control type="text" defaultValue={userData.name} disabled />

                            </Form.Group>
                            <Form.Group controlId="formCategory2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue={userData.email} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" defaultValue={userData.age} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Goal</Form.Label>
                                <Form.Control type="text" defaultValue={userData.goal} disabled />

                            </Form.Group>

                            <Form.Group controlId="formCategory2">
                                <Form.Label>Body Type</Form.Label>
                                <Form.Control type="text" defaultValue={userData.bodytype} disabled />

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
