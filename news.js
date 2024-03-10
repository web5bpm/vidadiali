const all_news=document.getElementsByClassName('all-news')[0];

listOfBaza1.forEach((e)=>{
    const h_1=document.createElement('h1');
    h_1.textContent=e.NewsName;
    h_1.setAttribute('id', e.NewsName)

    const div_UD=document.createElement('div');

    const div_user=document.createElement('div');
    const user_icon=document.createElement('i');
    user_icon.className="bx bx-user";
    const user_span=document.createElement('span');
    user_span.textContent=e.NewsWriter;
    div_user.appendChild(user_icon);
    div_user.appendChild(user_span);
    
    const div_date=document.createElement('div');
    const date_icon=document.createElement('i');
    date_icon.className="bx bx-calendar-alt";
    const date_span=document.createElement('span');
    date_span.textContent=e.NewsDate;
    div_date.appendChild(date_icon);
    div_date.appendChild(date_span);

    div_UD.appendChild(div_user);
    div_UD.appendChild(div_date);

    const News_Cover=document.createElement('img');
    News_Cover.setAttribute('src', e.NewsCover)

    const MainNews=document.createElement('p');
    MainNews.innerHTML=e.NewsParagraf;

    const all_news_child=document.createElement('section');
    all_news_child.appendChild(h_1);
    all_news_child.appendChild(div_UD);
    all_news_child.appendChild(News_Cover);
    all_news_child.appendChild(MainNews);

    all_news.appendChild(all_news_child);
})