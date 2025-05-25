// api/articles/num.js
import articlesData from '../data/db.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(articlesData.articles);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
