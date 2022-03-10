//could assign newNewsObject to a global variable
emptyArticleArray = []
console.log('emptyArticleArray', emptyArticleArray)
allKeywords = []
console.log(allKeywords)

//RIGHT SIDE!
const form = document.querySelector('form')
form.addEventListener('keyup', (e) => {
const searchString = e.target.value
console.log(searchString)
const filterNewsArray = emptyArticleArray.filter(newsStory => {
  return newsStory.keywords.includes(searchString)

})
aftersearch(filterNewsArray)
})

function aftersearch(searchedArray){
    let rightside = document.getElementById('rightside')
    rightside = render(searchedArray)
}



function makeArticle(story){
    (console.log(story))
    let h2Tag = document.createElement('h2')
    let articleTag = document.createElement('article') 
    articleTag.setAttribute('class', 'article-tags')  
    let aTag = document.createElement('a')
    let imgTag = document.createElement('img')
    articleTag.appendChild(h2Tag)
    aTag.appendChild(imgTag)
    articleTag.appendChild(aTag)
    h2Tag.appendChild(document.createTextNode(story.title))
    let href = document.createAttribute('href')
    href.value = story.url
    aTag.setAttributeNode(href)
    aTag.appendChild(imgTag)
    let src = document.createAttribute('src')
    src.value = story.image
    imgTag.setAttributeNode(src)
   allKeywords.push(story.keywords[0])
    // deepKeywordsArray.push(allKeywords)
    // deepKeywordsObj.push(story)
    // filterFunction(story)
    emptyArticleArray.push(story)


    //add comment and submit button
    let form = document.createElement('form')
    form.setAttribute('class', 'form')
   
   
    let commentBttn = document.createElement('button')
    let input = document.createElement('input')
    let likeBttn = document.createElement('button')
    let divContainer = document.createElement('div')
   divContainer.setAttribute('class', 'divcontainer')
    likeBttn.setAttribute('class', 'likebutton')
    likeBttn.innerText = 'Like ❤️'
    input.setAttribute('placeholder', 'Add a comment...')
    input.setAttribute('class', 'comment-input')
    commentBttn.innerText = 'Comment'
    form.append(input, commentBttn, likeBttn)
    articleTag.append(divContainer, form)
    form.addEventListener('submit', function (e){
        e.preventDefault()
        let pTag = document.createElement('p')
        pTag.textContent = input.value
        divContainer.append(pTag)
        
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

 
})
}

function render(newsObj) {
    let container = document.getElementById('rightside')
    newsObj.forEach((story) => {
        container.appendChild(makeArticle(story))
        // console.log(story.keywords)
        
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
        // globalKeywordsVariable = myNewCnnObj[0].keywords
       
        renderLeftSide(myNewCnnObj)

        })
    

        function renderLeftSide(newsObj) {
            let container = document.getElementById('leftside')
            newsObj.forEach((story) => {
                container.appendChild(makeArticle(story))
                
            })
         }      
}






renderCnn()
renderFox()
