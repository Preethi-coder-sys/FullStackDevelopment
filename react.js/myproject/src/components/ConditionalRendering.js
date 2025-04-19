import React, { useEffect, useState } from 'react';

export default function ConditionalRendering() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((jsonRes) => {
          setData(jsonRes.results);
          setLoading(false); 
        })
        .catch((err) => console.log("error: " + err));
    }, 2000);

    return () => {
      clearTimeout(timer);  
      setData([]);           
    };
  }, []);

  return (
    <div>
      <h3>Fetching Data:</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((result, index) => (
          <p key={index}>
            {result.name.first} {result.name.last} - {result.email}
          </p>
        ))
      )}
    </div>
  );
}
