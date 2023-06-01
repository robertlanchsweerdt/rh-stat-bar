const statItem = document.querySelectorAll('.rh-stat-item');
let speed = 10;

function animateCounter(statItem) {
  const counter = statItem.querySelector('.rh-stat__value');

  function UpdateCounter() {
    const targetNumber = +counter.dataset.target;
    const initialNumber = +parseInt(counter.innerText);

    if (initialNumber < targetNumber) {
      counter.innerText = initialNumber + 1;
      setTimeout(UpdateCounter, speed);
    }
    if (initialNumber > targetNumber) {
      counter.innerText = initialNumber - 1;
      setTimeout(UpdateCounter, speed);
    }
  }
  UpdateCounter();
}

const options = {
  threshold: 0,
};

let countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

statItem.forEach((item) => {
  countObserver.observe(item);
});
