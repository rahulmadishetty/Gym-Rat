import React, { useContext, useEffect, useState } from 'react'

import Layout from '../tempcomponents/Layout/Layout'

import WorkoutModal from '../tempcomponents/HomePage/WorkoutModal'
import WorkoutSkeleton from '../tempcomponents/SkeletonLoading/WorkoutSkeleton'
import HomePage from "../tempcomponents/HomePage/HomePage"
import { OnboardingContext } from '../context/Onboarding'
import BaseRequest from '../services/requests/Base'
import { BASE_URL } from '../constants/routes'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelectedWorkout, setCurrentSelectedWorkout] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [allWorkouts, setAllWorkouts] = useState([])

  const id = localStorage.getItem("userId")

    const { token, userId } = useContext(OnboardingContext);


  const tokenNew = () => {
    return token || localStorage.getItem("token")
  }



const getAllWorkouts = async() =>{
    
    try {
        const {data} = await BaseRequest.postAuthenticated(`${BASE_URL}/workouts/generate-plan`, { userId: id || userId }, {
          headers: {
            'Authorization': `${tokenNew()}`,
            'Content-Type': 'application/json',
          },
        })

        setAllWorkouts(data.fiveDayPlan)
  
      } catch (err) {
        console.log(err)
      }

     
}

useEffect(()=>{

    getAllWorkouts()

}, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })


  useEffect(() => {
    if (currentSelectedWorkout) {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }, [currentSelectedWorkout])

  return (
    <div className='h-100'>
      <Layout>
      <div className='home'>
        <HomePage allWorkouts={allWorkouts} isLoading={isLoading} setCurrentSelectedWorkout={setCurrentSelectedWorkout} />
      </div>
      <WorkoutSkeleton isLoading={isLoading} />
      <WorkoutModal getAllWorkouts={getAllWorkouts} setCurrentSelectedWorkout={setCurrentSelectedWorkout} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentSelectedWorkout={currentSelectedWorkout} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,64L26.7,69.3C53.3,75,107,85,160,96C213.3,107,267,117,320,101.3C373.3,85,427,43,480,48C533.3,53,587,107,640,160C693.3,213,747,267,800,261.3C853.3,256,907,192,960,144C1013.3,96,1067,64,1120,85.3C1173.3,107,1227,181,1280,181.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </Layout> 
    </div>
  )
}

export default Home