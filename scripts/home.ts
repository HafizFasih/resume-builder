//! LOADING BOXES MAGNITUDE
let range: number = 50;
if (window.innerWidth > 1000) range = 50;
else if (window.innerWidth < 1000 && window.innerWidth > 750) range = 40;
else if (window.innerWidth < 750 && window.innerWidth > 600) range = 48;
else if (window.innerWidth < 600 && window.innerWidth > 400) range = 42;
else range = 54;

// //! LOADING PAGE
function loadingPage() {
  const loadingPageBoxes = new Array(range).fill(null);
  const loadingPageCon = document.getElementsByClassName(
    "loading-page-parent"
  )[0];
  loadingPageBoxes.forEach(() => {
    const newBox: HTMLDivElement = document.createElement("div");
    newBox.classList.add("loading-boxes");
    loadingPageCon.appendChild(newBox);
  });
  const boxes = Array.from(
    loadingPageCon.getElementsByClassName("loading-boxes")
  );
  let count: number = 0;
  const sampleArray: number[] = generateUniqueNumbers(range);
  const delay = setInterval(() => {
    boxes[sampleArray[count]].classList.add("hidden");
    count++;
    if (count === range) {
      clearInterval(delay);
      boxes.forEach((box) => box.remove());
      (loadingPageCon as HTMLElement).style.display = "none";
    }
  }, 50);
}

// //! RANDOM NUMBERS
function generateUniqueNumbers(range: number): number[] {
  const numbers: number[] = [];
  for (let i = 0; i < range; i++) {
    numbers.push(i);
  }
  for (let i = numbers.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
  }
  return numbers;
}

function cursorAnimation() {
  const button = document.getElementById("chasingLight");
  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    button!.style.left = `${mouseX}px`;
    button!.style.top = `${mouseY}px`;
    button!.style.transform = `translate(-50%, -50%)`;
  });
}

function getTextAnimation() {
  const text: string[] = "welcome to my resume builder".split("");
  const textContainer = document.getElementsByClassName(
    "text-container"
  )[0] as HTMLElement;
  text.forEach((val) => {
    const letter = document.createElement("span");
    letter.classList.add("text");
    letter.innerText = val;
    if (val === " ") {
      letter.style.width = "2vw";
    }
    textContainer.appendChild(letter);
  });
  let count: number = 0;
  const animation = setInterval(() => {
    textContainer.children[count].classList.add("translate");
    count++;
    if (count === text.length) clearInterval(animation);
  }, 50);
}
window.onload = async () => {
  loadingPage();
  cursorAnimation();
  await new Promise((res) => setTimeout(res, 2900));
  getTextAnimation();
};
