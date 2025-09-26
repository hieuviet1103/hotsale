// Vercel API handler
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files
const distPath = path.join(__dirname, '..', 'dist', 'public');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  
  // Fallback to index.html for SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.status(404).json({ error: 'Build files not found. Please run npm run build first.' });
  });
}

// For local testing
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
