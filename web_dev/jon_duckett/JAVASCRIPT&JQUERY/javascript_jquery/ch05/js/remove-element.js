var removeEl = document.getElementsByTagName('li')[1];          // select the element you wnat to remove
var containerEl = document.getElementsByTagName('ul')[0];      // select the parentNode
containerEl.removeChild(removeEl);                            // remove the element
