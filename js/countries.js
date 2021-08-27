const countriesLoad = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
    .then(data=>displayCountries(data))
}
countriesLoad();

const displayCountries=countries=>{
    const divContainer = document.getElementById('country')
    // console.log(countries);

    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('blog');
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = country.name;
        // p.innerText = country.capital;
        // div.appendChild(h3);
        // div.appendChild(p);
        // console.log(country);
        div.innerHTML = `
        <h3> ${country.name}</h3>
        <p>${country.capital} </p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        divContainer.appendChild(div);
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetail(data[0]));
}
const countryDetail = (country) => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    const div = document.createElement('div');
    div.innerHTML=`
    <h4> ${country.name}</h4>
    <p>${country.population}</p>
    <img width="200px" src="${country.flag}">
    `;
    countryDiv.appendChild(div);

}














