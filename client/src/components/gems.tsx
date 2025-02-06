import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/gems.css";
// import { useSelector } from "react-redux";

// Define interface for Gem type
interface Gem {
  gem_id: number;
  gem_balance: number;
}

const Gems: React.FC = () => {
  const [gems, setGems] = useState<Gem[]>([]);

  const fetchGems = async (): Promise<void> => {
    try {
      const response = await axios.get<Gem[]>("http://localhost:5000/api/gems");
      setGems(response.data);
    } catch (error) {
      console.error("Failed to fetch gems", error);
    }
  };

  useEffect(() => {
    fetchGems();
  }, []);

  console.log(gems);

  return (
    <div>
      <div className="gems-container">
        <img className="gem-icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="gem" />
        {gems.slice(0, 1).map((gem) => (
          <p className="gem-balance" key={gem.gem_id}>{gem.gem_balance}</p>
        ))}
      </div>
    </div>
  );
};

export default Gems;