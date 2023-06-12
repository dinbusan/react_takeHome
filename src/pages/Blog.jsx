import React from 'react'
import PaginatedItems from '../components/PaginatedItems'
import BlogDisplay from '../components/BlogDisplay';

const Blog = () => {
  return (
    <div className="custom-grid-width grid grid-cols-12 gap-4 my-16">
      <div className="col-span-12">
        <BlogDisplay width={"w-64"} perPage={8} />
      </div>
    </div>
  );
}

export default Blog