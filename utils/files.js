import fs from 'fs-extra';

const call = (promise) =>
  promise
    .then(r => r == null ? ({result: r}): r)
    .catch(error => ({ error }));

const error = (result, msg) => ({
  error: result.error,
  message: msg
});

/**
 * Read and write single file
 *
 */
export async function single_file (sourceFileName, distFileName) {
  const fileContent = await call(
  fs.readFile(sourceFileName, "utf-8"));
  if (fileContent.error) {
    return error(fileContent, "Error while reading the file");
  }

  const writeResult = await call(
    fs.writeFile(distFileName, fileContent)
  );

  if (writeResult.error) {
    return error(writeResult, "Error while writing the file");
  }

  return distFileName;
}

/*
single_file()
  .then(r => {
    if (r.error) {
      return console.log("An error occurred, recover here. Details:", r);
    return console.log("Done, no error. Result:", r);
    }
  })
  .catch(err => console.log("An error occurred", err));
  */
