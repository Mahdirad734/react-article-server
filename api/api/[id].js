// api/articles/[id].js
import articlesData from '../../data/db.json'
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;
  const article = articlesData.articles.find(a => a.id === +id);
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  res.status(200).json(article);
}
