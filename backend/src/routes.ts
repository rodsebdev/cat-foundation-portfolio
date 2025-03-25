import { Router } from 'express';
import cats from './data/cats.json';

const router = Router();

router.get('/cats', (req, res) => {
  res.json(cats);
});

router.get('/cats/:id', (req, res) => {
  const cat = cats.find(c => c.id === req.params.id);
  cat ? res.json(cat) : res.status(404).json({ error: 'Cat not found' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submission:", { name, email, message });
  res.json({ success: true, message: "Form submitted successfully!" });
});

export default router;