document.addEventListener('DOMContentLoaded', (e) => {

    const form = document.getElementById('comment-section')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e)
        const nameInput = document.getElementById('nameInput').value
        const newName = document.createElement('p')
        newName.textContent = nameInput;
        const input = document.getElementById('commentInput').value
         const newComment = document.createElement('p');
        newComment.textContent = nameInput + ': ' + input;
        const container = document.getElementById('comment-container')
        container.append(newComment)
        form.reset(nameInput, input)
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = ' x '
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
            
        })
        newComment.append(deleteBtn)
        
        })
    
    })

    renderFox();
    renderCnn();
    renderBbc();
    renderTrend();
    
    
   const left = document.getElementById('leftside')
   const right = document.getElementById('rightside')
   


   function renderFox (news){
   fetch('https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
    .then(res => res.json())
    .then(news => {
        const button = document.getElementById('fox') 
        button.addEventListener('click', () => {
            console.log(news)
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
        img.style.width = '800px';
        img.style.height = '400px';
        img.style.padding = '0px 150px 0px 100px'
        const link = document.createElement('a')
            link.textContent = 'Link to Article'
            link.href = i.url
        desc.append(link)
        right.append(author, title, desc, img, date)
    })}
)}

    function renderCnn (news){
        fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
         .then(res => res.json())
         .then(news => {
            const button = document.getElementById('cnn') 
            button.addEventListener('click', () => {
            let newsArr = news.articles
             let i = newsArr[Math.floor(Math.random()* 10)]; //iterates through object to produce a random 
            console.log(i)
            const title = document.createElement('h4')
            title.textContent = i.title
            const date = document.createElement('h5')
            date.textContent = i.publishedAt
            const desc = document.createElement('p')
            desc.textContent = i.description
            const link = document.createElement('a')
            link.textContent = 'Link to Article'
            link.href = i.url
            const img = document.createElement('img')
            img.src = i.urlToImage
            img.style.width = '800px';
            img.style.height = '400px';
            img.style.padding = '0px 150px 0px 100px'
            desc.append(link)
            left.append(title, desc, img, date)
             
             console.log(news)
            })
        })
    }
        function renderBbc (news) {
        const button = document.getElementById('bbc') 
        button.addEventListener('click', () => {
               fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
               .then(res => res.json())
               .then(news => {
                let newsArr = news.articles  
                console.log(news)              
                 let i = newsArr[Math.floor(Math.random()* 10)]; //iterates through object to produce a random 
                console.log(i)
               const title = document.createElement('h4')
                title.textContent = i.title
                const desc = document.createElement('p')
                desc.textContent = i.description
                const link = document.createElement('a')
                link.textContent = 'Link to Article'
                link.href = i.url
                const img = document.createElement('img')
                img.src = i.urlToImage
                img.style.width = '800px';
                img.style.height = '400px';
                img.style.padding = '0px 150px 0px 100px'
                desc.append(link)
                left.append(title, desc, img)
               })

            })     
        }     

function renderTrend (news) {
    const button = document.getElementById('trending') 
    button.addEventListener('click', () => {
           fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2a61e83cb0f542c7aa6a93568b9717d5')
           .then(res => res.json())
           .then(news => {
               console.log(news)
            let newsArr = news.articles                
             let i = newsArr[Math.floor(Math.random()* 20)]; //iterates through object to produce a random 
            console.log(i)
            const title = document.createElement('h4')
            title.textContent = i.title
            const desc = document.createElement('p')
            desc.textContent = i.description
            const link = document.createElement('a')
            link.textContent = 'Link to Article'
            link.href = i.url
            const img = document.createElement('img')
            img.src = i.urlToImage
            img.style.width = '800px';
            img.style.height = '400px';
            img.style.padding = '0px 150px 0px 100px'
            desc.append(link)
            right.append(title, desc, img)
           })
           
        })     
    }

   