import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.headers.common["token"] = "pj11daaQRz7zUIH56B9Z";

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1"
        );
        setData(response.data.data);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const formatDate = (dateString) => {
    const options = {day: "numeric", month: "numeric", year: "numeric"};
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate.replace(/\//g, "-")
  }
  return (
    <div className="grid grid-cols-2">
      {data.map((item) => (
        <div key={item.id} className="mx-auto mb-4">
          <div className="custom-card-dimensions shadow-lg bg-white rounded-b flex flex-col justify-between leading-normal">
            <div
              className="h-48 bg-black bg-cover rounded-t overflow-hidden flex"
              style={{ backgroundImage: `url('${item.category.img_url}')` }}
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

              {/* <div>
                  <strong>Title:</strong> {item.title}
                </div> */}
              {/* <div>
                  <strong>Created At:</strong> {item.created_at}
                </div> */}
              {/* <div>
                  <strong>Category Name:</strong> {item.category.name}
                </div> */}
              {/* <div>
                <strong>Category Image URL:</strong> {item.category.img_url}
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
