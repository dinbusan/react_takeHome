import React from 'react'
import Display from '../components/Display'
import PaginatedItems from '../components/PaginatedItems'
import ExtraDisplay from '../components/extraDisplay'

const Blog = () => {
  return (
    <div className="custom-grid-width grid grid-cols-12 gap-4 my-16">
      <div className="col-span-12">
        <ExtraDisplay width={"w-64"} perPage={8} />
      </div>
    </div>
  );
}

export default Blog