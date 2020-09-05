/**
 * The script assumes there is a folder next to the script file called Images containing images to be used as user avatars
 * Every image should have the user ID as it's name
 * Script makes use of an external request module
 * Script takes the API key as an argument
 * @example node StaffbaseAvatar.js API_KEY
 */
var fs = require("fs");
var request = require("request");
const not_uploaded = [];
let total_files = 0;
fs.readdir(__dirname + "/Images", { encoding: "utf-8" }, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  total_files = files.length;
  // statuses = [];
  for (let file of files) {
    // var bodyFormData = new FormData();
    request.put(
      {
        url: `https://backend.staffbase.com/api/users/${file.split(".")[0]}`,
        headers: {
          authorization: `Basic ${process.argv[2]}`,
        },
        formData: {
          avatar: fs.createReadStream(`${__dirname}/Images/${file}`),
        },
      },
      function (error, response, body) {
        if (error || response.statusCode !== 200)
          not_uploaded.push([file, JSON.parse(body).message]);
      }
    );
  }
});

// Report how many files have been uploaded and what files have not been uploaded.
process.on("exit", () => {
  console.log(
    "\nFinished.",
    `${total_files - not_uploaded.length} files succesfully uploaded`
  );
  if (not_uploaded.length) {
    console.log(`${not_uploaded.length} Files have not been uploaded:`);
    for (let [filename, err_message] of not_uploaded)
      console.log(`${filename}: ${err_message}`);
  }
});
