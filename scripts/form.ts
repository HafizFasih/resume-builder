type Skill = {
  name: string;
  percentage: number;
};
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
window.onload = async () => {
  loadingPage();
  await new Promise((res) => setTimeout(res, 2900));
  startingAnimation();
};
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

async function startingAnimation() {
  const childDiv = document.getElementsByClassName("animation");
  (<HTMLElement>childDiv[0]).style.transform = "translateX(-100%)";
  (<HTMLElement>childDiv[1]).style.transform = "translateX(100%)";
}

const userIndex: number = JSON.parse(localStorage.getItem("index")!);
const userDataInString = localStorage.getItem("formData");
let userData: DataType[] = [];
if (userDataInString) {
  userData = JSON.parse(userDataInString);
}
const respectiveData: DataType = userData[userIndex];
document.addEventListener("DOMContentLoaded", () => {
  const addSkillButton = document.getElementById(
    "addSkill"
  ) as HTMLButtonElement;
  const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  const form = document.getElementById("userForm") as HTMLFormElement;

  let skills: Skill[] = [];

  addSkillButton.addEventListener("click", () => {
    const skillInput = document.querySelector(
      "#skills input[type='text']"
    ) as HTMLInputElement;
    const percentageInput = document.querySelector(
      "#skills input[type='number']"
    ) as HTMLInputElement;

    const skillName = skillInput.value.trim();
    const skillPercentage = parseInt(percentageInput.value.trim());

    if (skillName && skillPercentage >= 0 && skillPercentage <= 100) {
      skills.push({ name: skillName, percentage: skillPercentage });
      const li = document.createElement("li");
      li.textContent = `${skillName.toUpperCase()} - ${skillPercentage}%`;
      skillsList.appendChild(li);
      skillInput.value = "";
      percentageInput.value = "";
    } else {
      alert("Please enter a valid skill and percentage (0-100).");
    }
  });

  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    if (skills.length === 0) {
      const skillsRequired = document.getElementsByClassName("skills-req");
      for (let skill of skillsRequired) {
        skill.setAttribute("required", "required");
      }
    }
    if (userIndex !== null) {
      for (let val of respectiveData.skills) {
        skills.push({ name: val.name, percentage: Number(val.percentage) });
      }
    }

    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    let imageURL: string = "";
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        imageURL = e.target?.result as string;
        saveFormData(imageURL);
      };
      reader.readAsDataURL(file);
    } else {
      if (userIndex === null) saveFormData(imageURL);
      else {
        saveFormData(respectiveData.imageURL);
      }
    }
  });

  const saveFormData = (imageURL: string) => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (
      document.getElementById("profession") as HTMLInputElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const hobbies = [
      (document.getElementById("hobby1") as HTMLInputElement).value,
      (document.getElementById("hobby2") as HTMLInputElement).value,
      (document.getElementById("hobby3") as HTMLInputElement).value,
      (document.getElementById("hobby4") as HTMLInputElement).value,
    ];
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement)
      .value;
    const facebook = (document.getElementById("facebook") as HTMLInputElement)
      .value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
      .value;

    const formData = {
      name,
      profession,
      experience,
      education,
      skills,
      hobbies,
      email,
      contact,
      facebook,
      linkedin,
      imageURL,
    };
    if (typeof window !== "undefined") {
      let data = localStorage.getItem("formData");
      if (!data) {
        localStorage.setItem("formData", "[]");
        data = "[]";
      }
      const formDataArray: (typeof formData)[] = JSON.parse(data);
      formDataArray.push(formData);

      if (userIndex !== null) {
        formDataArray.splice(userIndex, 1);
        localStorage.setItem("index", "null");
      }
      localStorage.setItem("formData", JSON.stringify(formDataArray));
    }
    form.reset();
    skills = [];
    skillsList.innerHTML = "";
    window.location.href = "resume.html";
  };
});

function editableForm() {
  document.getElementById("name")?.setAttribute("value", respectiveData.name);
  document
    .getElementById("profession")
    ?.setAttribute("value", respectiveData.profession);
  document
    .getElementById("email")
    ?.setAttribute("value", respectiveData.email!);
  document
    .getElementById("contact")
    ?.setAttribute("value", respectiveData.contact!);
  document
    .getElementById("facebook")
    ?.setAttribute("value", respectiveData.facebook);
  document
    .getElementById("linkedin")
    ?.setAttribute("value", respectiveData.linkedin);
  const experience = document.getElementById("experience");
  if (experience) experience.textContent = respectiveData.experience;
  const education = document.getElementById("education");
  if (education) education.textContent = respectiveData.education;
  document
    .getElementById("hobby1")
    ?.setAttribute("value", respectiveData.hobbies[0]);
  document
    .getElementById("hobby2")
    ?.setAttribute("value", respectiveData.hobbies[1]);
  document
    .getElementById("hobby3")
    ?.setAttribute("value", respectiveData.hobbies[2]);
  document
    .getElementById("hobby4")
    ?.setAttribute("value", respectiveData.hobbies[3]);
  if (userIndex !== null) {
    for (let val of respectiveData.skills) {
      const skillsList = document.getElementById(
        "skillsList"
      ) as HTMLUListElement;
      const li = document.createElement("li");
      li.textContent = `${val.name.toUpperCase()} - ${val.percentage}%`;
      skillsList.appendChild(li);
    }
  }
}
if (userIndex !== null) editableForm();
