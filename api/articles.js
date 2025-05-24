import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  
  const file = join(process.cwd(), "data", "db.json");
  const db = JSON.parse(readFileSync(file, "utf8"));

  res.status(200).json(db.articles);
}
