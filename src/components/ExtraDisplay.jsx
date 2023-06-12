import React, { useEffect, useState } from "react";
import { getPosts } from "./Api";
import ReactPaginate from "react-paginate";

const ExtraDisplay = ({ perPage, width }) => {
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
  console.log(`Loading data from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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

  console.log(currentItems);

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
      {currentItems.map((item) => (
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
              <div className="text-gray-900 font-bold text-xl mb-2 text-elipsis truncate">
                {item.title}
              </div>
              <p className="text-gray-700 text-base text-elipsis truncate">{item.content}</p>
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

export default ExtraDisplay;
