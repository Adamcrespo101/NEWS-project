foxNewsSearchArray = []
cnnNewsSearchArray = []

 
//RIGHT SIDE! FOX
const form = document.querySelector('form')
form.addEventListener('keyup', (e) => {
const searchString = e.target.value
// console.log(searchString)
let container = document.getElementById('rightside')
let currentArticles = container.querySelectorAll('article')
currentArticles.forEach((article) => article.remove())
const filterNewsArray = foxNewsSearchArray.forEach(newsStory => {
    newsStory.forEach((story) => {
       let whatIWant = story.keywords
       if (whatIWant.includes(searchString)){
           container.appendChild(makeArticle(story))
       }
    })
})
        
})

//LEFT SIDE event listener! CNN
form.addEventListener('keyup',(e) => {
    const searchString = e.target.value
    let container = document.getElementById('leftside')
    let currentArticles = container.querySelectorAll('article')
    currentArticles.forEach((article) => article.remove())
    const filterNewsArray = cnnNewsSearchArray.forEach(newsStory => {
        newsStory.forEach((story) => {
           let whatIWant = story.keywords
           if (whatIWant.includes(searchString)){
               container.appendChild(makeArticle(story))
           }
        })
    })
})

function makeArticle(story){
    // console.log(story)
    // create set up 
    let h3Tag = document.createElement('h3')
    let articleTag = document.createElement('article') 
    articleTag.setAttribute('class', 'article-tags')  
    let aTag = document.createElement('a')
    let imgTag = document.createElement('img')
    articleTag.appendChild(h3Tag)
    aTag.appendChild(imgTag)
    articleTag.appendChild(aTag)
    h3Tag.appendChild(document.createTextNode(story.title))
    let href = document.createAttribute('href')
    href.value = story.url
    aTag.setAttributeNode(href)
    aTag.appendChild(imgTag)
    let src = document.createAttribute('src')
    src.value = story.image
    imgTag.setAttributeNode(src)

    //add comment and submit button
    let form = document.createElement('form')
    form.setAttribute('class', 'form')
   
   
    let commentBttn = document.createElement('button')
    let input = document.createElement('input')
    
    let likeBttn = document.createElement('button')
    let divContainer = document.createElement('div')
    let likeContainer = document.createElement('div')//
    likeContainer.className = 'likes'
    let likes = Math.floor(Math.random()* 10000);//
    likes.className = 'likes'//
    likeContainer.textContent = 'Likes: ' + likes;//
    //.append(likeBttn)
    
    likeBttn.addEventListener('click', () => { //
        likeContainer.textContent = 'Likes: ' + likes; //         
        likes++; //
       
    })
   divContainer.setAttribute('class', 'divcontainer')
    likeBttn.setAttribute('class', 'likebutton')
    likeBttn.innerText = '❤️'
    input.setAttribute('placeholder', 'Add a comment...')
    input.setAttribute('class', 'comment-input')
    let nameInput = document.createElement('input') //
    nameInput.setAttribute('placeholder', 'Name...') //
    nameInput.setAttribute('class', 'name-input')//
    commentBttn.innerText = 'Comment'
    articleTag.append(likeBttn, likeContainer)
    form.append(nameInput, input, commentBttn)
    articleTag.append(divContainer, form) //
    form.addEventListener('submit', function (e){ //
        e.preventDefault()
        if (nameInput.value === ''){
            return alert('please enter a name')
        } else {
            let pTag = document.createElement('p')
            pTag.textContent = `${nameInput.value}: ${input.value}`
            divContainer.append(pTag)
            form.reset(nameInput, input)
            
        }
       
        
        // divContainer.append(form)
        // divContainer.append(pTag)
       
        // form.reset(commentInput)
       

        
    })
    // likeBttn.addEventListener()

   
    return articleTag
    
 }



function renderFox(){
    fetch("./db.json")
.then(response => response.json())
.then(newsData => { console.log(newsData)

    let foxNewsStory = newsData[0].data
    let newFoxNewsObject = foxNewsStory.map((story) => ({
        "title": story.title,
        "url": story.url,
        "image": story.image,
        "keywords": story.deep_keywords,

    }))

    render(newFoxNewsObject)
    foxNewsSearchArray.push(newFoxNewsObject)
 
})
}

function render(newsObj) {
    let container = document.getElementById('rightside')
    newsObj.forEach((story) => {
        container.appendChild(makeArticle(story)) 
    })
 }  

function renderCnn(){
    fetch("./db.json-2")
    .then(response => response.json())
    .then(data => {
        let eachCnnStory = data[0].data
        console.log(eachCnnStory)
       let myNewCnnObj = eachCnnStory.map((story) => ({
            "image": story.image,
            "keywords": story.deep_keywords,
            "title": story.title,
            "url": story.url,
        }))
        cnnNewsSearchArray.push(myNewCnnObj)
        renderLeftSide(myNewCnnObj)
        
        })
    }
    

        function renderLeftSide(newsObj) {
            let container = document.getElementById('leftside')
            newsObj.forEach((story) => {
                container.appendChild(makeArticle(story))
                
            })
         }      




renderCnn()
renderFox()
