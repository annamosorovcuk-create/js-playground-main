document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  // Задача 1.
  const btn = document.querySelector('[data-js="t1-btn"]'); // Это кнопка <button class="btn" data-js="t1-btn" type="button">Нажми меня</button>. 
  const hexOutput = document.querySelector('[data-js="t1-hex"]'); // Это <output class="mono pill" data-js="t1-hex">#??????</output>.

  btn.addEventListener('click', () => {

    // Случайный цвет.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Преобразует в HEX
    const hex = '#' + [r, g, b] // массив из трех чисел.
    .map(x => x.toString(16).padStart(2, '0') ) // преобразует каждый элемент.  переводит число в 16-ричную систему (HEX).
    .join('') //объединяет массив в одну строку.
    .toUpperCase(); // делает буквы заглавными

    // Установка текста и цвета.
    btn.style.backgroundColor = hex;
    hexOutput.textContent = hex;

  })

  // Задача 2.
  const input2 = document.querySelector('[data-js="t2-input"]');
  const count2 = document.querySelector('[data-js="t2-count"]');

  input2.addEventListener('input', () => {
    count2.textContent = input2.value.length;
  });

  // Задача 3.
  const input3 = document.querySelector('[data-js="t3-input"]');
  const button3 = document.querySelector('[data-js="t3-add"]');
  const list3 = document.querySelector('[data-js="t3-list"]');

  button3.addEventListener('click', () => {
  const text = input3.value.trim(); // Убирает пробелы с концов
  if (!text) return; // Если пусто - выход

  const li = document.createElement('li');
  li.textContent = text;
  list3.appendChild(li);
  input3.value = '';

  });

  // Задача 4

  const minusBtn = document.querySelector('[data-js="t4-minus"]');
  const plusBtn = document.querySelector('[data-js="t4-plus"]');
  const resetBtn = document.querySelector('[data-js="t4-reset"]');
  const output4 = document.querySelector('[data-js="t4-out"]');

  let count = 0; // Переменная счётчик

  minusBtn.addEventListener('click', () => output4.textContent = --count);
  plusBtn.addEventListener('click', () => output4.textContent = ++count);
  resetBtn.addEventListener('click', () => output4.textContent = count = 0);


  // Задача 5
  const openBtn = document.querySelector('[data-js="t5-open"]');
  const modal = document.querySelector('[data-js="t5-modal"]');
  const closeBtn = document.querySelector('[data-js="t5-close"]');
  const backdrop = document.querySelector('[data-js="t5-backdrop"]');

  // Открыть
  openBtn.addEventListener('click', () => {
     modal.hidden = false;
});

// Закрыть (три способа)
   closeBtn.addEventListener('click', () => {
     modal.hidden = true;
});

  backdrop.addEventListener('click', () => {
     modal.hidden = true;
});

  document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape'&&!modal.hidden) {
      modal.hidden = true;
     }
  });

  // Задача 6

  const tabsContainer = document.querySelector('[data-js="t6-tabs"]');
  const tabs = tabsContainer.querySelectorAll('.tab');
  const panes = tabsContainer.querySelectorAll('.pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab'); //Получает имя вкладки

      // Убирает активные классы у всех вкладок и панелей
      tabs.forEach(t => t.classList.remove('is-active'));
      panes.forEach(p => p.classList.remove('is-active'));

       // Добавляет активные классы текущей вкладке и соответствующей панели
       tab.classList.add('is-active');
       const activePane = tabsContainer.querySelector(`[data-pane="${tabName}"]`);
       activePane.classList.add('is-active')
    });
  });

  // Задача 7

  const input7 = document.querySelector('[data-js="t7-input"]');
  const button7 = document.querySelector('[data-js="t7-run"]');
  const output7 = document.querySelector('[data-js="t7-out"]');

  button7.addEventListener('click', () => {
    const text = input7.value; // Получает текст из поля ввода
    output7.textContent = text ? text.split('').reverse().join('') : '-'; //Если строка пустая, показывает прочерк
  });

  //Задача 8

  const inputA = document.querySelector('[data-js="t8-a"]');
  const inputB = document.querySelector('[data-js="t8-b"]');
  const output8 = document.querySelector('[data-js="t8-out"]');

  document.querySelector('[data-js="t8-add"]').addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const result = a + b;
    output8.textContent = isNaN(result) ? 'NaN' : result;  // Если число невалидное, показывает 'NaN'
 });
  document.querySelector('[data-js="t8-mul"]').addEventListener('click', () => {
      const a = parseFloat(inputA.value);
      const b = parseFloat(inputB.value);
      const result = a * b;
      output8.textContent = isNaN(result) ? 'NaN' : result;
  });

  // Задание 9

  const toggleBtn = document.querySelector('[data-js="t9-toggle"]');
  const textBlock = document.querySelector('[data-js="t9-text"]');

  toggleBtn.addEventListener('click', () => {
    textBlock.hidden = !textBlock.hidden; // Инвертирует значение hidden
    toggleBtn.textContent = textBlock.hidden ? 'Показать' : 'Скрыть';
  });

  // Задание 10

  const range = document.querySelector('[data-js="t10-range"]');
  const output10 = document.querySelector('[data-js="t10-out"]');
  const box = document.querySelector('[data-js="t10-box"]');

  range.addEventListener('input', () => {
    const size = range.value;
    output10.textContent = size + 'px';
    box.style.width = size + 'px';
    box.style.height = size + 'px';
  });
  // Устанавливает начальное значение
  output10.textContent = range.value + 'px';
  box.style.width = range.value  + 'px';
  box.style.height = range.value  + 'px';

  //Задание 11
  const sec = document.querySelector('[data-js="t11-seconds"]');
  const start = document.querySelector('[data-js="t11-start"]');
  const stop = document.querySelector('[data-js="t11-stop"]');
  const out = document.querySelector('[data-js="t11-out"]');

  let timer;

  start.onclick = () => {
    clearInterval(timer);
    let val = +sec.value;//+sec.value быстрый способ преобразовать в число
    if (val <= 0) return out.textContent = '—';
  
  out.textContent = val;
  timer = setInterval(() => out.textContent = --val || clearInterval(timer), 1000); // когда val станет 0, выполнится clearInterval.
  };

  stop.onclick = () => clearInterval(timer); //onclick вместо addEventListener.

  //Задание 12
  const btn12 = document.querySelector('[data-js="t12-plus"]');
  const label = document.querySelector('[data-js="t12-label"]');
  const bar = document.querySelector('[data-js="t12-bar"]');

  let progress = 0;

  btn12.onclick = () => {
    if (progress < 100) {
      progress += 10;
      bar.style.width = progress + '%';
      label.textContent = progress + '%';
    }
  };

  //задание 13
  const input13 = document.querySelector('[data-js="t13-input"]');
  const out13 = document.querySelector('[data-js="t13-out"]');

  document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault(); //e.preventDefault() - отменяет действие браузера (Ctrl+K  открывает поиск)
    input13.value = ''; 
    out13.textContent = 'Очищено';
  } else if (e.key === 'Escape') {
    input13.blur(); //input13.blur() - убирает фокус с элемента.
    out13.textContent = 'Фокус снят';
  }
});

input13.addEventListener('keydown', (e) => {
  out13.textContent = `Нажата: ${e.key}`;
});

  //Задание 14
  const btn14 = document.querySelector('[data-js="t14-next"]');
  const out14 = document.querySelector('[data-js="t14-out"]');

const quotes = [
  "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
  "Будь собой, остальные роли уже заняты.",
  "Путь в тысячу миль начинается с первого шага."
];

btn14.onclick = () => {
  out14.textContent = quotes[Math.floor(Math.random() * quotes.length)];
};

//Задание 15
  const item = document.querySelector('[data-js="t15-item"]');
  const coords = document.querySelector('[data-js="t15-coords"]');

  let drag = false;
  let shiftX, shiftY;

  item.onmousedown = (e) => {
    shiftX = e.clientX - item.offsetLeft;
    shiftY = e.clientY - item.offsetTop;
    drag = true
  };

  document.onmousemove = (e) => {
  if (!drag) return;
  
  item.style.left = (e.clientX - shiftX) + 'px';
  item.style.top = (e.clientY - shiftY) + 'px';
  coords.textContent = `x: ${e.clientX - shiftX}, y: ${e.clientY - shiftY}`;
};

document.onmouseup = () => drag = false;

//Задание 16
  const box16 = document.querySelector('[data-js="t16-box"]');

  document.querySelector('[data-js="t16-animate"]').onclick = () => {
    box16.classList.add('is-bouncing');
    box16.onanimationend = () => box16.classList.remove('is-bouncing');
  };
});
