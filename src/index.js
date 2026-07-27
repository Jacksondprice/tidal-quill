const express = require('express');
const enrollments = require('./routes/enrollments');

const app = express();
app.use(express.json());
app.use('/api/enrollments', enrollments);
app.get('/health', (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`listening on ${port}`));
