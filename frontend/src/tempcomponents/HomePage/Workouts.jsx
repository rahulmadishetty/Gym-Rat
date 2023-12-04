import React from 'react';

const Workouts = ({ item, activeTab, setActiveTab, setCurrentSelectedWorkout }) => {
    const isItemVisible = activeTab === item.day ? 'toggle show' : '';

    const handleOnTabClick = () => {
        setActiveTab(item.day);
    };

    const onHandleCardClick = (item, day) =>{

        setCurrentSelectedWorkout({...item, day})
    }

    return (
        <div>
            <div id="accordion">
                <div className="card cursor-pointer mb-2 " onClick={handleOnTabClick}>
                    <div className="card-header" id={`heading${item.id}`}>
                        <h5 className="mb-0 text-start">
                            <button
                                className="btn btn-link text-decoration-none color-black fw-bolder"
                                data-toggle="collapse"
                                data-target={`#collapse${item.id}`}
                                aria-expanded={activeTab === item.id}
                                aria-controls={`collapse${item.id}`}
                            >
                                {item.day}
                            </button>
                        </h5>
                    </div>
                    <div
                        id={`collapse${item.id}`}
                        className={`collapse ${isItemVisible} transitioning fade-in`}
                        aria-labelledby={`heading${item.id}`}
                        data-parent="#accordion"
                    >
                        <div className={`card-body fade ${isItemVisible}`}>
                            <div className="d-flex">
                                {item.workouts.map((workout) => {
                                    return (<div onClick={()=> onHandleCardClick(workout, item.day)} className={`card glassy-card ${workout.completed? "completed-workout" : ""}  cursor-pointer mb-3 mx-3`}>
                                        <div className="card-body workout">
                                            <h5 className="card-title fw-bold mb-3">{workout.title}</h5>
                                            <p className="card-text">
                                                <strong>Reps:</strong> {workout.reps} <br />
                                                <strong>Muscle Targeted:</strong> {workout.target} <br />
                                                <strong>Time:</strong> {workout.duration}
                                            </p>
                                            <img src={workout.image} height={200} width={200} />
                                        </div>
                                    </div>)
                                })}
                            </div>
                            {/* <button className="">Start Workout</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workouts;
