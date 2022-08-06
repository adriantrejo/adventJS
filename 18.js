function fixFiles(files) {
    let fixedFiles = [files[0]];
    for(let i = 1; i < files.length; i++) {
      const filesSlice = files.slice(0, i)
      if (filesSlice.includes(files[i])) {
         fixedFiles.push(files[i] + '(' + filesSlice.filter(x => x==files[i]).length
         + ')');
      }
      else{
         fixedFiles.push(files[i]);
      }
  }
  return fixedFiles
}

  const files = ['photo', 'postcard', 'photo', 'photo', 'video']
  fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
  
  const files2 = ['file', 'file', 'file', 'game', 'game']
  fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
  
  // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']