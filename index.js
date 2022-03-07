
   const left = document.getElementById('leftside')
   const right = document.getElementById('rightside')
   

   function renderFox (news){
   fetch('https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
    .then(res => res.json())
    .then(news => {
        let newsArr = news.articles 
        let i = newsArr[Math.floor(Math.random()* 10)]; 
        const author = document.createElement('h3')
        author.textContent = i.author
        const title = document.createElement('h4')
        title.textContent = i.title
        const date = document.createElement('h5')
        date.textContent = i.publishedAt
        const desc = document.createElement('p')
        desc.textContent = i.description
        const img = document.createElement('img')
        img.src = i.urlToImage
        right.append(author, title, desc, img, date)
    }
)}

    function renderCnn (news){
        fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
         .then(res => res.json())
         .then(news => {
            let newsArr = news.articles
            //  newsArr.push(news.articles)
            // console.log('fetch', newsArr)
             let i = newsArr[Math.floor(Math.random()* 10)]; //iterates through object to produce a random 
            console.log(i)
            const title = document.createElement('h4')
            title.textContent = i.title
            const desc = document.createElement('p')
            desc.textContent = i.description
            const img = document.createElement('img')
            img.src = i.urlToImage
            img.setAttribute = ('width', '400');
            img.setAttribute = ('height', '400px');
            left.append(title, desc, img)
             
             console.log(news)
             })
         }
document.addEventListener('DOMContentLoaded', () => {
    renderFox();
    renderCnn();
})
    