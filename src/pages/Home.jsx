import React from 'react'
import Form from '../components/Form'
import Display from '../components/Display'
import PaginatedItems from '../components/PaginatedItems'

const Home = () => {
  return (
    <div className="flex flex-row mt-16 justify-center mx-40 mb-16">
      <div className="w-[451px] h-[659px] mr-3">
        <Form />
      </div>
      <div className='w-[642px] bg-white ml-3'>
        <Display />
        <PaginatedItems />
      </div>
    </div>
  );
}

export default Home