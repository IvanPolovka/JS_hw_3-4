function pageGenerate() {
  var body = document.body;
  var div = document.createElement('div');
  var h3 = document.createElement('h3');

  div.className = "Header";
  h3.innerHTML = 'Тест по програмированию';

  body.appendChild(h3);
  h3.style.textAlign = 'center';

  body.appendChild(div);
  div.style.marginLeft = '20vw';

  // вставляю питання
  for (var i = 0; i < 3; i++) {
    question = document.createElement('h3');
    question.innerHTML = (i + 1) + ". Вопрос №" +(i + 1);
    div.appendChild(question);

    // вставляю checkbox
    for (var j = 0; j < 3; j++) {
      input = document.createElement('input');
      input.type = 'checkbox';
      input.id = "chBox" + (i + 1) + ( j + 1);
      input.style.marginLeft = '2vw';
      input.border = '1px solid #000';
      div.appendChild(input);

      label = document.createElement('label');
      label.htmlFor = input.id;
      label.innerHTML = "Вариант ответа №" +(j + 1);

      div.appendChild(label);
      var br = document.createElement('br');
      div.appendChild(br);
    }
  }
  // кнопка
  var div2 = document.createElement('div');
  document.body.appendChild(div2);
  var button = document.createElement('button');
  button.style.display = 'block';
  button.style.margin = '50px auto';
  button.style.height = '40px';
  button.style.width = '250px';
  button.style.fontSize = '15px';
  button.style.backgroundColor = 'lightblue';
  button.style.border = '2px solid #000';
  button.style.borderRadius = '3px';
  button.innerHTML = 'Проверить мои результаты';
  div2.appendChild(button);

}
pageGenerate();
