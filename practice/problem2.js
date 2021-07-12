// Getting the Extention Name 

const getExtentions = (filename) => filename.slice(filename.lastIndexOf('.'));

console.log(getExtentions('index.html'));