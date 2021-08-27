const buddyLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data=>buddyDisplay(data))
}
// buddyLoad()
const buddyDisplay = (data) => {
    const buddis = data.results;
    const buddiPost = document.getElementById('buddy');

    for (const buddi of buddis) {
        // console.log(buddi.results.name);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddi.name.title} ${buddi.name.first} ${buddi.name.last}  Email: ${buddi.email}`;
        buddiPost.appendChild(p);
    }
}