const loadNewsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategory(data.data.news_category);
}

const displayNewsCategory = newsCategory => {
    // console.log(newsCategory);
    const navbarContainer = document.getElementById('navbar-container');
    newsCategory.forEach(news => {
        // console.log(news);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <li class="nav-item">
        <button onclick="loadNewsId('${news.category_id}')" type="button" class="btn btn-light">${news.category_name}</button>           
        </li>
        `;
        navbarContainer.appendChild(li);
    })
}

const loadNewsId = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = display => {
    // console.log(display)
    const newsDisplay = document.getElementById('news-display');
    newsDisplay.innerHTML = '';

    display.forEach(news => {
        console.log(news)
        const div = document.createElement('news-display');
        div.classList.add('card');
        div.innerHTML = ` 
            <div class="card m-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.image_url}" class="img-fluid h-100 rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details.slice(0, 400) + ' ... '}</p>
                            <div class="container text-center">
                                <div class="row mt-5">
                                    <div class="col-6">
                                        <div class="container text-center">
                                            <div class="row">
                                                <div class="col">
                                                    <img src="${news.author.img}" class="img-fluid w-50 h-70 rounded-start" alt="...">
                                                </div>
                                                <div class="col">
                                                <h6>${news.author.name}</h6>
                                                <p> ${news.author.published_date}</P>
                                                </div>               
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col">
                                        <p> <i class="fa-regular fa-eye"></i> ${news.total_view} </p>
                                    </div>
                                    <div class="col">
                                        <p> ${news.rating ? news.rating.number : " No Rating"} </p>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-outline-primary">Details</button>
                                    </div>
                                </div>
                                </div>
                             </div>
                    </div>
                </div>
            </div> 
        `;
        newsDisplay.appendChild(div);
    })

}

loadNewsCategory();