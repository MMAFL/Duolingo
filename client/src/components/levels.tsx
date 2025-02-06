import "../styles/levels.css";
import axios from "axios";
import { useState, useEffect } from "react";

interface Level {
    level_id: number;
    level_name: string;
    level_description: string;
}

const Levels = () => {
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        const fetchLevels = async () => {
            const response = await axios.get<Level[]>("http://localhost:5000/api/levels");
            setLevels(response.data);
        };
        fetchLevels();
    }, []);

    return (
        <div>
            <div className="levels-container">
                {levels.map((level) => (
                    <div key={level.level_id} className="level-card">
                        <div className="level-name-container">
                            <div className="seperator"></div>
                            <abbr title={level.level_description}>
                                <h3 className="level-name">{level.level_name}</h3>
                            </abbr>
                            <div className="seperator"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Levels;