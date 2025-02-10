import { Unit } from "@/types";
import axios from "axios";

export const getUnits = async () => {
  const response = await axios.get<Unit[]>("http://localhost:3000/api/unit");
  const data = response.data;

  return data;
};
