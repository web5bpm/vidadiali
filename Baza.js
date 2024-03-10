
let listOfText = [
    {
        text_head: "Sən də proqramlaşdırmaya başla.",
        text_phraise: "İxtiyarı yaş qrupları üzrə front-end proqramlaşdırma sahəsində dərslərimiz mümkündür. Sən də bizə qoşul, sən də mütəxəssis ol",
        text_button: "Ətraflı",
        text_link: "educate.html",
        carosel_img: "image/article.jpg"
    },
    {
        text_head: "Texnologiya, Kainat, Təbiət",
        text_phraise: "Əgər bunlar sənə də maraqlıdırsa, bağlantı ilə keçid edərək, dünyada baş verən ən önəmli hadisələr haqqında oxuya bilərsən",
        text_button: "Oxumağa get",
        text_link: "news.html",
        carosel_img: "image/infor.jpg"
    },
    {
        text_head: "Yanlış metod səni yorub?",
        text_phraise: "O zaman tələs. İnformatika fənnini ən düzgün şəkildə öyrənib, qəbulda yüksək nəticə istəyirsənsə, sən də bizə qoşul",
        text_button: "Elə indi öyrən",
        text_link: "educate.html",
        carosel_img: "image/web.jpg"
    }
];



let listOfBox = [
    {
        headOfBox: "Elə indi web proqramlaşdırmaya başla",
        line1OfBox: "Həm online, həm də ənənəvi üsulla sən də bizə qoşul",
        line2OfBox: "Birgə öyrənək!",
        linkOfBox: "educate.html",
        photoOfBox: "image/webCover1.jpeg",
        iconOfBox: 'bx bxs-graduation',
        nameOfBox: 'Təhsil'
    },
    {
        headOfBox: "Ən son proyektlərim",
        line1OfBox: "Keçid edərək, ən son proyektlərimi görə bilərsən",
        line2OfBox: "məni araşdır!",
        linkOfBox: "myWorks.html",
        photoOfBox: "image/web.jpg",
        iconOfBox: 'bx bxs-briefcase-alt-2',
        nameOfBox: 'Proyektlərim'
    },
    {
        headOfBox: "Dünyada baş verənlər sənə də maraqlıdır?",
        line1OfBox: "O zaman keçid et, ən son hadisələrlə bağlı fikirlərimizi öyrən!",
        line2OfBox: "Birgə araşdıraq!",
        linkOfBox: "news.html",
        photoOfBox: "image/ArticleCover1.jpeg",
        iconOfBox: 'bx bxs-edit-alt',
        nameOfBox: 'Yazılarım'
    },
    {
        headOfBox: "Kitab açılmayan qəlblərin aynasıdır",
        line1OfBox: "Həm Azərbaycan, həm də Dünya ədəbiyyatı ilə tanış ol, dünyagörüşünü artır",
        line2OfBox: "Birgə oxuyaq!",
        linkOfBox: "book.html",
        photoOfBox: "image/bookCover1.jpeg",
        iconOfBox: 'bx bxs-book-open',
        nameOfBox: 'Oxuyaq?'
    },
    {
        headOfBox: "İzləməyə film axtarırsan?",
        line1OfBox: "O zaman ən düzgün ünvandasan. Elə indi keçid et, ən son film və seriallarla tanış ol!",
        line2OfBox: "Birgə izləyək!",
        linkOfBox: "",
        photoOfBox: "image/FilmCover1.jpeg",
        iconOfBox: 'bx bx-film',
        nameOfBox: 'İzləyək?'
    }
];




let listOfBaza = [
    {
        tema: 'nature',
        NewsName: "Hindistan Ayda!",
        NewsDate: "23-08-2023",
        NewsWriter: "Vidadi Ali",
        NewsCover: "image/hindistan ayda.png",
        NewsParagraf: `<a href='https://www.isro.gov.in/Chandrayaan3.html' target='_blank'>Chandrayaan-3</a> programı - Hindistanın ən yeni və uğurlu nəticə verən Ay Kəşfi üçün vəzifələnmiş programadır. Bundan əvvəl də 
            <a href='https://www.isro.gov.in/' target='_blank'>ISRO</a> (Hindistan Kosmik Araştırma Mərkəzi) - tərəfindən 2 dəfə bu proqram gerçəkləşdirilmək üzrə planlaşdırılmışdı. Lakin bəzi əskikliklər ucbatından uğurlu nəticə əldə oluna bilinməmişdi. Amma Chandrayaan-3 programı vasitəsi ilə nəhayət ki, Hindistan bunu bacardı. Və beləcə Aya kosmik gəmi göndərən dördüncü ölkə oldu.
              İnsan övladı bundan əvvəl ki, 3 uçuş zamanı Ayın ancaq görünən hissəsində fəaliyyət göstərə bilmişdi. Amma Hindistan isə Ayın görünməyən tərəfinə ilk uçuş edən ölkə oldu. Bir sözlə Ayın qaranlıq, heç vaxt Günəş işığı almayan üzü.<br><br>
            Bir ilkə imza atan Hindistan Kosmik Agentliyinin Chandrayaan-3 ün Vikram gəmisi ilə yerinə yetirdiyi bu enişin 3 əsas vəzifəsinə aşağıda diqqət edək<br><br>
            1. Aya yumşaq eniş: Ayın cənub qütbündə yumşaq eniş <br>
            2. Rover Delivery: Ayın səthini araşdırmaq üçün bir rover, yəni araşdırma maşınının göndərilməsi. <br>
            3. Elmi Tədqiqat: Ayın geoloji quruluşunu, mineral tərkibini və atmosfer xüsusiyyətlərini tədqiq edən elmi təcrübələrin aparılması.<br>
             Bununla artıq Hindistan Kosmik alanda müəyyən mövqe tutan və bütün kosmik araşdırmalarda başlıca rol oynayan bir dövlətə çevrildi.
             Eniş zamanı təqdim olunan canlı yayımda Hindistanın baş naziri <a href='https://tr.wikipedia.org/wiki/Narendra_Modi'>Narendra Modi</a>nin çıxış etməsi baş tutan bu inkişafın Hindistan üçün bir çox tərəfdən, həmçinin, siyasi olaraq da çox mühim olmasının göstəricisi idi. `
    },
    {
        tema: 'book',
        NewsName: "Heyvan Ferması",
        NewsDate: "01-03-2024",
        NewsWriter: "George Orwell",
        NewsCover: "image/heyvan fermasi.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Şirin portağal ağacım",
        NewsDate: "01-03-2024",
        NewsWriter: "Joze Mauru di Vaskonselos",
        NewsCover: "image/shirin portagal agaci.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Balaca Şəhazdə",
        NewsDate: "01-03-2024",
        NewsWriter: "Antuan de Sent-Ekzüperi",
        NewsCover: "image/balaca shehzade.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Mən Meymunam?",
        NewsDate: "01-03-2024",
        NewsWriter: "Fransisko Ayala",
        NewsCover: "image/men meymunam.png",
        NewsParagraf: ``
    },
    {
        tema: 'film',
        NewsName: "Dune 2",
        NewsDate: "23-08-2023",
        NewsWriter: "Frank Herbert",
        NewsCover: "image/dune.png",
        NewsParagraf: ``
    }
];
listOfBaza.reverse()
let listOfBook = [], listOfFilm = [], listOfBaza1 = [];
listOfBaza.forEach((e) => {
    listOfBaza1.unshift(e);
    if (e.tema === 'book') {
        listOfBook.push(e);
    }
    else if (e.tema === 'film') {
        listOfFilm.push(e);
    }
});




const listOfWorks = [
    {
        linkOfWorks: 'https://artcenter.az',
    },
    {
        linkOfWorks: 'https://fline.az',
    },
    {
        linkOfWorks: 'https://orkhan-alibayli.com',
    }
]