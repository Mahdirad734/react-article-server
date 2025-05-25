import data from '../../../data/db.json'; // اگر پوشه data هم‌سطح api باشه

export default function handler(req, res) {
  const { id } = req.query;

  const article = data.articles.find(item => item.id === parseInt(id));

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: "مقاله پیدا نشد" });
  }
}
