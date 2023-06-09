import React from 'react'
import Display from '../components/Display'
import PaginatedItems from '../components/PaginatedItems'

const Blog = () => {
  return (
    <div className="custom-grid-width grid grid-cols-12 gap-4 my-16">
      <div className="col-span-12">
        <Display width={"w-64"} perPage={8} />
      </div>
      <PaginatedItems />
    </div>
  );
}

export default Blog