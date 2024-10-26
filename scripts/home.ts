function loadingPage() {
  const loadingPageBoxes = new Array(50).fill(null);
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
  const sampleArray: number[] = generateUniqueNumbers();
  const delay = setInterval(() => {
    boxes[sampleArray[count]].classList.add("hidden");
    count++;
    if (count === 50) {
      clearInterval(delay);
      boxes.forEach((box) => box.remove());
      (loadingPageCon as HTMLElement).style.display = "none";
    }
  }, 80);
}

function generateUniqueNumbers(): number[] {
  const numbers: number[] = [];
  for (let i = 0; i < 50; i++) {
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
  await new Promise((res) => setTimeout(res, 4000));
  getTextAnimation();
};
