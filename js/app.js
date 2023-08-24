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

const resultMap2 = {
  5: {
    40: 11,
    45: 11,
    50: 12,
    55: 13,
    60: 14,
    65: 14,
    70: 15,
    75: 17,
    80: 17,
    85: 17,
    90: 17,
  },
  6: {
    40: 10,
    45: 10,
    50: 11,
    55: 12,
    60: 12,
    65: 13,
    70: 13,
    75: 24,
    80: 15,
    85: 15,
    90: 15,
  },
  7: {
    40: 9,
    45: 9,
    50: 10,
    55: 10,
    60: 11,
    65: 11,
    70: 12,
    75: 12,
    80: 13,
    85: 13,
    90: 13,
  },
  8: {
    40: 8,
    45: 8,
    50: 9,
    55: 9,
    60: 9,
    65: 10,
    70: 10,
    75: 10,
    80: 11,
    85: 11,
    90: 11,
  },
  9: {
    40: 7,
    45: 7,
    50: 7,
    55: 8,
    60: 8,
    65: 8,
    70: 8,
    75: 9,
    80: 9,
    85: 9,
    90: 9,
  },
  10: {
    40: 6,
    45: 6,
    50: 6,
    55: 6,
    60: 7,
    65: 7,
    70: 7,
    75: 7,
    80: 7,
    85: 7,
    90: 7,
  },
};

let hb = document.querySelectorAll(".hb__number");
let weight = document.querySelectorAll(".weight");

let result__value = document.querySelector(".result__value");
result__value.innerHTML = 0;

let result__value2 = document.querySelector(".result__value2");
result__value2.innerHTML = 0;

let selectedHb = null;
let selectedWeight = null;

hb.forEach((hb__item) => {
  hb__item.addEventListener("click", function () {
    // Reset classes and set active
    hb.forEach((innerItem) => innerItem.classList.remove("active"));
    hb__item.classList.add("active");

    selectedHb = hb__item.getAttribute("value");
    calculateResult();
    calculateResult2();
  });
});

weight.forEach((weight__item) => {
  weight__item.addEventListener("click", function () {
    // Reset classes and set active
    weight.forEach((innerItem) => innerItem.classList.remove("active"));
    weight__item.classList.add("active");

    selectedWeight = parseInt(weight__item.getAttribute("value"), 10);
    calculateResult();
    calculateResult2();
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

function calculateResult2() {
  if (selectedHb && selectedWeight) {
    const hbValues = resultMap2[selectedHb];
    if (hbValues) {
      const finalResult = hbValues[selectedWeight];
      if (finalResult !== undefined) {
        result__value2.textContent = finalResult;
      } else {
        result__value2.textContent = "0";
      }
    } else {
      result__value2.textContent = "0";
    }
  }
}
