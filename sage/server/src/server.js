import app from "./app.js";
import dbConnect from "./db/db.js";

const port = process.env.PORT || 8000;

dbConnect()
	.then(() => {
		app.on("error", (error) => {
			console.error(`Error in starting server: ${error.message}`);
			throw error;
		});

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => {
		console.log(`Error in connecting to database: ${error.message}`);
	});
