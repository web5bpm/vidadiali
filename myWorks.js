const mainWorks = document.getElementsByClassName('main1')[0];
const mainWorksHead = document.createElement('h1');
mainWorksHead.textContent = "Ən son işlərim";

const mainWorksBody = document.createElement('div');

listOfWorks.forEach((e) => {
    const mainWorksBodyElement = document.createElement('a');
    mainWorksBodyElement.setAttribute('href', e.linkOfWorks);
    mainWorksBodyElement.setAttribute('target', "_blank");
    mainWorksBodyElement.setAttribute('class', 'works-box');
    const mainWorksBodyElementIframe = document.createElement('iframe');
    mainWorksBodyElementIframe.setAttribute('src', e.linkOfWorks);

    mainWorksBodyElement.append(mainWorksBodyElementIframe);
    mainWorksBody.append(mainWorksBodyElement);

})

mainWorks.append(mainWorksHead, mainWorksBody);
const worksBox = document.getElementsByClassName('works-box')
for (let i = 0; i < listOfWorks.length; i++) {
    worksBox[i].style.height = worksBox[i].offsetWidth  - 40 + "px";
}
