const { exec } = require('child_process')
const fs = require("fs")

const files = fs.readdirSync("blog/articles").filter(file => {
  const extension = file.slice(file.length - 3)
  return file !== "index.md" && extension === ".md"
}).sort((fileA, fileB) => fileB.localeCompare(fileA))

exec("echo '---' > blog/articles/index.md")
exec("echo home: true >> blog/articles/index.md")
exec("echo '---' >> blog/articles/index.md")

for (const file of files) {
  const createdAt = file.slice(0,10)
  const name = file.slice(11, file.length - 2).replaceAll("-", " ")
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  const link = `- ${createdAt}: [${capitalizedName}](/articles/${file})`
  exec(`echo "${link}" >> blog/articles/index.md`)
}
