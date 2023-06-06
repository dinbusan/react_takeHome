import React from 'react'
import Form from '../components/Form'
import Display from '../components/Display'
import PaginatedItems from '../components/PaginatedItems'

const Home = () => {
  return (
    <div className='custom-grid-width grid grid-cols-12 gap-6 my-16'>
      {/* <div className=" mt-16 justify-center mx-40 mb-16"> */}
        <div className="col-span-5 mr-3">
          <Form />
        </div>
        <div className="bg-white col-span-7">
          <Display />
          <PaginatedItems />
        </div>
      </div>
    // </div>
  );
}

export default Home