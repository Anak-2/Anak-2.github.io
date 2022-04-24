const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const showTime = `${hours}: ${minutes}: ${seconds}`;
  clock.innerText = showTime;
}

const quotes = [
  {
    quote: "Don't dwell on the past.",
    translate: "과거에 연연하지 마세요.",
  },
  {
    quote: "Believe in yourself.",
    translate: "자기 자신을 믿으세요.",
  },
  {
    quote: "Follow your heart.",
    translate: "마음이 원하는 대로 따르세요.",
  },
  {
    quote: "Seize the day.",
    translate: "오늘을 즐기세요.",
  },
  {
    quote: "You only live once.",
    translate: "인생은 한 번 뿐이에요.",
  },
  {
    quote: "Past is just past.",
    translate: "과거는 과거입니다.",
  },
  {
    quote: "Where there is a will there is a way",
    translate: "뜻이 있는 곳에 길이 있다.",
  },
  {
    quote: "Don't beat yourself up.",
    translate: "자책하지 마세요.",
  },
  {
    quote: "Life is a journey.",
    translate: "인생은 여정이다.",
  },
  {
    quote: "Love yourself.",
    translate: "자기 자신을  사랑하세요.",
  },
];

const quote = document.querySelector("#quote p:first-child");
const translate = document.querySelector("#quote p:last-child");

function getRandNum(length) {
  return Math.floor(Math.random() * length);
}

const todayQuote = quotes[getRandNum(quotes.length)];
quote.innerText = todayQuote.quote;
translate.innerText = todayQuote.translate;
getClock();
setInterval(getClock, 1000);
