(function() {
    'use strict';
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#comingsoonToast');
    var showToastButton = document.getElementsByClassName('needcomingsoon');
    for (var i = 0;i < showToastButton.length; i++){
      showToastButton[i].addEventListener('click', function() {
          'use strict';
          var data = {
              message: '网页正在维护中，敬请期待...',
              timeout: 1500
          };
          snackbarContainer.MaterialSnackbar.showSnackbar(data);
      })
    }
  }());