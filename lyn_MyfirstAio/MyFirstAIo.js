let fs=require('fs')


fs.readFile(process.argv[2], function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
  
  let buff=movieData.toString().split("\n");
  console.log(buff.length-1)
})

