import React from 'react'
import Display from '../components/Display'
import PaginatedItems from '../components/PaginatedItems'

const Blog = () => {
  return (
    <div className="custom-grid-width grid grid-cols-12 gap-6 my-16">
      <Display />
      <PaginatedItems />
    </div>
  );
}

export default Blog