function expandTabWomen() {
    var tab = document.getElementById('wtype');
    var currentDisplay = getComputedStyle(tab).display;
  
    if (currentDisplay === 'none') {
      tab.style.display = 'flex';

    } else {
      tab.style.display = 'none';
    }

  }

function expandTabMen() {
    var tab = document.getElementById('mtype');
    var currentDisplay = getComputedStyle(tab).display;
  
    if (currentDisplay === 'none') {
      tab.style.display = 'flex';

    } else {
      tab.style.display = 'none';
    }

}

function expandTabKids() {
    var tab = document.getElementById('ktype');
    var currentDisplay = getComputedStyle(tab).display;
  
    if (currentDisplay === 'none') {
      tab.style.display = 'flex';

    } else {
      tab.style.display = 'none';
    }

}

function expandTabBrands() {
    var tab = document.getElementById('btype');
    var currentDisplay = getComputedStyle(tab).display;
  
    if (currentDisplay === 'none') {
      tab.style.display = 'flex';

    } else {
      tab.style.display = 'none';
    }

}