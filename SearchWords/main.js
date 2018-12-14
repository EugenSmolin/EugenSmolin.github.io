var checkedWord = 1;

function changeRadio(_this) {
  var thisVal = +_this.value;
  if (thisVal === 1) {
    checkedWord = 1;
    document.getElementById('btn-change-letter').style.display = 'block';
  } else {
    checkedWord = 2;
    document.getElementById('btn-change-letter').style.display = 'none';
  }
}

document.getElementById('btn-search-words').onclick = function () {

  var mainText = document.getElementById('main-text').value;

  if (mainText !== '') {

    if (checkedWord === 1) {
      // поиск русских букв
      var textArr = mainText.split(' ');

      for (var i = 0; i < textArr.length; i++) {
        var wordArr = textArr[i].split('');

        for (var j = 0; j < wordArr.length; j++) {
          if (/[А-Яа-я]/.test(wordArr[j])) {
            wordArr.splice([j], 1, '<span class="word-color-red">' + wordArr[j] + '</span>');
          } else if (wordArr[j] == 'і') {
            wordArr.splice([j], 1, '<span class="word-color-red">' + wordArr[j] + '</span>');
          } else {
            continue;
          }

        }
        textArr[i] = wordArr.join('');
      }
      var result = textArr.join(' ');
      document.querySelector('.result').innerHTML = result;
    } else {
      // поиск английских букв
      var textArr = mainText.split(' ');

      for (var i = 0; i < textArr.length; i++) {
        var wordArr = textArr[i].split('');

        for (var j = 0; j < wordArr.length; j++) {
          if (/[A-Za-z]/.test(wordArr[j])) {
            wordArr.splice([j], 1, '<span class="word-color-red">' + wordArr[j] + '</span>');
          } else {
            continue;
          }
        }
        textArr[i] = wordArr.join('');
      }
      var result = textArr.join(' ');
      document.querySelector('.result').innerHTML = result;

    }
  } else {
    alert('Введите в поле текст!');
  }

};

document.getElementById('btn-change-letter').onclick = function () {

  // let mainText = document.getElementById('main-text').value;
  let mainText = document.querySelector('.result').innerText;

  if (mainText !== '') {

    let textArr = mainText.split(' ');

    for (let i = 0; i < textArr.length; i++) {
      let wordArr = textArr[i].split('');

      // а е о р с у
      // a e o p c y - en
      // Sаmе tеxt sоmе pоw cоmе yеs іnіt.

      for (let j = 0; j < wordArr.length; j++) {
        switch (wordArr[j]) {
          case 'а': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'a' + '</span>');
            break;
          case 'е': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'e' + '</span>');
            break;
          case 'о': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'o' + '</span>');
            break;
          case 'р': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'p' + '</span>');
            break;
          case 'с': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'c' + '</span>');
            break;
          case 'у': // русская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'y' + '</span>');
            break;
          case 'і': // украинская
            wordArr.splice([j], 1, '<span class="word-color-green">' + 'i' + '</span>');
            break;
          default:
            break;
        }

      }
      textArr[i] = wordArr.join('');
    }
    var result = textArr.join(' ');
    document.querySelector('.result').innerHTML = result;
  } else {
    alert('Сначала найдите буквы.');
  }
};

document.getElementById('btn-clear').onclick = function () {
  document.querySelector('.clear-main-text').value = '';
  document.querySelector('.clear-result').innerHTML = '';
};

