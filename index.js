//could assign newNewsObject to a global variable
function makeArticle(story){
    let h2Tag = document.createElement('h2')
    let articleTag = document.createElement('article')   
    let aTag = document.createElement('a')
    let imgTag = document.createElement('img')
    articleTag.appendChild(h2Tag)
    aTag.appendChild(imgTag)
    articleTag.appendChild(aTag)
    h2Tag.appendChild(document.createTextNode(story.title))
    let urlAttribute = document.createAttribute('href')
    urlAttribute.value = story.url
    aTag.setAttributeNode(urlAttribute)
    aTag.appendChild(imgTag)
    let src = document.createAttribute('src')
    src.value = story.image
    imgTag.setAttributeNode(src)
    return articleTag
 }


function renderFox(){
    fetch("./db.json")
.then(response => response.json())
.then(newsData => { console.log(newsData)

    let foxNewsStory = newsData[0].data
    console.log(foxNewsStory)
    let newNewsObject = foxNewsStory.map((story) => ({
        "title": story.title,
        "url": story.url,
        "image": story.image,
        "keywords": story.deep_keywords

    }))
console.log(newNewsObject)
    render(newNewsObject)

 

 function render(newsObj) {
    let container = document.getElementById('rightside')
    newsObj.forEach((story) => {
        container.appendChild(makeArticle(story))
        
    })
 }



// const form = document.querySelector('query')
// form.addEventListener('keyup', (e) => console.log(e))
    
})
}

renderFox()


function renderCnn(){
    fetch("./db.json-2")
    .then(response => response.json())
    .then(data => {
        let eachCnnStory = data[0].data
        console.log(eachCnnStory)
        eachCnnStory.map((story) => ({
            "image": eachCnnStory.image,
            "keywords": eachCnnStory.deep_keywords,
            "title": eachCnnStory.title,
            "url": eachCnnStory.url
        }))
        renderLeftSide(eachCnnStory)

        })
    

        function renderLeftSide(newsObj) {
            let container = document.getElementById('leftside')
            newsObj.forEach((story) => {
                container.appendChild(makeArticle(story))
                
            })
         }      
}

renderCnn()