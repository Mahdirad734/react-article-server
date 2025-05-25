import data from "../../../data/db.json"; 

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const article = data.articles.find((item) => item.id === parseInt(id));
    
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "مقاله پیدا نشد" });
    }
  } else {
    res.status(405).json({ message: "متد مجاز نیست" });
  }
}
