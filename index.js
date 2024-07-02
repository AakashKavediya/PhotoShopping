const rangeInput = document.querySelectorAll("input");
const value = document.querySelectorAll(".percent");
const image = document.querySelector(".image");

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "bright") {
      image.style.filter = `brightness(${rangeInput[i].value}%)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "contrast") {
      image.style.filter = `contrast(${rangeInput[i].value}%)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "blurr") {
      image.style.filter = `blur(${rangeInput[i].value}px)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "gray") {
      image.style.filter = `grayscale(${rangeInput[i].value})`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "hue") {
      image.style.filter = `hue-rotate(${rangeInput[i].value}deg)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "invert") {
      image.style.filter = `invert(${rangeInput[i].value}%)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "opacity") {
      image.style.filter = `opacity(${rangeInput[i].value}%)`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "saturate") {
      image.style.filter = `saturate(${rangeInput[i].value})`;
    }
  });
}

for (let i = 0; i < rangeInput.length; i++) {
  value[i].textContent = rangeInput[i].value;
  rangeInput[i].addEventListener("input", () => {
    value[i].textContent = rangeInput[i].value;
    if (rangeInput[i].id === "sepia") {
      image.style.filter = `sepia(${rangeInput[i].value})`;
    }
  });
}
