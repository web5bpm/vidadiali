const section1 = document.getElementsByClassName('carosel-page')[0];

for (let i = 0; i < listOfText.length; i++) {

    let div = document.createElement('div');
    div.setAttribute('class', 'carosel-image');

    let image = document.createElement('img');
    image.setAttribute('src', listOfText[i].carosel_img);
    image.setAttribute('class', 'carosel-images')

    let div_text = document.createElement('div');
    div_text.setAttribute('class', 'carosel-text');

    let h1 = document.createElement('h1');
    h1.textContent = listOfText[i].text_head;

    let p = document.createElement('p');
    p.textContent = listOfText[i].text_phraise;

    let button = document.createElement('a');
    button.textContent = listOfText[i].text_button;
    button.setAttribute('href', listOfText[i].text_link);
    button.setAttribute('target', '_blank');


    div_text.append(h1, p, button);
    div.appendChild(image);
    section1.append(div, div_text);
}


let carosel_elements = document.getElementsByClassName('carosel-image'), carosel_text = document.getElementsByClassName('carosel-text'),
    carosel_images = document.getElementsByClassName('carosel-images');

setInterval(time1, 10000);
let b1 = 0, b2 = 100, b3 = 200, j = 0;
window.onload = function () {
    carosel_text[0].style.transform = "translateY(0%)";
    carosel_images[2].style.scale = "1";
}
function time1() {
    carosel_elements[0].style.left = b1 + "%";
    carosel_elements[1].style.left = b2 + "%";
    carosel_elements[2].style.left = b3 + "%";
    b1 -= 100;
    b2 -= 100;
    b3 -= 100;

    if (b1 == -200) {
        carosel_elements[0].style.opacity = "0";
        b1 = 100;
        setTimeout(zaman2, 15000);
        function zaman2() {
            carosel_elements[0].style.opacity = "1";
        }
    }

    if (b2 == -200) {
        carosel_elements[1].style.opacity = "0";
        b2 = 100;
        setTimeout(zaman2, 15000);
        function zaman2() {
            carosel_elements[1].style.opacity = "1";
        }
    }

    if (b3 == -200) {
        carosel_elements[2].style.opacity = "0";
        b3 = 100;
        setTimeout(zaman2, 15000);
        function zaman2() {
            carosel_elements[2].style.opacity = "1";
        }
    }

    carosel_text[j].style.transform = "translateY(100%)";
    carosel_images[j].style.scale = "1";

    setTimeout(zaman3, 1000);
    function zaman3() {
        carosel_text[j].style.transform = "translateY(0%)";
        carosel_images[j].style.scale = "1.5";
    }
    j++;
    if (j == 3) {
        j = 0;
    }
}



/* ----------------------------------- Scrol - Animation --------------------------------*/




function scrolAnimation(value1, value2) {
    const scrolEvent = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(value1);
            } else {
                entry.target.classList.remove(value1);
            }
        });
    });

    const hidden = document.querySelectorAll(value2);
    hidden.forEach((change) => scrolEvent.observe(change));
}




const section2 = document.getElementsByClassName('main-menu1')[0];
const education = document.createElement('div');

for (let i = 0; i < listOfBox.length; i++) {
    let education_child = document.createElement('div');
    education_child.className = "education-front hidden";
    const head1 = document.createElement('h2');
    head1.textContent = listOfBox[i].headOfBox;
    const span1 = document.createElement('span');
    span1.textContent = listOfBox[i].line1OfBox;
    const span2 = document.createElement('span');
    span2.textContent = listOfBox[i].line2OfBox;
    const link1 = document.createElement('a');
    link1.textContent = "ətraflı öyrən";
    link1.setAttribute("href", listOfBox[i].linkOfBox);
    link1.className = "a-link";
    const photo = document.createElement('img');
    photo.setAttribute('src', listOfBox[i].photoOfBox)

    education_child.append(head1, span1, span2, link1, photo);

    education.appendChild(education_child);
}

section2.appendChild(education);

section2.onclick = function (e) {
    if (e.target.className == "a-link") {
        if (e.target.getAttribute("href") == "") {
            alert("Bu səhifə hələki mövcud deyil");
        }
    }
}

scrolAnimation('show', '.hidden');

let section3 = document.getElementsByClassName('news')[0];
let section3_child = document.createElement('section');


listOfBaza.forEach((e, i = 0) => {
    if (i < 5) {
        const news_box = document.createElement('div');
        if (i % 2 == 0) {
            news_box.className = "news-box hidden-news1";
        }
        else {
            news_box.className = "news-box hidden-news2";
        }
        const news_box_child1 = document.createElement('div');

        const news_profile = document.createElement('img');
        news_profile.setAttribute('src', e.NewsCover);
        const news_name = document.createElement('h1');
        news_name.textContent = e.NewsName;

        const paragraf = document.createElement('p');
        paragraf.innerHTML = e.NewsParagraf;

        const linkofNews = document.createElement('a');
        linkofNews.textContent = "Oxumağa davam et";
        linkofNews.setAttribute('href', `news.html#${e.NewsName}`);

        news_box_child1.append(news_name, news_profile);
        news_box.append(news_box_child1, paragraf, linkofNews);

        section3_child.appendChild(news_box);
    }
});

section3.appendChild(section3_child);

scrolAnimation('show-news', '.hidden-news1');
scrolAnimation('show-news', '.hidden-news2');