import React from 'react'

import BounceLoader from 'react-spinners/BounceLoader'

const Spinner = () => {
    return (
        <div className="text-center">

            <div className="flex justify-center align-center " style={{ height: '100vh', width: '100vw' }}>
                <BounceLoader
                    color="#3666d6"
                    size={100}
                />
            </div>


        </div>
  )
}

export default Spinner