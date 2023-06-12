import React, { useEffect, useState } from "react";
import { getPosts } from "./Api";
import ReactPaginate from "react-paginate";

const BlogDisplay = ({ perPage, width }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [dataOffset, setDataOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts(1000, page);
        setData(posts);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const endOffset = dataOffset + 8;
    setCurrentData(data.slice(dataOffset, endOffset));
    setPageCount(Math.ceil(data.length / 9));
  }, [data, dataOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % data.length;
    setDataOffset(newOffset);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate.replace(/\//g, "-");
  };

  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        {currentData.map((item) => (
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
                <p className="text-gray-700 text-base text-elipsis truncate">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          className="flex space-x-3 text-xs"
          breakLabel="..."
          nextLabel={
            <span className="text-orange">Volgende pagina --&gt;</span>
          }
          onPageChange={handlePageClick}
          // onClick={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<-- previous"
          renderOnZeroPageCount={null}
          activeClassName={"active-page"}
        />
      </div>
    </div>
  );
};

export default BlogDisplay;
