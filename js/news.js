const loadNewsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNewsCategory(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}

const displayNewsCategory = newsCategory => {
    // console.log(newsCategory[0].category_name);
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
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error))
}

const displayNews = display => {
<<<<<<< HEAD
=======
    // console.log(display[0])
    // modal 
    const modalNews = document.getElementById('newsModalLabel');
    modalNews.innerText = display[0].title;

    // const modalBody = document.getElementById('modal-body');
    // modalBody.innerHTML = `
    //     <p> Author: ${display[0].author.name} </p>
    // `;
>>>>>>> 0a184571d0d35152da25c166844f6f0e31d14122

    const newsDisplay = document.getElementById('news-display');
    newsDisplay.innerHTML = '';

    // total news items 
    const newsItems = document.getElementById('news-items');
    newsItems.innerText = display.length ? display.length : 'No';

    // sort by total view
    display.sort((a, b) => b.total_view - a.total_view);

    display.forEach(news => {
        console.log(news)

        // modal
<<<<<<< HEAD
        const modalNews = document.getElementById('newsModalLabel');
        modalNews.innerText = display[0].title;

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <p>${news.details} </p>
            <p> Author: ${news.author.name ? news.author.name : 'No Author'} </p>
            <img src="${news.author.img}" class="img-fluid w-50 h-70 rounded-start" alt="...">
            <p> Publish Date: ${news.author.published_date ? news.author.published_date : 'No Date'} </p>
            <p> Total View: ${news.total_view ? news.total_view : 'No View'} </p>
            <p> Total View: ${news.rating.number ? news.rating.number : 'No Rating'} </p>
=======

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <p> Author: ${news.author.name} </p>
>>>>>>> 0a184571d0d35152da25c166844f6f0e31d14122
        `;

        const div = document.createElement('news-display');
        div.classList.add('card');
        div.innerHTML = ` 
            <div class="card m-4 border-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid h-100 w-100 rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 ps-3">
                        <div class="card-body">
                            <h5 class="card-title my-5">${news.title}</h5>
                            <p class="card-text mb-5">${news.details.slice(0, 400) + ' ... '}</p>
                            <div class="container text-center">
                                <div class="row mt-5">
                                    <div class="col-6">
                                        <div class="container text-center">
                                            <div class="row">
                                                <div class="col">
                                                    <img src="${news.author.img}" class="img-fluid w-50 h-70 rounded-start" alt="...">
                                                </div>
                                                <div class="col">
                                                <h6>${news.author.name ? news.author.name : 'No Author'}</h6>
                                                <p> ${news.author.published_date ? news.author.published_date : 'No Date'}</P>
                                                </div>               
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col">
                                        <p> <i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : 'No View'} </p>
                                    </div>
                                    <div class="col">
                                        <p> ${news.rating ? news.rating.number : " No Rating"} </p>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">
                                        Details
                                        </button>
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

    // stop spiner 
    toggleSpinner(false)
}


const toggleSpinner = isLoading => {
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}


loadNewsCategory();