import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'

const WorkoutSkeleton = ({ isLoading }) => {

    if (!isLoading) return null;

    return (
        <div className='d-flex justify-content-center'>
            <div>
                <SkeletonTheme baseColor="#e9ecef" highlightColor="#fff">
                    <p>
                        <Skeleton height={20} width={900} className='mx-4 d-flex justify-content-center' count={1} />
                    </p>
                    <p>
                        <Skeleton height={200} width={900} className='mx-4 d-flex justify-content-center' count={1} />
                    </p>
                    <p>
                        <Skeleton height={200} width={900} className='mx-4 d-flex justify-content-center' count={1} />
                    </p>
                    <p>
                        <Skeleton height={200} width={900} className='mx-4 d-flex justify-content-center' count={1} />
                    </p>
                </SkeletonTheme>
            </div>

        </div>

    )
}

export default WorkoutSkeleton