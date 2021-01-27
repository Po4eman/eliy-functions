function shortcut(sc, f) {
    sc = sc.replace(/ /g, '').toLowerCase().split('+');
    document.addEventListener('keyup', function(e) {
      if (e.ctrlKey) {
        if (sc.includes('shift')) {
          if (e.shiftKey) {
            if (sc.includes(e.key.toLowerCase())) {
              f();
            }
          }
        } else {
          if (sc.includes(e.key)) {
            f();
          }
        }
      }
    });
  }
  
  function css(el, style, out = false) {
    let css = "";
    style = Object.entries(style);
    style.forEach(function(style) {
      css += style[0] + ':' + ((typeof style[1] == 'string') ? style[1] : (style[1] + 'px')) + ';';
    });
    if (out) {
      if (!document.querySelector("style#stylinCss")) {
        let html = document.createElement("style");
        html.setAttribute("id", "stylinCss");
        document.body.appendChild(html);
      }
      document.querySelector("style#stylinCss").innerText += (el + "{" + css + "}\n");
      return;
    }
    document.querySelector(el).style.cssText = css;
  }
  
  function dom(tag, data, inner = "") {
    let item = document.createElement(tag);
    for (let i of Object.keys(data)) {
      item.setAttribute(i, data[i]);
    }
    if (!Array.isArray(inner)) {
      inner = [inner];
    }
    for (let i = 0; i < inner.length; i++) {
      try {
        item.appendChild(inner[i]);
      } catch {
        item.innerHTML += inner[i];
      }
    }
    return item;
  }
  
  function copyFrom(el, outer = false) {
    document.write(outer ? document.querySelector(el).outerHTML : document.querySelector(el).innerHTML);
    document.currentScript.parentNode.removeChild(document.currentScript);
  }
  //TODO: DOESNT WORK...I've to create it again. I lost my latest file :((
  function inView(el, func) {
    el = document.querySelector(el).getBoundingClientRect();
    window.onscroll = function() {
      if (el.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        func();
      }
    }
  }
  
  Array.prototype.subMatrix = function(x = 0, y = 0, a = 0, b = 0) {
    if (x + a > this.length) {
      return 'Out Of Range by Rows';
    }
    var arr = [],
      cnt = 0;
    for (var i = x; i <= x + a - 1; i++) {
      if (y + b > this[i].length) {
        return 'Out Of Range by Columns';
      }
      arr.push([]);
      for (var j = y; j < y + b; j++) {
        arr[cnt].push(this[i][j]);
      }
      cnt++;
    }
    return arr;
  }
