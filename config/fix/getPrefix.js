


module.exports = function(filename) {
  let [startStr, endStr] = filename.split('src/');
  if(!endStr) {
    return undefined
  }
  let endArr = endStr.split('/');
  let prefix = '';
  endArr.forEach((item) => {
    prefix = prefix + item[0].toLocaleLowerCase();
  })
  return `lh5_${prefix}_`
}