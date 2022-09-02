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
        console.log(news);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <li class="nav-item">
        <button type="button" class="btn btn-light">${news.category_name}</button>           
        </li>
        `;
        navbarContainer.appendChild(li);
    })
}

// all news category ID details



loadNewsCategory();