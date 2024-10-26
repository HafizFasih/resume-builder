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
function cursorAnimation() {
    var button = document.getElementById("chasingLight");
    document.addEventListener("mousemove", function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        button.style.left = "".concat(mouseX, "px");
        button.style.top = "".concat(mouseY, "px");
        button.style.transform = "translate(-50%, -50%)";
    });
}
function getTextAnimation() {
    var text = "welcome to my resume builder".split("");
    var textContainer = document.getElementsByClassName("text-container")[0];
    text.forEach(function (val) {
        var letter = document.createElement("span");
        letter.classList.add("text");
        letter.innerText = val;
        textContainer.appendChild(letter);
    });
    var count = 0;
    var animation = setInterval(function () {
        textContainer.children[count].classList.add("translate");
        count++;
        if (count === text.length)
            clearInterval(animation);
    }, 50);
}
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loadingPage();
                cursorAnimation();
                return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 4000); })];
            case 1:
                _a.sent();
                getTextAnimation();
                return [2 /*return*/];
        }
    });
}); };
