function searchWord() {
    let word = document.getElementById("wordInput").value;

    if (word === "") {
        document.getElementById("result").innerHTML = "Please enter a word.";
        return;
    }

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.title) {
                document.getElementById("result").innerHTML = "Word not found.";
            } else {
                let definition = data[0].meanings[0].definitions[0].definition;
                document.getElementById("result").innerHTML = `<strong>${word}:</strong> ${definition}`;
            }
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "Error fetching data.";
        });
}
