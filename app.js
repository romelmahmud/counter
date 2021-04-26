// initial count

let count = 0;

const countValue = document.querySelector(".value");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnStyle = e.currentTarget.classList;
    if (btnStyle.contains("increase")) {
      count++;
    } else if (btnStyle.contains("reset")) {
      count = 0;
    } else {
      count--;
    }

    if (count > 0) {
      countValue.style.color = "limegreen";
    }
    if (count < 0) {
      countValue.style.color = "red";
    }
    if (count === 0) {
      countValue.style.color = "#121212";
    }

    countValue.textContent = count;
  });
});
