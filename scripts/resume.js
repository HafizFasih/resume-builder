var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loadingPage();
                return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 4000); })];
            case 1:
                _a.sent();
                getProfileDataAnimation();
                skillsArrangment();
                headingAnimation();
                getExperienceParagraph();
                getEducationParagraph("education-first-paragraph");
                getEducationParagraph("education-second-paragraph");
                slideHeadings();
                hobbiesAnimation();
                socialItemsAnimation();
                return [2 /*return*/];
        }
    });
}); };
//! GET INNERWIDTH
var headingTranslateValue = "";
if (window.innerWidth >= 1000)
    headingTranslateValue = "-260%";
else if (window.innerWidth < 1000 && window.innerWidth > 800)
    headingTranslateValue = "-380%";
else if (window.innerWidth <= 800 && window.innerWidth > 450)
    headingTranslateValue = "-245%";
else
    headingTranslateValue = "-185%";
//! LOADING BOXES MAGNITUDE
var range = 50;
if (window.innerWidth > 1000)
    range = 50;
else if (window.innerWidth < 1000 && window.innerWidth > 750)
    range = 40;
else if (window.innerWidth < 750 && window.innerWidth > 600)
    range = 48;
else if (window.innerWidth < 600 && window.innerWidth > 400)
    range = 42;
else
    range = 48;
console.log(range);
// //! LOADING PAGE
function loadingPage() {
    var loadingPageBoxes = new Array(range).fill(null);
    var loadingPageCon = document.getElementsByClassName("loading-page-parent")[0];
    loadingPageBoxes.forEach(function () {
        var newBox = document.createElement("div");
        newBox.classList.add("loading-boxes");
        loadingPageCon.appendChild(newBox);
    });
    var boxes = Array.from(loadingPageCon.getElementsByClassName("loading-boxes"));
    var count = 0;
    var sampleArray = generateUniqueNumbers(range);
    var delay = setInterval(function () {
        boxes[sampleArray[count]].classList.add("hidden");
        count++;
        if (count === range) {
            clearInterval(delay);
            boxes.forEach(function (box) { return box.remove(); });
            loadingPageCon.style.display = "none";
        }
    }, 80);
}
// //! RANDOM NUMBERS
function generateUniqueNumbers(range) {
    var _a;
    var numbers = [];
    for (var i = 0; i < range; i++) {
        numbers.push(i);
    }
    for (var i = numbers.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        _a = [numbers[randomIndex], numbers[i]], numbers[i] = _a[0], numbers[randomIndex] = _a[1];
    }
    return numbers;
}
//! HEADING ANIMATION
function headingAnimation() {
    var headings = document.getElementsByClassName("head");
    var count = 0;
    var delay = setInterval(function () {
        headings[count].style.transform = "translateY(0%)";
        count++;
        if (count === headings.length)
            clearInterval(delay);
    }, 500);
}
//! SLIDE HEADINGS
function slideHeadings() {
    var heading = document.getElementsByClassName("heading");
    var count = 0;
    var delay = setInterval(function () {
        heading[count].style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
        count++;
        if (count === heading.length)
            clearInterval(delay);
    }, 200);
}
//! BAR ANIMATION
function getBarAnimation() {
    var skillBars = document.getElementsByClassName("bar");
    var count = 0;
    var delay = setInterval(function () {
        skillBars[count].classList.toggle("translate-bar");
        count++;
        if (count === skillBars.length)
            clearInterval(delay);
    }, 200);
}
//! SKILLS ARRANGMENT
function skillsArrangment() {
    var skillDetails = [
        { name: "html", percentage: "90%" },
        { name: "css", percentage: "95%" },
        { name: "typescript", percentage: "98%" },
        { name: "javascript", percentage: "97%" },
        { name: "next", percentage: "85%" },
        { name: "python", percentage: "85%" },
        { name: "react", percentage: "90%" },
    ];
    skillDetails.map(function (val) {
        var skillBars = document.getElementById(val.name);
        if (skillBars)
            skillBars.style.width = val.percentage;
    });
    getBarAnimation();
}
//! TRIGGER SKILLS ANIMATION ON CLICK
var skillsHeading = document.getElementById("skills-heading");
var skillsCondition = true;
if (skillsHeading)
    skillsHeading.addEventListener("click", function () {
        getBarAnimation();
        if (skillsCondition) {
            skillsHeading.style.transform = "translate(0%, -50%)";
            skillsCondition = false;
        }
        else {
            skillsHeading.style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
            skillsCondition = true;
        }
    });
//! EDUCATION PARAGRAPH
function getEducationParagraph(className) {
    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat, nam et eos quasi molestias veniam. Reiciendis vitae vero explicabo, pariatur assumenda ipsa adipisci excepturi debitis.";
    var educationFirstParaContainer = document.getElementsByClassName(className)[0];
    for (var _i = 0, paragraph_1 = paragraph; _i < paragraph_1.length; _i++) {
        var alphabet = paragraph_1[_i];
        var letter = document.createElement("span");
        letter.innerHTML = alphabet;
        letter.classList.add("color-initial");
        educationFirstParaContainer.appendChild(letter);
    }
    getEducationParaAnimation(true);
}
//! EDUCATION PARAGRAPGH ANIMATION
function getEducationParaAnimation(direction) {
    var count = 0;
    var letters = document.getElementsByClassName("color-initial");
    var delay = setInterval(function () {
        if (direction)
            letters[count].classList.add("color-final");
        else
            letters[letters.length - 1 - count].classList.remove("color-final");
        count++;
        if (count === letters.length)
            clearInterval(delay);
    }, 10);
}
//! TRIGGER EDUCATION ANIMATION ON CLICK
var direction = false;
var educationCondition = true;
var educationHeading = document.getElementById("education-heading");
if (educationHeading)
    educationHeading.addEventListener("click", function () {
        getEducationParaAnimation(direction);
        direction = !direction;
        if (educationCondition) {
            educationHeading.style.transform = "translate(0%, -50%)";
            educationCondition = false;
        }
        else {
            educationHeading.style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
            educationCondition = true;
        }
    });
//! HOBBIES ANIMATION
function hobbiesAnimation() {
    var hobbies = document.getElementsByClassName("hobbies");
    var count = 0;
    switch (count) {
        case 3:
            count = 2;
            break;
        case 2:
            count = 3;
            break;
    }
    setInterval(function () {
        if (count !== 0)
            hobbies[count - 1].classList.remove("hobbies-animation");
        else
            hobbies[3].classList.remove("hobbies-animation");
        hobbies[count].classList.add("hobbies-animation");
        count++;
        if (count === hobbies.length) {
            count = 0;
        }
    }, 800);
}
//! SOCIAL ITEMS ANIMATION
function socialItemsAnimation() {
    var socialItems = document.getElementsByClassName("social-items");
    var count = 0;
    var delay = setInterval(function () {
        socialItems[count].classList.toggle("translate-bar");
        count++;
        if (count === socialItems.length)
            clearInterval(delay);
    }, 200);
}
//! TRIGGER SOCIAL ITEMS ANIMATION ON CLICK
var socialHeading = document.getElementById("social-heading");
var socialCondition = true;
socialHeading === null || socialHeading === void 0 ? void 0 : socialHeading.addEventListener("click", function () {
    if (socialCondition) {
        socialHeading.style.transform = "translate(0%, -50%)";
        socialCondition = false;
    }
    else {
        socialHeading.style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
        socialCondition = true;
    }
    socialItemsAnimation();
});
//! TRIGGER HOBBIES ITEMS ANIMATION ON CLICK
var hobbiesHeading = document.getElementById("hobbies-heading");
var hobbiesCondition = true;
hobbiesHeading === null || hobbiesHeading === void 0 ? void 0 : hobbiesHeading.addEventListener("click", function () {
    if (hobbiesCondition) {
        hobbiesHeading.style.transform = "translate(0%, -50%)";
        hobbiesCondition = false;
    }
    else {
        hobbiesHeading.style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
        hobbiesCondition = true;
    }
});
//! GET EXPERIENCE PARAGRAPH
function getExperienceParagraph() {
    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat, nam et eos quasi molestias veniam. Reiciendis vitae vero explicabo, pariatur assumenda ipsa adipisci excepturi debitis.consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat,";
    var experienceParagraph = document.getElementsByClassName("experience-paragraph");
    for (var _i = 0, paragraph_2 = paragraph; _i < paragraph_2.length; _i++) {
        var alphabet = paragraph_2[_i];
        var letter = document.createElement("span");
        letter.innerHTML = alphabet;
        letter.classList.add("color-initial1");
        experienceParagraph[0].appendChild(letter);
    }
    getExperienceParaAnimation(true);
}
//! GET EXPERIENCE PARAGRAPGH ANIMATION
function getExperienceParaAnimation(direction) {
    var count = 0;
    var letters = document.getElementsByClassName("color-initial1");
    var delay = setInterval(function () {
        if (direction)
            letters[count].classList.add("color-final1");
        else
            letters[letters.length - 1 - count].classList.remove("color-final1");
        count++;
        if (count === letters.length)
            clearInterval(delay);
    }, 10);
}
//! TRIGGER EXPERIENCE ITEMS ANIMATION ON CLICK
var experienceHeading = document.getElementById("experience-heading");
var experienceParaFlowDirection = false;
var experienceCondition = true;
experienceHeading === null || experienceHeading === void 0 ? void 0 : experienceHeading.addEventListener("click", function () {
    getExperienceParaAnimation(experienceParaFlowDirection);
    experienceParaFlowDirection = !experienceParaFlowDirection;
    if (experienceCondition) {
        experienceHeading.style.transform = "translate(0%, -50%)";
        experienceCondition = false;
    }
    else {
        experienceHeading.style.transform = "translate(".concat(headingTranslateValue, ", -50%)");
        experienceCondition = true;
    }
});
//! PROFILE NAME ANIMATION
var profileName = document.getElementById("profile-name");
var userName = "muhammad fasih";
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var letter = userName_1[_i];
    var alphabet = document.createElement("span");
    alphabet.innerText = letter;
    alphabet.classList.add("letters");
    profileName === null || profileName === void 0 ? void 0 : profileName.appendChild(alphabet);
}
//! PROFILE DATA ANIMATION
function getProfileDataAnimation() {
    var nameLetters = document.getElementsByClassName("letters");
    var count = 0;
    var delay = setInterval(function () {
        nameLetters[count].style.transform = "translateY(-20%)";
        count++;
        if (count === nameLetters.length)
            clearInterval(delay);
    }, 100);
    var profileSkill = document.getElementById("profile-txt");
    setTimeout(function () {
        if (profileSkill)
            profileSkill.classList.add("translate-bar");
    }, 1500);
}
