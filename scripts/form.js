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
                return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 2900); })];
            case 1:
                _a.sent();
                startingAnimation();
                return [2 /*return*/];
        }
    });
}); };
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
    range = 54;
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
    }, 50);
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
function startingAnimation() {
    return __awaiter(this, void 0, void 0, function () {
        var childDiv;
        return __generator(this, function (_a) {
            childDiv = document.getElementsByClassName("animation");
            childDiv[0].style.transform = "translateX(-100%)";
            childDiv[1].style.transform = "translateX(100%)";
            return [2 /*return*/];
        });
    });
}
var userIndex = JSON.parse(localStorage.getItem("index"));
var userDataInString = localStorage.getItem("formData");
var userData = [];
if (userDataInString) {
    userData = JSON.parse(userDataInString);
}
var respectiveData = userData[userIndex];
document.addEventListener("DOMContentLoaded", function () {
    var addSkillButton = document.getElementById("addSkill");
    var skillsList = document.getElementById("skillsList");
    var form = document.getElementById("userForm");
    var skills = [];
    addSkillButton.addEventListener("click", function () {
        var skillInput = document.querySelector("#skills input[type='text']");
        var percentageInput = document.querySelector("#skills input[type='number']");
        var skillName = skillInput.value.trim();
        var skillPercentage = parseInt(percentageInput.value.trim());
        if (skillName && skillPercentage >= 0 && skillPercentage <= 100) {
            skills.push({ name: skillName, percentage: skillPercentage });
            var li = document.createElement("li");
            li.textContent = "".concat(skillName.toUpperCase(), " - ").concat(skillPercentage, "%");
            skillsList.appendChild(li);
            skillInput.value = "";
            percentageInput.value = "";
        }
        else {
            alert("Please enter a valid skill and percentage (0-100).");
        }
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (skills.length === 0) {
            var skillsRequired = document.getElementsByClassName("skills-req");
            for (var _i = 0, skillsRequired_1 = skillsRequired; _i < skillsRequired_1.length; _i++) {
                var skill = skillsRequired_1[_i];
                skill.setAttribute("required", "required");
            }
        }
        if (userIndex !== null) {
            for (var _a = 0, _b = respectiveData.skills; _a < _b.length; _a++) {
                var val = _b[_a];
                skills.push({ name: val.name, percentage: Number(val.percentage) });
            }
        }
        var fileInput = document.getElementById("fileInput");
        var imageURL = "";
        if (fileInput && fileInput.files && fileInput.files[0]) {
            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                imageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                saveFormData(imageURL);
            };
            reader.readAsDataURL(file);
        }
        else {
            if (userIndex === null)
                saveFormData(imageURL);
            else {
                saveFormData(respectiveData.imageURL);
            }
        }
    });
    var saveFormData = function (imageURL) {
        var name = document.getElementById("name").value;
        var profession = document.getElementById("profession").value;
        var experience = document.getElementById("experience").value;
        var education = document.getElementById("education").value;
        var hobbies = [
            document.getElementById("hobby1").value,
            document.getElementById("hobby2").value,
            document.getElementById("hobby3").value,
            document.getElementById("hobby4").value,
        ];
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact")
            .value;
        var facebook = document.getElementById("facebook")
            .value;
        var linkedin = document.getElementById("linkedin")
            .value;
        var formData = {
            name: name,
            profession: profession,
            experience: experience,
            education: education,
            skills: skills,
            hobbies: hobbies,
            email: email,
            contact: contact,
            facebook: facebook,
            linkedin: linkedin,
            imageURL: imageURL,
        };
        if (typeof window !== "undefined") {
            var data = localStorage.getItem("formData");
            if (!data) {
                localStorage.setItem("formData", "[]");
                data = "[]";
            }
            var formDataArray = JSON.parse(data);
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.setAttribute("value", respectiveData.name);
    (_b = document
        .getElementById("profession")) === null || _b === void 0 ? void 0 : _b.setAttribute("value", respectiveData.profession);
    (_c = document
        .getElementById("email")) === null || _c === void 0 ? void 0 : _c.setAttribute("value", respectiveData.email);
    (_d = document
        .getElementById("contact")) === null || _d === void 0 ? void 0 : _d.setAttribute("value", respectiveData.contact);
    (_e = document
        .getElementById("facebook")) === null || _e === void 0 ? void 0 : _e.setAttribute("value", respectiveData.facebook);
    (_f = document
        .getElementById("linkedin")) === null || _f === void 0 ? void 0 : _f.setAttribute("value", respectiveData.linkedin);
    var experience = document.getElementById("experience");
    if (experience)
        experience.textContent = respectiveData.experience;
    var education = document.getElementById("education");
    if (education)
        education.textContent = respectiveData.education;
    (_g = document
        .getElementById("hobby1")) === null || _g === void 0 ? void 0 : _g.setAttribute("value", respectiveData.hobbies[0]);
    (_h = document
        .getElementById("hobby2")) === null || _h === void 0 ? void 0 : _h.setAttribute("value", respectiveData.hobbies[1]);
    (_j = document
        .getElementById("hobby3")) === null || _j === void 0 ? void 0 : _j.setAttribute("value", respectiveData.hobbies[2]);
    (_k = document
        .getElementById("hobby4")) === null || _k === void 0 ? void 0 : _k.setAttribute("value", respectiveData.hobbies[3]);
    if (userIndex !== null) {
        for (var _i = 0, _l = respectiveData.skills; _i < _l.length; _i++) {
            var val = _l[_i];
            var skillsList = document.getElementById("skillsList");
            var li = document.createElement("li");
            li.textContent = "".concat(val.name.toUpperCase(), " - ").concat(val.percentage, "%");
            skillsList.appendChild(li);
        }
    }
}
if (userIndex !== null)
    editableForm();
