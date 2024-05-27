

var badwords = ["ahole",
    "anus",
    "ash0le",
    "ash0les",
    "asholes",
    "ass",
    "Ass Monkey",
    "Assface",
    "assh0le",
    "assh0lez",
    "asshole",
    "assholes",
    "assholz",
    "asswipe",
    "azzhole",
    "bassterds",
    "bastard",
    "bastards",
    "bastardz",
    "basterds",
    "basterdz",
    "Biatch",
    "bitch",
    "bitches",
    "Blow Job",
    "boffing",
    "butthole",
    "buttwipe",
    "c0ck",
    "c0cks",
    "c0k",
    "Carpet Muncher",
    "cawk",
    "cawks",
    "Clit",
    "cnts",
    "cntz",
    "cock",
    "cockhead",
    "cock-head",
    "cocks",
    "CockSucker",
    "cock-sucker",
    "crap",
    "cum",
    "cunt",
    "cunts",
    "cuntz",
    "dick",
    "dild0",
    "dild0s",
    "dildo",
    "dildos",
    "dilld0",
    "dilld0s",
    "dominatricks",
    "dominatrics",
    "dominatrix",
    "dyke",
    "enema",
    "f u c k",
    "f u c k e r",
    "fag",
    "fag1t",
    "faget",
    "fagg1t",
    "faggit",
    "faggot",
    "fagg0t",
    "fagit",
    "fags",
    "fagz",
    "faig",
    "faigs",
    "fart",
    "flipping the bird",
    "fuck",
    "fucker",
    "fuckin",
    "fucking",
    "fucks",
    "Fudge Packer",
    "fuk",
    "Fukah",
    "Fuken",
    "fuker",
    "Fukin",
    "Fukk",
    "Fukkah",
    "Fukken",
    "Fukker",
    "Fukkin",
    "g00k",
    "gay",
    "gayboy",
    "gaygirl",
    "gays",
    "gayz",
    "God-damned",
    "h00r",
    "h0ar",
    "h0re",
    "hells",
    "hoar",
    "hoor",
    "hoore",
    "jackoff",
    "jap",
    "japs",
    "jerk-off",
    "jisim",
    "jiss",
    "jizm",
    "jizz",
    "knob",
    "knobs",
    "knobz",
    "kunt",
    "kunts",
    "kuntz",
    "Lezzian",
    "Lipshits",
    "Lipshitz",
    "masochist",
    "masokist",
    "massterbait",
    "masstrbait",
    "masstrbate",
    "masterbaiter",
    "masterbate",
    "masterbates",
    "Motha Fucker",
    "Motha Fuker",
    "Motha Fukkah",
    "Motha Fukker",
    "Mother Fucker",
    "Mother Fukah",
    "Mother Fuker",
    "Mother Fukkah",
    "Mother Fukker",
    "mother-fucker",
    "Mutha Fucker",
    "Mutha Fukah",
    "Mutha Fuker",
    "Mutha Fukkah",
    "Mutha Fukker",
    "n1gr",
    "nastt",
    "nigger;",
    "nigur;",
    "niiger;",
    "niigr;",
    "orafis",
    "orgasim;",
    "orgasm",
    "orgasum",
    "oriface",
    "orifice",
    "orifiss",
    "packi",
    "packie",
    "packy",
    "paki",
    "pakie",
    "paky",
    "pecker",
    "peeenus",
    "peeenusss",
    "peenus",
    "peinus",
    "pen1s",
    "penas",
    "penis",
    "penis-breath",
    "penus",
    "penuus",
    "Phuc",
    "Phuck",
    "Phuk",
    "Phuker",
    "Phukker",
    "polac",
    "polack",
    "polak",
    "Poonani",
    "pr1c",
    "pr1ck",
    "pr1k",
    "pusse",
    "pussee",
    "pussy",
    "puuke",
    "puuker",
    "queer",
    "queers",
    "queerz",
    "qweers",
    "qweerz",
    "qweir",
    "recktum",
    "rectum",
    "retard",
    "sadist",
    "scank",
    "schlong",
    "screwing",
    "semen",
    "sex",
    "sexy",
    "Sh!t",
    "sh1t",
    "sh1ter",
    "sh1ts",
    "sh1tter",
    "sh1tz",
    "shit",
    "shits",
    "shitter",
    "Shitty",
    "Shity",
    "shitz",
    "Shyt",
    "Shyte",
    "Shytty",
    "Shyty",
    "skanck",
    "skank",
    "skankee",
    "skankey",
    "skanks",
    "Skanky",
    "slag",
    "slut",
    "sluts",
    "Slutty",
    "slutz",
    "son-of-a-bitch",
    "tit",
    "turd",
    "va1jina",
    "vag1na",
    "vagiina",
    "vagina",
    "vaj1na",
    "vajina",
    "vullva",
    "vulva",
    "w0p",
    "wh00r",
    "wh0re",
    "whore",
    "xrated",
    "xxx",
    "b!+ch",
    "bitch",
    "blowjob",
    "clit",
    "arschloch",
    "fuck",
    "shit",
    "ass",
    "asshole",
    "b!tch",
    "b17ch",
    "b1tch",
    "bastard",
    "bi+ch",
    "boiolas",
    "buceta",
    "c0ck",
    "cawk",
    "chink",
    "cipa",
    "clits",
    "cock",
    "cum",
    "cunt",
    "dildo",
    "dirsa",
    "ejakulate",
    "fatass",
    "fcuk",
    "fuk",
    "fux0r",
    "hoer",
    "hore",
    "jism",
    "kawk",
    "l3itch",
    "l3i+ch",
    "lesbian",
    "masturbate",
    "masterbat*",
    "masterbat3",
    "motherfucker",
    "s.o.b.",
    "mofo",
    "nazi",
    "nigga",
    "nigger",
    "nutsack",
    "phuck",
    "pimpis",
    "pusse",
    "pussy",
    "scrotum",
    "sh!t",
    "shemale",
    "shi+",
    "idiot",
    "fool",
    "foolish",
    "stupid",
    "dumb",
    "mumu",
    "sh!+",
    "slut",
    "smut",
    "teets",
    "tits",
    "boobs",
    "b00bs",
    "teez",
    "testical",
    "testicle",
    "titt",
    "w00se",
    "jackoff",
    "wank",
    "whoar",
    "whore",
    "wicked",
    "*damn",
    "*dyke",
    "*fuck*",
    "*shit*",
    "@$$",
    "amcik",
    "andskota",
    "arse*",
    "assrammer",
    "ayir",
    "bi7ch",
    "bitch*",
    "bollock*",
    "breasts",
    "butt-pirate",
    "cabron",
    "cazzo",
    "chraa",
    "chuj",
    "Cock*",
    "cunt*",
    "d4mn",
    "daygo",
    "dego",
    "dick*",
    "dike*",
    "dupa",
    "dziwka",
    "ejackulate",
    "Ekrem*",
    "Ekto",
    "enculer",
    "faen",
    "fag*",
    "fanculo",
    "fanny",
    "feces",
    "feg",
    "Felcher",
    "ficken",
    "fitt*",
    "Flikker",
    "foreskin",
    "Fotze",
    "Fu*",
    "fuk*",
    "futkretzn",
    "gook",
    "guiena",
    "h0r",
    "h4x0r",
    "helvete",
    "hoer*",
    "honkey",
    "Huevon",
    "hui",
    "injun",
    "jizz",
    "kanker*",
    "kike",
    "klootzak",
    "kraut",
    "knulle",
    "kuk",
    "kuksuger",
    "Kurac",
    "kurwa",
    "kusi*",
    "kyrpa*",
    "lesbo",
    "mamhoon",
    "masturbat*",
    "merd*",
    "mibun",
    "monkleigh",
    "mouliewop",
    "muie",
    "mulkku",
    "muschi",
    "nazis",
    "nepesaurio",
    "nigger*",
    "orospu",
    "paska*",
    "perse",
    "picka",
    "pierdol*",
    "pillu*",
    "pimmel",
    "piss*",
    "pizda",
    "poontsee",
    "poop",
    "porn",
    "p0rn",
    "pr0n",
    "preteen",
    "pula",
    "pule",
    "puta",
    "puto",
    "qahbeh",
    "queef*",
    "rautenberg",
    "schaffer",
    "scheiss*",
    "schlampe",
    "schmuck",
    "screw",
    "sh!t*",
    "ewu",

    "olodo",
    "sharmuta",
    "sharmute",
    "shipal",
    "shiz",
    "skribz",
    "skurwysyn",
    "sphencter",
    "spic",
    "spierdalaj",
    "splooge",
    "suka",
    "b00b*",
    "testicle*",
    "titt*",
    "twat",
    "vittu",
    "wank*",
    "wetback*",
    "wichser",
    "wop*",
    "yed",
    "zabourah"]

var ourmessages = document.getElementById("messages");
window.setInterval(scrollit, 10000);  //this scroll after the specified time
function scrollit() {
    ourmessages.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}
$("#messages").bind("DOMSubtreeModified", function () {  //this function checks if a child is added it is in jquery
    ourmessages.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

});
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!

// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");
document.getElementById('enterbtn').addEventListener('click', setimage)
var imgurl;
var fullimg = "";
function setimage() {
    imgurl = document.getElementById("imgurl").value;
    if (imgurl != "") {
        if (imgurl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            fullimg = "<img" + " src='" + imgurl + "'" + "style='max-width:300px; max-height:300px; margin-top:10px;' class='myImages' id='sentimage' alt='sentimage'>"
            //alert(fullimg)
            document.getElementById("imagepop").style.display = "none";
            document.getElementById("popupoverlayimg").style.display = "none";
            document.getElementById("imagepopup").style.color = "#277452";
        }
        else {
            document.getElementById('imgerr').innerHTML = "Not a valid image url!";
            document.getElementById('imgerr').style.display = "initial";
            fullimg = "";
        }

    }
    else {
        document.getElementById('imgerr').innerHTML = "You have not entered any url!";
        document.getElementById('imgerr').style.display = "initial";
        fullimg = "";
    }

}

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var color;
var username;
const firebaseConfig = {
    apiKey: "AIzaSyDHsnjLFT9vt8dWRRshejdsYgA6ObpB54Y",
    authDomain: "afrowatch-chat-526cc.firebaseapp.com",
    projectId: "afrowatch-chat-526cc",
    storageBucket: "afrowatch-chat-526cc.appspot.com",
    messagingSenderId: "222557596478",
    appId: "1:222557596478:web:e2c5f6db378c9deb791a6f",
    measurementId: "G-1ZKRC1DCSJ"
};
var popup = document.getElementById("loginPopup")
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const db = firebase.database();
window.onload = function () {


    // document.getElementById('menuopen').style.display='none'

    // alert(localStorage.getItem('username'))
    if (localStorage.getItem('username') == null) {
        popup.style.display = "flex"
        var chat = document.getElementById("chat-txt")
        chat.disabled = true

    }
    else {
        username = localStorage.getItem('username')
        color = localStorage.getItem('color')

    }

}
var regex = /^(http[s]?:\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
    e.preventDefault();
    const timestamp = Date.now();
    var chatTxt = document.getElementById("chat-txt");
    var filter = "❌❌❌❌"
    var message = chatTxt.value;

    var img = fullimg;

    var selectedclr = color;
    if (message != "" || fullimg != "") {
        //alert(message includes(badwords[i])
        for (let i = 0; i < badwords.length; i++) {
            if (message.toLowerCase().includes(badwords[i]) || message.toLowerCase().match(regex) || message.toLowerCase().includes('http')) {
                //alert('bad word')
                message = filter
                //alert(message)
            }
            else {
                // alert('good word')
                chatTxt.value = "";

            }


        }




        db.ref("messages/" + timestamp).set({
            usr: username,
            msg: message + "<br>" + img,
            img: img,
            clr: color,
        });
    }

}

var audio = new Audio("message.wav");
audio.volume = 0.9;
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();

    audio.play();
    //Below I converted the verifivation badge to a string and stored it as a variable
    var verif = "<i id='verifbadge' style='color:#2C96EA; display:none; ' onclick='verifpopup()' class='bi bi-patch-check-fill'></i>";

    const msg = "<li id='newmsg'>" + "<usr id='usr'>" + messages.usr + "</usr> " + verif + ' : ' + messages.msg + "</li>";

    try {

    } catch (error) {
        console.log(error);
    }

    ourmessages.innerHTML += msg;

    var x = document.querySelectorAll("usr");


    fullimg = "";
    document.getElementById("imagepopup").style.color = "#949191";

    //   if(localStorage.getItem('color')=="null"){
    //     var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     localStorage.setItem('color',"#"+randomColor)
    //     alert(localStorage.getItem('color'))
    //   }
    //alert(randomColor)






    var imagebtn = document.getElementById('imagepopup')
    var allusers = document.querySelectorAll("#verifbadge")  //we are checking all the verification badges
    //in the for loop we loop through all of them as we check
    for (let i = 0; i < allusers.length; i++) {
        //allusers[i].style.color = "red"
        if (allusers[i].previousElementSibling.innerHTML == "Afro Watch") { //this checks the name of the user
            allusers[i].style.display = "initial"  //this display the verif badge if thye user is an admin 
            //imagebtn.style.display = "initial"
        }
        if (allusers[i].previousElementSibling.innerHTML == "clinton") {
            allusers[i].style.display = "initial"
            // imagebtn.style.display = "initial"
        }
        if (allusers[i].previousElementSibling.innerHTML == "Admin Precious") {
            allusers[i].style.display = "initial"
            //imagebtn.style.display = "initial"
        }
        if (allusers[i].previousElementSibling.innerHTML == "Leo") {
            allusers[i].style.display = "initial"
            // imagebtn.style.display = "initial"
        }
        //Duplicate the if statement and modufy the name to give a new user a verifiation badge
    }


    ///to check if I AM AN ADMIN
    switch (localStorage.getItem('username')) {
        case "clinton":
            imagebtn.style.display = "initial"
            break;
        case "Afro Watch":
            imagebtn.style.display = "initial"
            break;
        case "Admin Precious":
            imagebtn.style.display = "initial"
            break;
        case "Leo":
            imagebtn.style.display = "initial"
            break;

        default:
            imagebtn.style.display = "none"
            break;
    }





    // // create references to the modal...
    // // var modal = document.getElementById('myModal');
    // // to all images -- note I'm using a class!
    // var images = document.querySelectorAll('#sentimage');
    // // the image in the modal
    // // var modalImg = document.getElementById("img01");
    // // // and the caption in the modal
    // // var captionText = document.getElementById("caption");

    // // Go through all of the images with our custom class
    // for (var i = 0; i < images.length; i++) {
    //   console.log(images.length);
    //   var img = images[i];
    //   img.addEventListener('click',sayhi)
    // }

    // // var span = document.getElementsByClassName("close")[0];

    // // span.onclick = function() {
    // //   modal.style.display = "none";
    // // }




    var y = document.querySelectorAll("#newmsg");
    for (let i = 0; i < y.length; i++) {
        if (y[i].lastChild.tagName.toLowerCase() == 'img') {
            y[i].style.maxWidth = "330px"

        }
        else {

        }

    }

    for (let i = 0; i < x.length; i++) {
        //alert(color)

        if (x[i].innerHTML == messages.usr) {
            x[i].style.color = messages.clr;




            if (messages.clr == localStorage.getItem('color') && messages.usr == localStorage.getItem('username')) {
                x[i].parentElement.style.marginLeft = "auto"
                x[i].parentElement.style.borderRadius = '10px 5px 1px 10px'//"5px 10px 10px 1px"
                x[i].parentElement.innerHTML = messages.msg
                x[i].style.textAlign = "right"
                x[i].style.display = "none"

            }









        }






    }
    try {


        var images = document.querySelectorAll('#sentimage');
        if (images) {
            console.log("images");
        }
        else {
            console.log('no wayyy hose');
        }
        for (var ind = 0; ind < images.length; ind++) {
            console.log(images.length);
            var img = images[ind];
            try {
                img.addEventListener('click', sayhi)
            } catch (error) {
                console.log(error);
            }

        }
    } catch (error) {

        console.log(error);



    }

    function sayhi() {
        try {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = "";
        } catch (error) {
            console.log(err);
        }

    }
});





//From here


// create references to the modal...
// var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!

// the image in the modal
// var modalImg = document.getElementById("img01");
// // and the caption in the modal
// var captionText = document.getElementById("caption");

// Go through all of the images with our custom class

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}








