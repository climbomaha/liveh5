
export const copyText = (text, callback) => {
  const copy_elem = document.createElement('span')
  copy_elem.id = 'copy'
  copy_elem.innerText = text
  copy_elem.style.width = 0
  copy_elem.style.height = 0
  copy_elem.style.opacity = 0
  document.querySelector('body').appendChild(copy_elem)
  const range = document.createRange();
  range.selectNode(document.getElementById('copy'));
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges()
  document.querySelector('body').removeChild(copy_elem)
  callback && callback()
}