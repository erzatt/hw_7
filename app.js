// Получаем все кнопки показа ответа
const answerBtns = document.querySelectorAll(".answer-btn");

// Перебираем каждую кнопку и назначаем обработчик события
answerBtns.forEach((btn) => {
  btn.addEventListener("click", function() {
    const answer = this.nextElementSibling;

    // Используем toggle, чтобы скрыть/показать ответ
    answer.style.display = answer.style.display === "none" ? "block" : "none";
    
    // Изменяем текст кнопки с "Показать ответ" на "Скрыть ответ" и наоборот
    this.textContent = this.textContent === "Показать ответ" ? "Скрыть ответ" : "Показать ответ";
  });
});