import React, { useEffect, useState } from "react";
import { getPosts } from "./Api";
import ReactPaginate from "react-paginate";

const Display = ({ perPage, width }) => {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts(perPage, page);
        setData(posts);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [page]);

  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (event) => {
  const selectedPage = event.selected + 1;
    setPage(selectedPage);
        
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    const itemOffset = (page - 1) * perPage;
    const currentItems = data.slice(itemOffset, itemOffset + perPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts(perPage, page);
        setData(posts);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [page]);

  console.log(data);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate.replace(/\//g, "-");
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      {data.map((item) => (
        <div key={item.id} className={`mb-4 ${width}`}>
          <div className="custom-card-height shadow-lg bg-white flex flex-col justify-between leading-normal">
            <div
              className="bg-black bg-cover h-1/3 overflow-hidden flex"
              style={{ backgroundImage: `url('${item.img_url}')` }}
              title=""
            >
              <div className="flex text-xxs text-gray-100 italic mt-auto mx-auto pb-2 space-x-44">
                <p>{formatDate(item.created_at)}</p>
                <p>{item.category.name}</p>
              </div>
            </div>
            <div className="mb-8 p-4">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-base">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Display;
