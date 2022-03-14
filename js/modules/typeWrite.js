export function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textArray.forEach((letter, i) => {
    setTimeout(function () {
      element.innerHTML += letter;
    }, 100 * i);
  });
}
