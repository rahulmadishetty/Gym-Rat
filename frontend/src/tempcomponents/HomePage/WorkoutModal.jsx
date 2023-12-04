import React, { useContext } from 'react'
import Modal from '../Modal/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { OnboardingContext } from '../../context/Onboarding';
import BaseRequest from '../../services/requests/Base';
import { BASE_URL } from '../../constants/routes';

const WorkoutModal = ({ isModalOpen, setIsModalOpen, currentSelectedWorkout, setCurrentSelectedWorkout, getAllWorkouts }) => {

  const { token } = useContext(OnboardingContext);

  const tokenNew = () => {
    return token || localStorage.getItem("token")
  }

  const userId = localStorage.getItem("userId");

  const handleOnComplete = async () => {
    const sendData = {
      "userId": userId,
      "exerciseId": currentSelectedWorkout?.exerciseId,
      "completionflag": true,
      "day": currentSelectedWorkout?.day
    }

    try {
      const response = await BaseRequest.postAuthenticated(`${BASE_URL}/workouts/update-user-workouts`, sendData, {
        headers: {
          'Authorization': `${tokenNew()}`,
          'Content-Type': 'application/json',
        }
      })

      getAllWorkouts()
      setIsModalOpen(false)

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  if (!currentSelectedWorkout) return null;

  const { duration, target, title, reps } = currentSelectedWorkout;
  return (
    <Modal isOpen={isModalOpen}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <FontAwesomeIcon onClick={() => {
          setIsModalOpen(false);
          setCurrentSelectedWorkout(null)
        }} className="cursor-pointer" icon={faCircleXmark} />
      </div>

      <p className="card-text">
        <strong>Reps:</strong> {reps} <br />
        <strong>Muscle Targeted:</strong> {target}<br />
        <strong>Time:</strong> {duration}
      </p>
      <iframe className="mb-3 mt-2" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      <button onClick={handleOnComplete} className="btn my-2 primary-btn">Completed</button>
    </Modal>
  )
}

export default WorkoutModal