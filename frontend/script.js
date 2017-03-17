var url = 'http://localhost:3000/articles';
function getData(url) {

    var xhr = new XMLHttpRequest();
    if (xhr) {

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                } else {
                    alert('GET: Une erreur s’est produite.');
                }
            }
        };

        xhr.open('GET', url);
        xhr.send();
    }
}

getData();


// var xhr_responseText = [
//     {
//         "id": 1,
//         "author": "Perceval",
//         "chapter": "Livre I",
//         "episode": "Ambidextrie",
//         "content": "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
//         "date": "",
//         "image": "/img/livre-1-ambidextrie.jpg"
//     },
//     {
//         "id": 2,
//         "author": "Karadoc",
//         "chapter": "Livre II",
//         "episode": "La Cassette",
//         "content": "La politique de l'autruche, c'est une politique qui court vite, une politique qui fait des gros œufs, c'est tout.",
//         "date": "",
//         "image": "/img/livre-2-la-cassette.png"
//     },
//     {
//         "id": 3,
//         "author": "Perceval",
//         "chapter": "Livre IV",
//         "episode": "Les Chaperons",
//         "content": "En plus, je connais une technique pour tuer trois hommes en un coup rien qu’avec des feuilles mortes ! Alors là, vous êtes deux, vous avez bien de la chance.",
//         "date": "",
//         "image": "/img/livre-4-les-chaperons.jpg"
//     },
//     {
//         "id": 4,
//         "author": "Karadoc",
//         "chapter": "Livre II",
//         "episode": "Sept cent quarante-quatre",
//         "content": "Par exemple, vous prenez aujourd’hui. Vous comptez sept jours. Ça vous emmène dans une semaine. Et bien on sera exactement le même jour qu’aujourd’hui… À une vache près, hein… C’est pas une science exacte.",
//         "date": "",
//         "image": "/img/livre-2-sept-cent-quarante-quatre.jpg"
//     }
// ];

// var citation = xhr_responseText;
// for (i in citation){
//     var article = document.getElementsByClassName("col-sm-6")[i];
//     article.getElementsByClassName("blockquote").textContent = citation[i]['content'];
//     article.getElementsByClassName("p").textContent = citation[i]['author'];
//     console.log(citation[i]['content']);
// }
// console.log(citation);




/*function postData() {

    var xhr = new XMLHttpRequest();
    if (xhr) {

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    
                    var i = xhr.responseText.indexOf('http:');
                    var url = xhr.responseText.slice(i);
                    url = url.split('\n')[0];

                    getData(url);
                } else {
                    alert('POST: Une erreur s’est produite.');
                }
            }
        };

        var obj = {
            name: 'John Frog',
            address: '8 rue des Nénuphars, 43000 La Mare' ,
            phone: '0677889900',
	        birthday: '03/12/1970'
        };

        xhr.open('POST','http://posttestserver.com/post.php?dir=wcs'); 
        var jsonStr = JSON.stringify(obj);
        xhr.send(jsonStr);
    }
}

postData();*/
