import React, {useEffect, useState} from 'react'
import axios from 'axios'

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

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data periodically every 5 seconds
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);
  
console.log(data);
  return (
    <div>
      <h2>Display Component</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <strong>Title:</strong> {item.title}
            </div>
            <div>
              <strong>Created At:</strong> {item.created_at}
            </div>
            <div>
              <strong>Category Name:</strong> {item.category.name}
            </div>
            <div>
              <strong>Category Image URL:</strong> {item.category.img_url}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display