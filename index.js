document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
  return false;
}

// Получаем модальное окно
var modal = document.getElementById("myModal");

// Показываем модальное окно при загрузке страницы
window.onload = function () {
  modal.style.display = "block";
};

// Функция для проверки пароля
function checkPassword() {
  var password = document.getElementById("password").value;
  // Проверяем пароль
  if (password === "Nikita") {
    // Если пароль верный, скрываем модальное окно
    modal.style.display = "none";
  } else {
    // Если пароль неверный, выводим сообщение об ошибке
    alert("Неверный пароль. Попробуйте еще раз.");
  }
}

// Получаем форму для пароля
var passwordForm = document.getElementById("passwordForm");

// Добавляем обработчик события для отправки формы
passwordForm.addEventListener("submit", function (event) {
  // Отменяем стандартное действие отправки формы
  event.preventDefault();
  // Проверяем пароль
  checkPassword();
});
