const header = document.getElementsByClassName('header1')[0];
window.addEventListener("scroll", function () {
    var headerScroll = document.querySelector("header");
    headerScroll.classList.toggle("scrol-anime", window.scrollY > 100);
})

const logo = document.createElement('a');
logo.className = "logo";
logo.textContent = "TIVA";
logo.setAttribute('href', 'index.html');
const ul = document.createElement('ul');
ul.className = "ul";
const li1 = document.createElement('li');
li1.className = "li";
const a1 = document.createElement('a');
a1.className = "a";
a1.textContent = "Haqqımda";
a1.setAttribute('href', 'about.html');
const a2 = document.createElement('a');
a2.className = "a";
a2.textContent = "Yazılarım";
a2.setAttribute('href', 'news.html');
const li2 = document.createElement('li');
li2.className = "li";
const a3 = document.createElement('a');
a3.className = "a";
a3.textContent = "Mənimlə əlaqə";
a3.setAttribute('href', 'https://wa.me/+994504587493');
a3.setAttribute('target', '_blank');


const div1 = document.createElement('div');
div1.className = "close-open";
const i1 = document.createElement('i');
i1.className = "bx bx-menu close-icons";
const i2 = document.createElement('i');
i2.className = "bx bx-x close-icons";

li2.append(a3);
li1.append(a2, a1);
ul.append(li1, li2);
div1.append(i1, i2);
header.append(logo, ul, div1);

let close_element = document.getElementsByClassName('close-icons');
close_element[0].onclick = function () {
    ul.style.transform = "translateY(0)";
    close_element[0].style.display = "none";
    close_element[1].style.display = "block";
}
close_element[1].onclick = function () {
    ul.style.transform = "translateY(-150%)";
    close_element[1].style.display = "none";
    close_element[0].style.display = "block";
}

let footer1 = document.getElementsByClassName('footer1')[0];
let footer1_child_mother = document.createElement('section');

let footer1_child1 = document.createElement('section');

let footer1_h1 = document.createElement('h1');
footer1_h1.textContent = "Məni sosial şəbəkələrdə izlə";

let footer1_div1 = document.createElement('div');
let footer1_div2 = document.createElement('div');
let footer1_div3 = document.createElement('div');

let footer1_a1 = document.createElement('a');
footer1_a1.textContent = "thisisvidadiali";
footer1_a1.setAttribute("href", "https://www.instagram.com/thisisvidadiali/")
let footer1_a2 = document.createElement('a');
footer1_a2.textContent = "Vidadi Elizade";
footer1_a2.setAttribute("href", "https://www.facebook.com/thisisvidadiali");
let footer1_a3 = document.createElement('a');
footer1_a3.textContent = "thisisvidadiali";
footer1_a3.setAttribute("href", "https://www.threads.net/@thisisvidadiali");

let footer1_i1 = document.createElement('i');
footer1_i1.setAttribute("class", "bx bxl-instagram-alt");
let footer1_i2 = document.createElement('i');
footer1_i2.setAttribute("class", "bx bxl-facebook-circle");
let footer1_i3 = document.createElement('i');
footer1_i3.textContent = "@";

footer1_div1.append(footer1_i1, footer1_a1);

footer1_div2.append(footer1_i2, footer1_a2);

footer1_div3.append(footer1_i3, footer1_a3);

footer1_child1.append(footer1_h1, footer1_div1, footer1_div2, footer1_div3);

let footer1_child2 = document.createElement('section');
let footer2_h1 = document.createElement('h1');
footer2_h1.textContent = "Profillərim";

let footer2_div1 = document.createElement('div');
let footer2_div2 = document.createElement('div');

let footer2_a1 = document.createElement('a');
footer2_a1.textContent = "VidadiAli";
footer2_a1.setAttribute("href", "https://github.com/VidadiAli")
let footer2_a2 = document.createElement('a');
footer2_a2.textContent = "TIVA";
footer2_a2.setAttribute("href", "https://vidadi-ali.com");

let footer2_i1 = document.createElement('i');
footer2_i1.setAttribute("class", "bx bxl-github");
let footer2_i2 = document.createElement('i');
footer2_i2.setAttribute("class", "bx bx-world");

footer2_div1.append(footer2_i1, footer2_a1);

footer2_div2.append(footer2_i2, footer2_a2);

footer1_child2.append(footer2_h1, footer2_div1, footer2_div2);

footer1_child_mother.append(footer1_child1, footer1_child2);

footer1.appendChild(footer1_child_mother);

let footer1_footer = document.createElement('section');

let footer3_h1 = document.createElement('h1');
footer3_h1.textContent = "Mənimlə əlaqə saxla";

let footer3_div1 = document.createElement('div');
let footer3_div2 = document.createElement('div');

let footer3_a1 = document.createElement('a');
footer3_a1.textContent = "+994 50 458 74 93";
footer3_a1.setAttribute("href", "https://wa.me/+994504587493")
let footer3_a2 = document.createElement('a');
footer3_a2.textContent = "vidadiali.tiva@gmail.com";
footer3_a2.setAttribute("href", "mailto:vidadiali.tiva@gmail.com");

let footer3_i1 = document.createElement('i');
footer3_i1.setAttribute("class", "bx bxl-whatsapp");
let footer3_i2 = document.createElement('i');
footer3_i2.setAttribute("class", "bx bxs-envelope");

footer3_div1.append(footer3_i1, footer3_a1);

footer3_div2.append(footer3_i2, footer3_a2);

footer1_footer.append(footer3_h1, footer3_div1, footer3_div2);

footer1.appendChild(footer1_footer);






const fixedMain1 = document.getElementsByClassName('main')[0];

const fixedMenu = document.createElement('ul');

listOfBox.forEach((e) => {
    const elementOfFixed = document.createElement('li');
    const linkOfElement = document.createElement('a');
    linkOfElement.setAttribute('href', e.linkOfBox);
    const iconOfElement = document.createElement('i');
    iconOfElement.setAttribute('class', e.iconOfBox);
    const textOfElement = document.createElement('span');
    textOfElement.textContent = e.nameOfBox;

    linkOfElement.append(iconOfElement, textOfElement);
    elementOfFixed.append(linkOfElement);
    fixedMenu.append(elementOfFixed);
})
fixedMain1.append(fixedMenu);