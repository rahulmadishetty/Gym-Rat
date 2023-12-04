import React, { useEffect } from 'react';

import { Rings } from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';

import { HOME } from '../../constants/routes';

const LoadingPage = () => {
    const navigate = useNavigate()


    useEffect(() => {
        setTimeout(() => {
            navigate(HOME.INDEX)
        }, 3000)
    }, [])

    return (
        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
            <div>
                <Rings
                    height="300"
                    width="300"
                    color="#69A2B0"
                    radius="9"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                />
            </div>

        </div>
    )
}

export default LoadingPage