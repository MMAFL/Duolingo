import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Gems = () => {
  const [gems, setGems] = useState([]);

  const fetchGems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gems");
      setGems(response.data);
    } catch {
      console.error("Failed to fetch gems");
    }



    };
    
        useEffect(() => {
          fetchGems();
        }, []);

  console.log(gems);

  return (
    <div>
      <h1>Gems</h1>
      <ul>
        {gems.map((gem) => (
          <li key={gem.gem_id}>{gem.gem_balance}</li>
        ))}
      </ul>
      <button onClick={fetchGems}>Fetch Gems</button>
    </div>
  );
};

export default Gems;
