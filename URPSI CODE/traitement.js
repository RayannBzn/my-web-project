

var d=prompt("Entrez votre nom :");
alert("Bienvenue " + d + " sur notre site web !");

function rayan() {
    const x = document.getElementById("demo");
    console.log(x);
    x.textContent = "BONJOUR TOUT LE MONDE !";
    x.style.fontSize = "100px";
    x.style.color = "red";
    x.style.backgroundColor = "black";
    x.style.fontFamily = "Lato, sans-serif";
}

const images = [
    "https://as2.ftcdn.net/v2/jpg/13/63/79/91/1000_F_1363799113_hgNzPD8CKHvcv0cCnEOVrQ0q6yQuIK7i.jpg" ,
    "https://as1.ftcdn.net/v2/jpg/01/36/63/80/1000_F_136638000_kf8Y9Q2Ue7hGCa9AHfqU9D9Q1nY2IqPk.jpg",
    "https://as1.ftcdn.net/v2/jpg/01/36/63/78/1000_F_136637822_3d0M1dUFb9E4OnN0dtl56E96JYyQmHlO.jpg"
];


var e=document.getElementsByTagName("h1");
console.log(typeof e)
console.log(e);


e[1].style.fontFamily="Lato, sans-serif";
e[1].style.color="orange";

e[2].style.fontFamily="Lato, sans-serif";
e[2].style.color="blue";

e[3].style.fontFamily="Lato, sans-serif";
e[3].style.color="red"; 

e[4].style.fontFamily="Lato, sans-serif";
e[4].style.color="pink";


s=document.querySelectorAll("h1.liste");
S[0].style.border="0px solid red";
console.log(s);
console.log(typeof s);






let currentIndex = 0;

function changeimg() {
    const y = document.getElementById("myImage");
    currentIndex = (currentIndex + 1) % images.length;
    y.src = images[currentIndex];
    
}


// alerte à mettre pour l'accueil du site

// var d=prompt("Entrez votre nom :");
// alert("Bienvenue " + d + " sur notre site web !");










