const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
if (isDarkTheme.matches) {
  switchtoDarkLight()
}

(function() {
  'use strict';
  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#colleiToast');
  var showToastButton = document.querySelector('#play-music');
  function checkIsPlay() {
    if (!collei.musics[0].paused) return '开始播放音乐，尽情享受吧！'
    else return '已暂停音乐。' 
  }
    showToastButton.addEventListener('click', function() {
        'use strict';
        var data = {
            message: checkIsPlay(),
            timeout: 3000
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    })
}());
(function() {
  'use strict';
  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#switchColorToast');
  var showToastButton = document.querySelector('#switch-color');
  function hintColor() {
    if (document.getElementById('layout-content').classList.contains('cm-dark-mode')) return '深色'
    else return '浅色'
  }
    showToastButton.addEventListener('click', function() {
        switchtoDarkLight()
        'use strict';
        var data = {
            message: '已切换至'+hintColor()+'模式。'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    })
}());
function switchtoDarkLight() {
    needswitch = document.getElementById('layout-content')
    if (needswitch.classList.contains('cm-dark-mode')) {
      needswitch.classList.remove('cm-dark-mode')
    } else {
      needswitch.classList.add('cm-dark-mode')
    }
  }
(function() {
    'use strict';
    var dialogButton = document.querySelector('#qqgroup');
    var dialog = document.querySelector('#dialog-qqgroup');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
  }());
(function() {
    'use strict';
    var dialogButton = document.querySelector('#about');
    var dialog = document.querySelector('#dialog-about');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
  }());