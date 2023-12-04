import React, { useContext, useState } from 'react'

import Workouts from './Workouts'
import { OnboardingContext } from '../../context/Onboarding';

const HomePage = ({ setCurrentSelectedWorkout, isLoading, allWorkouts }) => {
    const [activeTab, setActiveTab] = useState("Day 1")

    const { userName } = useContext(OnboardingContext);

    const name = localStorage.getItem("userName")

    if (isLoading) return null;

    return (
        <>
            <section className='home'>
                <article>
                    <h3 className='p-3 my-3 mx-3'>Hello <span className='color-primary fw-bold'>{userName || name}</span>,
                        these workouts are personalized, just for you! </h3>
                </article>
                <article>
                </article>
                {allWorkouts.map((item) => {
                    return <Workouts setCurrentSelectedWorkout={setCurrentSelectedWorkout} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />

                })}
            </section>
        </>
    )
}

export default HomePage;