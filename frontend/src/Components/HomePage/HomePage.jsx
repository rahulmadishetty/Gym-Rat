import React, { useState } from 'react'

import Workouts from './Workouts'


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("1")

    const daysWorkouts = [
        {
            name: "Day 1",
            id: "1",
            workouts: [
                {
                    title: "Squats",
                    reps: "6",
                    image: "https://img.freepik.com/premium-vector/women-doing-workout-with-squat-posture-woman-get-perfect-butt-legs-with-exercise_667085-357.jpg",
                    duration: "10 mins",
                    completed: "true",
                    target: "Legs"
                },
                {
                    title: "Push ups",
                    reps: "6",
                    image: "https://img.freepik.com/free-vector/woman-practicing-yoga-mat_1308-125021.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "15 mins",
                    completed: "false",
                    target: "Arms"
                },
                {
                    title: "Dead Lift",
                    reps: "10",
                    image: "https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "9 mins",
                    completed: "false",
                    target: "Chest"
                }
            ]
        },
        {
            name: "Day 2",
            id: "2",
            workouts: [
                {
                    title: "Squats",
                    reps: "6",
                    image: "https://img.freepik.com/premium-vector/women-doing-workout-with-squat-posture-woman-get-perfect-butt-legs-with-exercise_667085-357.jpg",
                    duration: "10 mins",
                    completed: "true",
                    target: "Legs"
                },
                {
                    title: "Push ups",
                    reps: "6",
                    image: "https://img.freepik.com/free-vector/woman-practicing-yoga-mat_1308-125021.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "15 mins",
                    completed: "false",
                    target: "Arms"
                },
                {
                    title: "Dead Lift",
                    reps: "10",
                    image: "https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "9 mins",
                    completed: "false",
                    target: "Chest"
                }
            ]
        },
        {
            name: "Day 3",
            id: "3",
            workouts: [
                {
                    title: "Squats",
                    reps: "6",
                    image: "https://img.freepik.com/premium-vector/women-doing-workout-with-squat-posture-woman-get-perfect-butt-legs-with-exercise_667085-357.jpg",
                    duration: "10 mins",
                    completed: "true",
                    target: "Legs"
                },
                {
                    title: "Push ups",
                    reps: "6",
                    image: "https://img.freepik.com/free-vector/woman-practicing-yoga-mat_1308-125021.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "15 mins",
                    completed: "false",
                    target: "Arms"
                },
                {
                    title: "Dead Lift",
                    reps: "10",
                    image: "https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "9 mins",
                    completed: "false",
                    target: "Chest"
                }
            ]
        },
        {
            name: "Day 4",
            id: "4",
            workouts: [
                {
                    title: "Squats",
                    reps: "6",
                    image: "https://img.freepik.com/premium-vector/women-doing-workout-with-squat-posture-woman-get-perfect-butt-legs-with-exercise_667085-357.jpg",
                    duration: "10 mins",
                    completed: "true",
                    target: "Legs"
                },
                {
                    title: "Push ups",
                    reps: "6",
                    image: "https://img.freepik.com/free-vector/woman-practicing-yoga-mat_1308-125021.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "15 mins",
                    completed: "false",
                    target: "Arms"
                },
                {
                    title: "Dead Lift",
                    reps: "10",
                    image: "https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "9 mins",
                    completed: "false",
                    target: "Chest"
                }
            ]
        },
        {
            name: "Day 5",
            id: "5",
            workouts: [
                {
                    title: "Squats",
                    reps: "6",
                    image: "https://img.freepik.com/premium-vector/women-doing-workout-with-squat-posture-woman-get-perfect-butt-legs-with-exercise_667085-357.jpg",
                    duration: "10 mins",
                    completed: "true",
                    target: "Legs"
                },
                {
                    title: "Push ups",
                    reps: "6",
                    image: "https://img.freepik.com/free-vector/woman-practicing-yoga-mat_1308-125021.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "15 mins",
                    completed: "false",
                    target: "Arms"
                },
                {
                    title: "Dead Lift",
                    reps: "10",
                    image: "https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?size=626&ext=jpg&ga=GA1.1.1945215744.1701560382&semt=ais",
                    duration: "9 mins",
                    completed: "false",
                    target: "Chest"
                }
            ]
        },
    ]

    return (
        <>
            <section className='home'>
                <article>
                    <h3 className='p-3 my-3 mx-3'>Hello <span className='color-primary fw-bold'>Ann</span>,
                        Are you ready to be a <span className='color-primary fw-bold'>Gym Rat</span>? We are here to motivate you.</h3>
                </article>
                <article>

                </article>
                {daysWorkouts.map((item) => {
                    return <Workouts item={item} activeTab={activeTab} setActiveTab={setActiveTab} />

                })}


            </section>
        </>
    )
}

export default HomePage