import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import homeRoutes from './routes/homeRoutes.js';
import coursesRoutes from './routes/coursesRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import enrollRoutes from './routes/enrollRoutes.js';
// --- Basic Setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use('/', homeRoutes);
app.use('/',coursesRoutes);
app.use('/',servicesRoutes);
app.use('/',enrollRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
