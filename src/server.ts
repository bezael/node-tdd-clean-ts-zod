import express from 'express';
import { routes } from './app/routes/routes';

const PORT = 3000 as const;

const app = express();
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  routes(app);
});
