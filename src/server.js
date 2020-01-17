import 'dotenv/config';

import app from './app';

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(port, () => {
    console.log(`Server is runing on ${host}:${port}`);
});