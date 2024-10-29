interface SkillsType {
  name: string;
  percentage: string;
}
interface DataType {
  name: string;
  email?: string;
  contact?: string;
  imageURL: string;
  profession: string;
  facebook: string;
  linkedin: string;
  experience: string;
  education: string;
  hobbies: string[];
  skills: SkillsType[];
}

//! GETTING DATA
let index: number = -1;
const userDataInString = localStorage.getItem("formData");
let userData: DataType[] = [];
if (userDataInString) {
  userData = JSON.parse(userDataInString);
} else {
  window.location.href = "form.html";
}
if (userData.length === 0) window.location.href = "form.html";
const resumeData: DataType = userData[userData.length - 1];

window.onload = async () => {
  loadingPage();
  await new Promise((res) => setTimeout(res, 2900));
  setImage();
  getProfileDataAnimation();
  skillsArrangment();
  headingAnimation();
  getExperienceParagraph();
  getEducationParagraph("education-first-paragraph");
  slideHeadings();
  hobbiesAnimation();
  socialItemsAnimation();
  changeDataDynamic();
};

//! COMING SOON
const soon = document.getElementsByClassName("soon");
for(let i of soon)
i?.addEventListener("click", () => {
alert("coming soon")
});

//! FILTERING INDEX
const editButton = document.getElementById("edit");
editButton?.addEventListener("click", () => {
  userData.filter((val, ind) => {
    if (val.name === resumeData.name) index = ind;
  })[0];
  localStorage.setItem("index", `${index}`);
  window.location.href = "form.html";
});

//! REMOVE DATA
const deleteButton = document.getElementById("remove");
deleteButton?.addEventListener("click", () => {
  const sampleArray: DataType[] = userData.filter((val) => {
    if (val.name !== resumeData.name) return val;
  });
  localStorage.setItem("formData", JSON.stringify(sampleArray));
  window.location.href = "index.html";
});

//! NAVIGATION BUTTON
const navigationButton = document.getElementById("navigator");
let switchButton: boolean = true;
navigationButton?.addEventListener("click", () => {
  const options = document.getElementById("options");
  if (switchButton) {
    if (options) options.style.display = "flex";
    switchButton = false;
  } else {
    if (options) options.style.display = "none";
    switchButton = true;
  }
});

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

//! SET IMAGE
function setImage() {
  const profilePicCon = document.getElementsByClassName(
    "profile-pic-con"
  )[0] as HTMLElement;
  const image = document.createElement("img");
  image.classList.add("profile-pic");
  image.src = resumeData.imageURL
    ? resumeData.imageURL
    : "/assets/default-profile.svg";
  profilePicCon.appendChild(image);
}

//! GET HOBBIES
function changeDataDynamic() {
  const getHobbies = document.getElementsByClassName("hobbies");
  let count: number = 0;
  for (let hobby of getHobbies) {
    hobby.innerHTML = `<h1>${resumeData.hobbies[count]}</h1>`;
    count++;
  }
  const professionText = document.getElementById("profile-txt");
  if (professionText) professionText.innerText = resumeData.profession;
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
  if (skillBars.length > 0) {
    let count: number = 0;
    const delay = setInterval(() => {
      skillBars[count].classList.toggle("translate-bar");
      count++;
      if (count === skillBars.length) clearInterval(delay);
    }, 200);
  }
}

//! SKILLS ARRANGMENT
function skillsArrangment() {
  resumeData.skills.map((val) => {
    const skillContainer = document.getElementsByClassName(
      "skills-portion"
    )[0] as HTMLElement;
    const skillPortion = document.createElement("div");
    skillPortion.classList.add("skills");
    skillPortion.innerHTML = `
    <h3>${val.name}</h3>
    <span class="skill-bar">
    <span class="bar" id=${val.name}></span>
    </span>
    `;
    skillContainer.appendChild(skillPortion);
    const skillBars = document.getElementById(val.name);
    if (skillBars) skillBars.style.width = `${val.percentage}%`;
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
function getEducationParagraph(className: string) {
  const paragraph: string = resumeData.education; //!
  const educationFirstParaContainer = document.getElementsByClassName(
    className
  )[0] as HTMLElement;
  for (let alphabet of paragraph) {
    const letter = document.createElement("span");
    letter.innerHTML = alphabet;
    if(alphabet === " ")letter.style.margin = "0 3px"
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
  const paragraph: string = resumeData.experience; //!
  const experienceParagraph = document.getElementsByClassName(
    "experience-paragraph"
  );
  for (let alphabet of paragraph) {
    const letter = document.createElement("span");
    letter.innerHTML = alphabet;
    if(alphabet === " ")letter.style.margin = "0 3px"
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
const userName: string = resumeData.name; //!
for (let letter of userName) {
  const alphabet = document.createElement("span");
  alphabet.innerText = letter;
  alphabet.classList.add("letters");
  if (letter === " ") alphabet.style.width = "10px";
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
