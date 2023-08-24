// let five, six, seven, eight, nine, ten, result;
// let hb = document.querySelectorAll(".hb__number");
// let weight = document.querySelectorAll(".weight");

// let result__value = document.querySelector(".result__value");

// hb.forEach((hb__item) => {
//   hb__item.addEventListener("click", function () {
//     hb.forEach((innerItem) => {
//       innerItem.classList.remove("active");
//     });

//     hb__item.classList.add("active");

//     if (hb__item.getAttribute("value") === "5") {
//       result = "15";
//     }
//   });
// });

// weight.forEach((weight__item) => {
//   weight__item.addEventListener("click", function () {
//     weight.forEach((innerItem) => {
//       innerItem.classList.remove("active");
//     });

//     weight__item.classList.add("active");
//   });
// });

// switch (five) {
//   case 40:
//     result = 15;
//     break;
//   case 45:
//     result = 16;
//     break;
//   case 50:
//     result = 17;
//     break;
//   case 55:
//     result = 18;
//     break;
//   case 60:
//     result = 19;
//     break;
//   case 65:
//     result = 21;
//     break;
//   case 70:
//     result = 22;
//     break;
//   case 75:
//     result = 23;
//     break;
//   case 80:
//     result = 24;
//     break;
//   case 85:
//     result = 25;
//     break;
//   case 90:
//     result = 27;
//     break;
//   default:
//     result = 0;
// }

// switch (six) {
//   case 40:
//     result = 14;
//     break;
//   case 45:
//     result = 15;
//     break;
//   case 50:
//     result = 16;
//     break;
//   case 55:
//     result = 17;
//     break;
//   case 60:
//     result = 18;
//     break;
//   case 65:
//     result = 19;
//     break;
//   case 70:
//     result = 20;
//     break;
//   case 75:
//     result = 21;
//     break;
//   case 80:
//     result = 22;
//     break;
//   case 85:
//     result = 23;
//     break;
//   case 90:
//     result = 24;
//     break;
//   default:
//     result = 0;
// }

// switch (seven) {
//   case 40:
//     result = 13;
//     break;
//   case 45:
//     result = 14;
//     break;
//   case 50:
//     result = 15;
//     break;
//   case 55:
//     result = 16;
//     break;
//   case 60:
//     result = 17;
//     break;
//   case 65:
//     result = 17;
//     break;
//   case 70:
//     result = 18;
//     break;
//   case 75:
//     result = 19;
//     break;
//   case 80:
//     result = 20;
//     break;
//   case 85:
//     result = 21;
//     break;
//   case 90:
//     result = 22;
//     break;
//   default:
//     result = 0;
// }

// switch (eight) {
//   case 40:
//     result = 12;
//     break;
//   case 45:
//     result = 13;
//     break;
//   case 50:
//     result = 13;
//     break;
//   case 55:
//     result = 14;
//     break;
//   case 60:
//     result = 15;
//     break;
//   case 65:
//     result = 16;
//     break;
//   case 70:
//     result = 17;
//     break;
//   case 75:
//     result = 18;
//     break;
//   case 80:
//     result = 18;
//     break;
//   case 85:
//     result = 19;
//     break;
//   case 90:
//     result = 20;
//     break;
//   default:
//     result = 0;
// }

// switch (nine) {
//   case 40:
//     result = 11;
//     break;
//   case 45:
//     result = 11;
//     break;
//   case 50:
//     result = 12;
//     break;
//   case 55:
//     result = 13;
//     break;
//   case 60:
//     result = 14;
//     break;
//   case 65:
//     result = 14;
//     break;
//   case 70:
//     result = 15;
//     break;
//   case 75:
//     result = 16;
//     break;
//   case 80:
//     result = 17;
//     break;
//   case 85:
//     result = 17;
//     break;
//   case 90:
//     result = 18;
//     break;
//   default:
//     result = 0;
// }

// switch (ten) {
//   case 40:
//     result = 10;
//     break;
//   case 45:
//     result = 10;
//     break;
//   case 50:
//     result = 11;
//     break;
//   case 55:
//     result = 12;
//     break;
//   case 60:
//     result = 12;
//     break;
//   case 65:
//     result = 13;
//     break;
//   case 70:
//     result = 13;
//     break;
//   case 75:
//     result = 14;
//     break;
//   case 80:
//     result = 15;
//     break;
//   case 85:
//     result = 15;
//     break;
//   case 90:
//     result = 16;
//     break;
//   default:
//     result = 0;
// }

const resultMap = {
  5: {
    40: 15,
    45: 16,
    50: 17,
    55: 18,
    60: 19,
    65: 21,
    70: 22,
    75: 23,
    80: 24,
    85: 25,
    90: 27,
  },
  6: {
    40: 14,
    45: 15,
    50: 16,
    55: 17,
    60: 18,
    65: 19,
    70: 20,
    75: 21,
    80: 22,
    85: 23,
    90: 24,
  },
  7: {
    40: 13,
    45: 14,
    50: 15,
    55: 16,
    60: 17,
    65: 17,
    70: 18,
    75: 19,
    80: 20,
    85: 21,
    90: 22,
  },
  8: {
    40: 12,
    45: 13,
    50: 13,
    55: 14,
    60: 15,
    65: 16,
    70: 17,
    75: 18,
    80: 18,
    85: 19,
    90: 20,
  },
  9: {
    40: 11,
    45: 11,
    50: 12,
    55: 13,
    60: 14,
    65: 14,
    70: 15,
    75: 16,
    80: 17,
    85: 17,
    90: 18,
  },
  10: {
    40: 10,
    45: 10,
    50: 11,
    55: 12,
    60: 12,
    65: 13,
    70: 13,
    75: 14,
    80: 15,
    85: 15,
    90: 16,
  },
};

let hb = document.querySelectorAll(".hb__number");
let weight = document.querySelectorAll(".weight");
let result__value = document.querySelector(".result__value");
result__value.innerHTML = 0;

let selectedHb = null;
let selectedWeight = null;

hb.forEach((hb__item) => {
  hb__item.addEventListener("click", function () {
    // Reset classes and set active
    hb.forEach((innerItem) => innerItem.classList.remove("active"));
    hb__item.classList.add("active");

    selectedHb = hb__item.getAttribute("value");
    calculateResult();
  });
});

weight.forEach((weight__item) => {
  weight__item.addEventListener("click", function () {
    // Reset classes and set active
    weight.forEach((innerItem) => innerItem.classList.remove("active"));
    weight__item.classList.add("active");

    selectedWeight = parseInt(weight__item.getAttribute("value"), 10);
    calculateResult();
  });
});

function calculateResult() {
  if (selectedHb && selectedWeight) {
    const hbValues = resultMap[selectedHb];
    if (hbValues) {
      const finalResult = hbValues[selectedWeight];
      if (finalResult !== undefined) {
        result__value.textContent = finalResult;
      } else {
        result__value.textContent = "0";
      }
    } else {
      result__value.textContent = "0";
    }
  }
}
