export default function () {

/* example of async read and write file with catching errors */
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const call = (promise) =>
  promise
    .then(r => r == null ? ({result: r}): r)
    .catch(error => ({error}));

const error = (result, msg) => ({
  error: result.error, message: msg
});

async function main() {
  const fileContent = await call(readFile("./file.txt", "utf-8"));
  if(fileContent.error) {
    return error(fileContent, "Error while reading the file");
  }

  const writeResult = await call(
  writeFile("./file-copy.txt", fileContent));

  if(writeResult.error) {
    return error(writeResult, "Error while writing the file");
  }

  return "file-copy.txt";
}

main()
  .then(r => {
    if(r.error) {
      return console.log(
      "An error occurred, recover here. Details:", r);
    }
    return console.log("Done, no error. Result:", r);
  })
  .catch(err => console.log("An error occurred", err));

}

