import React from 'react'
import Modal from '../Modal/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const WorkoutModal = ({ isModalOpen, setIsModalOpen, currentSelectedWorkout }) => {

  if(!currentSelectedWorkout) return null;

  const { duration, target, title, reps } = currentSelectedWorkout;
  return (
    <Modal isOpen={isModalOpen}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <FontAwesomeIcon onClick={() => { setIsModalOpen(false) }} className="cursor-pointer" icon={faCircleXmark} />
      </div>

      <p className="card-text">
        <strong>Reps:</strong> {reps} <br />
        <strong>Muscle Targeted:</strong> {target}<br />
        <strong>Time:</strong> {duration}
      </p>
      <iframe className="mb-3 mt-2" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      <button className="btn my-2 primary-btn">Completed</button>
    </Modal>
  )
}

export default WorkoutModal