const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const randImg = images[getRandNum(images.length)];
const bgImage = `img/${randImg}`;
// document.querySelector("body").style.backgroundRepeat = `no-repeat`;
// document.querySelector("body").style.backgroundImage = `url(${bgImage})`;
// document.querySelector("body").style.backgroundSize = `cover`;
const backDiv = document.createElement("div");
backDiv.classList.add("backDiv");
backDiv.style = "text-align: center";
backDiv.style = "margin-top: 30px";
const backImg = document.createElement("img");
backImg.src = bgImage;
document.querySelector("#content").appendChild(backDiv);
document.querySelector(".backDiv").appendChild(backImg);