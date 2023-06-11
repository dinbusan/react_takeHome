import React, { useEffect, useState } from "react";
import { getPosts } from "./Api";

const Display = ({ perPage, width }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts(perPage, page);
        if (page === 1) {
          setData(posts);
        } else {
          setData((prevData) => [...prevData, ...posts]);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleAddMore = () => {
        setPage((prevPage) => prevPage + 1);

    // setPage((prevCount) => prevCount + perPage);
    // setItemOffset((prevOffset) => prevOffset + perPage);
  };
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const posts = await getPosts(perPage, page);
  //       setData(posts);
  //     } catch (error) {
  //       console.log("An error occurred:", error);
  //     }
  //   };

  //   fetchData();
  // }, [page]);


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
      {data.map((item, index) => (
        <div key={index} className={`mb-4 ${width}`}>
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleAddMore}
      >
        Add More
      </button>
    </div>
  );
};

export default Display;
