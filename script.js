const jokecontainer = document.querySelector(".joke");
getjoke = async () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            jokecontainer.innerHTML = data.value;
        });
}
getjoke();