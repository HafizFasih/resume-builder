window.onload = async () => {
  loadingPage();
  await new Promise((res) => setTimeout(res, 2900));
  getProfileDataAnimation();
  skillsArrangment();
  headingAnimation();
  getExperienceParagraph();
  getEducationParagraph("education-first-paragraph", false);
  getEducationParagraph("education-second-paragraph", true);
  slideHeadings();
  hobbiesAnimation();
  socialItemsAnimation();
};

//! GET INNERWIDTH
let headingTranslateValue: string = "";
if (window.innerWidth >= 1000) headingTranslateValue = "-260%";
else if (window.innerWidth < 1000 && window.innerWidth > 800)
  headingTranslateValue = "-380%";
else if (window.innerWidth <= 800 && window.innerWidth > 450)
  headingTranslateValue = "-245%";
else headingTranslateValue = "-185%";

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

//! HEADING ANIMATION
function headingAnimation() {
  const headings = document.getElementsByClassName("head");
  let count: number = 0;
  const delay = setInterval(() => {
    (<HTMLElement>headings[count]).style.transform = "translateY(0%)";
    count++;
    if (count === headings.length) clearInterval(delay);
  }, 500);
}

//! SLIDE HEADINGS
function slideHeadings() {
  const heading = document.getElementsByClassName("heading");
  let count: number = 0;
  const delay = setInterval(() => {
    (<HTMLElement>(
      heading[count]
    )).style.transform = `translate(${headingTranslateValue}, -50%)`;
    count++;
    if (count === heading.length) clearInterval(delay);
  }, 200);
}

//! BAR ANIMATION
function getBarAnimation() {
  const skillBars = document.getElementsByClassName("bar");
  let count: number = 0;
  const delay = setInterval(() => {
    skillBars[count].classList.toggle("translate-bar");
    count++;
    if (count === skillBars.length) clearInterval(delay);
  }, 200);
}
//! SKILLS ARRANGMENT
function skillsArrangment() {
  const skillDetails = [
    { name: "html", percentage: "90%" },
    { name: "css", percentage: "95%" },
    { name: "typescript", percentage: "98%" },
    { name: "javascript", percentage: "97%" },
    { name: "next", percentage: "85%" },
    { name: "python", percentage: "85%" },
    { name: "react", percentage: "90%" },
  ];
  skillDetails.map((val) => {
    const skillBars = document.getElementById(val.name);
    if (skillBars) skillBars.style.width = val.percentage;
  });
  getBarAnimation();
}

//! TRIGGER SKILLS ANIMATION ON CLICK
const skillsHeading = document.getElementById("skills-heading");
let skillsCondition: boolean = true;
if (skillsHeading)
  skillsHeading.addEventListener("click", () => {
    getBarAnimation();
    if (skillsCondition) {
      skillsHeading.style.transform = "translate(0%, -50%)";
      skillsCondition = false;
    } else {
      skillsHeading.style.transform = `translate(${headingTranslateValue}, -50%)`;
      skillsCondition = true;
    }
  });

//! EDUCATION PARAGRAPH
function getEducationParagraph(className: string, condition: boolean) {
  const paragraph: string = condition
    ? "Completed my intermediate education with a focus on Pre-Engineering from Delhi College. During this period, I developed a strong analytical mindset and problem-solving skills, which have been instrumental in my journey toward becoming a proficient web developer. My coursework included foundational studies in mathematics and science, fostering a robust understanding of technical concepts."
    : "Currently pursuing further studies in computer science with an emphasis on web development technologies. My goal is to deepen my knowledge in advanced programming languages and frameworks, preparing myself for a successful career in the tech industry. I am actively seeking opportunities to apply my skills in real-world projects and enhance my understanding of both front-end and back-end development.";
  const educationFirstParaContainer = document.getElementsByClassName(
    className
  )[0] as HTMLElement;
  for (let alphabet of paragraph) {
    const letter = document.createElement("span");
    letter.innerHTML = alphabet;
    letter.classList.add("color-initial");
    educationFirstParaContainer.appendChild(letter);
  }
  getEducationParaAnimation(true);
}

//! EDUCATION PARAGRAPGH ANIMATION
function getEducationParaAnimation(direction: boolean) {
  let count: number = 0;
  const letters = document.getElementsByClassName("color-initial");
  const delay = setInterval(() => {
    if (direction) letters[count].classList.add("color-final");
    else letters[letters.length - 1 - count].classList.remove("color-final");
    count++;
    if (count === letters.length) clearInterval(delay);
  }, 10);
}

//! TRIGGER EDUCATION ANIMATION ON CLICK
let direction: boolean = false;
let educationCondition: boolean = true;
const educationHeading = document.getElementById("education-heading");
if (educationHeading)
  educationHeading.addEventListener("click", () => {
    getEducationParaAnimation(direction);
    direction = !direction;
    if (educationCondition) {
      educationHeading.style.transform = "translate(0%, -50%)";
      educationCondition = false;
    } else {
      educationHeading.style.transform = `translate(${headingTranslateValue}, -50%)`;
      educationCondition = true;
    }
  });

//! HOBBIES ANIMATION
function hobbiesAnimation() {
  const hobbies = document.getElementsByClassName("hobbies");
  let count: number = 0;
  switch (count) {
    case 3:
      count = 2;
      break;
    case 2:
      count = 3;
      break;
  }
  setInterval(() => {
    if (count !== 0) hobbies[count - 1].classList.remove("hobbies-animation");
    else hobbies[3].classList.remove("hobbies-animation");
    hobbies[count].classList.add("hobbies-animation");
    count++;
    if (count === hobbies.length) {
      count = 0;
    }
  }, 800);
}

//! SOCIAL ITEMS ANIMATION
function socialItemsAnimation() {
  const socialItems = document.getElementsByClassName("social-items");
  let count: number = 0;
  const delay = setInterval(() => {
    socialItems[count].classList.toggle("translate-bar");
    count++;
    if (count === socialItems.length) clearInterval(delay);
  }, 200);
}
//! TRIGGER SOCIAL ITEMS ANIMATION ON CLICK
const socialHeading = document.getElementById("social-heading");
let socialCondition: boolean = true;
socialHeading?.addEventListener("click", () => {
  if (socialCondition) {
    socialHeading.style.transform = "translate(0%, -50%)";
    socialCondition = false;
  } else {
    socialHeading.style.transform = `translate(${headingTranslateValue}, -50%)`;
    socialCondition = true;
  }
  socialItemsAnimation();
});

//! TRIGGER HOBBIES ITEMS ANIMATION ON CLICK
const hobbiesHeading = document.getElementById("hobbies-heading");
let hobbiesCondition: boolean = true;
hobbiesHeading?.addEventListener("click", () => {
  if (hobbiesCondition) {
    hobbiesHeading.style.transform = "translate(0%, -50%)";
    hobbiesCondition = false;
  } else {
    hobbiesHeading.style.transform = `translate(${headingTranslateValue}, -50%)`;
    hobbiesCondition = true;
  }
});

//! GET EXPERIENCE PARAGRAPH
function getExperienceParagraph() {
  const paragraph: string =
    "With a solid foundation in web development, I have honed my skills across various languages and frameworks, including HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Python, Next.js, React.js, and Three.js. As an intermediate student in my second year, I have successfully applied these technologies to build responsive, interactive websites and applications, demonstrating a strong grasp of both front-end and back-end development principles. My projects include e-commerce platforms, animated portfolios, and dynamic 3D environments, reflecting my commitment to exploring and mastering modern web technologies.";
  const experienceParagraph = document.getElementsByClassName(
    "experience-paragraph"
  );
  for (let alphabet of paragraph) {
    const letter = document.createElement("span");
    letter.innerHTML = alphabet;
    letter.classList.add("color-initial1");
    experienceParagraph[0].appendChild(letter);
  }
  getExperienceParaAnimation(true);
}

//! GET EXPERIENCE PARAGRAPGH ANIMATION
function getExperienceParaAnimation(direction: boolean) {
  let count: number = 0;
  const letters = document.getElementsByClassName("color-initial1");
  const delay = setInterval(() => {
    if (direction) letters[count].classList.add("color-final1");
    else letters[letters.length - 1 - count].classList.remove("color-final1");
    count++;
    if (count === letters.length) clearInterval(delay);
  }, 10);
}

//! TRIGGER EXPERIENCE ITEMS ANIMATION ON CLICK
const experienceHeading = document.getElementById("experience-heading");
let experienceParaFlowDirection: boolean = false;
let experienceCondition: boolean = true;
experienceHeading?.addEventListener("click", () => {
  getExperienceParaAnimation(experienceParaFlowDirection);
  experienceParaFlowDirection = !experienceParaFlowDirection;
  if (experienceCondition) {
    experienceHeading.style.transform = "translate(0%, -50%)";
    experienceCondition = false;
  } else {
    experienceHeading.style.transform = `translate(${headingTranslateValue}, -50%)`;
    experienceCondition = true;
  }
});

//! PROFILE NAME ANIMATION
const profileName = document.getElementById("profile-name");
const userName: string = "muhammad fasih";
for (let letter of userName) {
  const alphabet = document.createElement("span");
  alphabet.innerText = letter;
  if (letter === " ") alphabet.style.width = "10px";
  alphabet.classList.add("letters");
  profileName?.appendChild(alphabet);
}

//! PROFILE DATA ANIMATION
function getProfileDataAnimation() {
  const nameLetters = document.getElementsByClassName("letters");
  let count: number = 0;
  const delay = setInterval(() => {
    (<HTMLElement>nameLetters[count]).style.transform = "translateY(-20%)";
    count++;
    if (count === nameLetters.length) clearInterval(delay);
  }, 100);

  const profileSkill = document.getElementById("profile-txt");
  setTimeout(() => {
    if (profileSkill) profileSkill.classList.add("translate-bar");
  }, 1500);
}