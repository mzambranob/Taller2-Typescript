import { Serie } from "./serie.js";
import { dataSeries } from './data.js';


const seriesTbody: HTMLElement = document.getElementById("series")!;
const avgSeasons: HTMLElement = document.getElementById("avgSeasons")!;
const cardContainer: HTMLElement = document.getElementById("card-container")!;

function showSeriesInTable(series: Serie[]): void{
    series.forEach((s) =>{
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

function showCardDetail(serie:Serie):void{
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


function getAverageSeasons(series:Serie[]): number{
    const total = series.reduce((acc, series) => acc + series.seasons,0);
    return total / series.length;
}

showSeriesInTable(dataSeries);
const average = getAverageSeasons(dataSeries);
avgSeasons.innerText = average.toFixed(2);