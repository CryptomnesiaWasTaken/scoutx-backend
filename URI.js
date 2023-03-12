const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "https://scoutx.onrender.com"
	: ["https://scoutx.onrender.com", "https://scoutx.onrender.com"];

module.exports = { clientURL };
