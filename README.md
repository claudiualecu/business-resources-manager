# movies-and-heroes

1. Introducere
   Cloud computing reprezinta un ansamblu distribuit de servicii de calcul, aplicatii, acces la informatii si stocare de date, fara ca utilizatorul sa aiba nevoie sa cunoasca amplasarea si configuratia fizica a sistemelor care furnizeaza aceste servicii.
2. Descriere problema
       Movies and Heroes este o aplicatie pentru cei care nu cunosc eroii si antagonistii din filmele/serialele vizionate.
       Prin aceasta aplicatie se pot cauta atat filmele vizionate cat si eroii din aceste filme cu adaugarea unor mici informatii despre acestea.
3. Descriere API
       OMDb API este un serviciu web RESTful pentru a obtine informatii despre filme si seriale, tot continutul(atat informatiile cat si imaginile) sunt mentinute si actualizate de catre utilizatorii acestui API. Acest API aduce informatii de genul : numele filmului cautat, poster-ul acestuia, anul lansarii, distributia si multe altele. Pentru utilizarea acestui API este nevoie de o cheie pe care o poti obtine gratuir prin inregistrarea unui cont pe site-ul acestuia.
       The superhero API este o sursa de date cuantificata si accesibila programatic a tuturor supereroilor din universul comic. Toate detaliile sunt luate si combinate într-o forma mai usor de consumat cu software. Apoi a fost creat un API pentru a putea sa fie consumata fara probleme. Datele sunt accesibile printr-un API REST. Ca pentru orice alt API trebuie consultata documentatia acestuia daca doriti sa il folositi. De asemenea, sunt furnizate biblioteci Helper, astfel încât sa poata fie consumat API-ul în alegerea limbii utilizatorului. Aveti nevoie de un cont facebook pentru a primi tokenul de acces. 
4. Flux de date
       Fluxul de date intre aplicatie si API se face intr-un mod simplu pe baza de request/response. In momentul in care accesezi o anumita cale Http API-ul. Se poate accesa o singura tranzactie pe request iar API-ul iti va aduce datele cerute de utilizator.
       In cadrul aplicatiei Movies and Heroes cererea de date se face pe baza de user input, solicitand informatii de la API-urile utilizate. Utilizatorul completeaza datele necesare si apasa un buton care trimite un request la baza de date a API-urilor folosite. In momentul in care API-ul primeste acest request, trimite inapoi datele solicitate. Aceste date sunt preluate de aplicatie iar anumite date sunt afisate in interfata utilizatorului.

5. Exemple de request/response
       Request1: http://www.omdbapi.com/?t=avengers&apikey=9ba301ca
       Response1: 
{"Title": "The Avengers","Year": "2012","Rated": "PG-13","Released": "04 May 2012","Runtime": "143 min","Genre": "Action, Adventure, Sci-Fi","Director": "Joss Whedon","Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language": "English, Russian, Hindi","Country": "USA","Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings": [],"Metascore": "69","imdbRating": "8.0","imdbVotes": "1,225,316","imdbID": "tt0848228","Type": "movie","DVD": "25 Sep 2012","BoxOffice": "$623,279,547","Production": "Walt Disney Pictures","Website": "N/A","Response": "True"}
       
       Request2: https://www.superheroapi.com/api.php/1905472796253293/search/hawkeye
       Response2:
{"response": "success","results-for": "hawkeye","results": [{"id": "313","name": "Hawkeye","powerstats": {},"biography": {},"appearance": {},"work": {},"connections": {},"image": {}},{"id": "314","name": "Hawkeye II","powerstats": {},"biography": {},"appearance": {},"work": {},"connections": {},"image": {}}]}

6. Metode http
       Pentru aceasta aplicatie a fost folosita doar metoda GET. Aceasta este cea mai folosita metoda, fiind utilizata atunci când serverului i se cere o resursa.
7. Autentificare si autorizare servicii utilizate
       Metodele de autentificare folosite pentru accesa serviciile utilizate de aplicatie sunt cheile API pe care le poti obtine prin inregistrarea pe site-urile API-urilor. Aceste chei se folosesc pentru a putea accesa informatiile puse de aceste API la dispozitia utilizaoturlui.


8. Aplicatie




