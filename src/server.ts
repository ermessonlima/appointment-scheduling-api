import express from "express";

import { managerRoutes } from "./routes/manager.routes";

const app = express();

app.use(express.json());

app.use("/manager", managerRoutes);

app.listen(3333, () => {
    console.log("Server started on port 3333!");
});
