/**
 * 复制文本
 * @param copyText 复制的文本内容
 */
export var copy = function copy(copyText) {
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', copyText);
  input.setAttribute('copycreate', 'yes');
  input.select();
  document.execCommand('Copy'); // 复制完后将上面创建的 input 从 dom 中移除

  var list = document.getElementsByTagName('input');
  var inputList = Array.prototype.slice.call(list);
  inputList.forEach(function (item) {
    if (item.getAttribute('copycreate')) document.body.removeChild(item);
  });
  alert('复制成功');
};