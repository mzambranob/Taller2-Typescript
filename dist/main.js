import { dataSeries } from './data.js';
const seriesTbody = document.getElementById("series");
const avgSeasons = document.getElementById("avgSeasons");
const cardContainer = document.getElementById("card-container");
function showSeriesInTable(series) {
    series.forEach((s) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
        <td>${s.tupleNum}</td>
        <td> <a href="#"> ${s.name} </a> </td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
        `;
        trElement.addEventListener("click", () => {
            showCardDetail(s);
        });
        seriesTbody.appendChild(trElement);
    });
}
function showCardDetail(serie) {
    cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${serie.image}" alt="Poster of ${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">
          ${serie.desc}
        </p>
        <p>
        <a href="${serie.link}" target="_blank">
          ${serie.link}
        </a>
        </p>
      </div>
    </div>
  `;
}
function getAverageSeasons(series) {
    const total = series.reduce((acc, series) => acc + series.seasons, 0);
    return total / series.length;
}
showSeriesInTable(dataSeries);
const average = getAverageSeasons(dataSeries);
avgSeasons.innerText = average.toFixed(2);
