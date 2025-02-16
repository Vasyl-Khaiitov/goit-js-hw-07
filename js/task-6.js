// ? Потрібна порада по цьому скрипту звісно як буде можливості

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const inputValue = document.querySelector(".input[type='number']");
// const btnCreate = document.querySelector(".create button");
// const btnDestroy = document.querySelector(".destroy button");
// const newDiv = document.getElementById("boxes");

// btnCreate.addEventListener("click", handleCreateBoxes);
// btnDestroy.addEventListener("click", handleDestroyBoxes);

// function validateInputValue(value) {
//  return value >= 1 && value <= 100;
// }



// //Функція для рендеру на DOM
// function createBoxes(amount) {
  
  
//   let size = 30;
  
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement("div");
//     div.textContent = `Div ${i + 1}`;
//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;
//     div.style.backgroundColor = getRandomHexColor();
    
//     newDiv.append(div);
//     size += 10;
//   }
//   newDiv.innerHTML = "";
//   newDiv.appendChild(newDiv);
// }

// function destroyBoxes() {
//   newDiv.innerHTML = "";
// }

// function handleCreateBoxes() {
//   const amount = parseInt(inputValue.value)
//   if (validateInputValue(amount)) {
//     createBoxes(amount);
//     inputValue.value = "";
//   }
// }

// function handleDestroyBoxes() {
//   destroyBoxes();
// }