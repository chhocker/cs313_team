function httpCall(url, method="GET") {
    return new Promise((resolve, reject) => {
        let xHTTP = new XMLHttpRequest();

        xHTTP.onreadystatechange = () => { 
            if (xHTTP.readyState == 4) {
                if (xHTTP.status == 200) {
                    resolve(xHTTP.responseText);
                }
                else {
                    reject("Error");
                }
            }
        }

        xHTTP.open(method, url, true);
        xHTTP.send(null);
    });
}

function submitForm() {
    let movieTitle = document.getElementById('movie_title').value;
    let apiKey = "f6129b66";

    httpCall(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`)
    .then((rawResults) => {
        let search = JSON.parse(rawResults).Search;

        for (i in search) {
            let movie = search[i];

            let title = movie.Title;
            let year = movie.Year;
            let poster = movie.Poster;
            let ID = movie.imdbID;

            document.getElementById("movie_table").innerHTML += "<tr>" + 
            "<td>" + title + "</td>" + 
            "<td>" + year + "</td>" +
            "<td><img src=\'" + poster + "\'></td>" + 
            `<td><button onclick='getDetails("${ID}")'>Get Details</button></td>`+
            "</tr>";
        }
    })
    .catch((error) => {
        document.getElementById("results").innerHTML = error;
    });
}

function getDetails(id) {
    let url = `http://www.omdbapi.com/?apikey=f6129b66&i=${id}`;

    httpCall(url)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    })
}