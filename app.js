const id = document.querySelector('span');
const advice = document.querySelector('p');
const btn = document.querySelector('.btn');
const apiUrl = 'https://api.adviceslip.com/advice';

async function getApi(url, para1, para2) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  para1.textContent = `Advice #"${data.slip.id}"`;
  para2.textContent = `"${data.slip.advice}"`;
}
window.addEventListener('load', getApi(apiUrl, id, advice));
btn.addEventListener('click', e => {
  e.preventDefault();
  getApi(apiUrl, id, advice);
});
