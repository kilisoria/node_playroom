import fileSystem from "fs"

const data = "Sample text";

const writeStream = fileSystem.createWriteStream("output.txt");
writeStream.write(data, "UTF8");

writeStream.on("drain", () => {
	console.log("drain...");
});

writeStream.end()

writeStream.on("finish", () => {
	console.log("Finished writing");
});

writeStream.on("error", (error) => {
	console.log(error.stack);
});
