const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data=>displayLoad(data))
}
// loadQuote();

const displayLoad = (blog) => {
    console.log(blog);
    const div = document.getElementById('quote');
    div.innerText = blog.quote;
}