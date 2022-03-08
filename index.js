//could assign newNewsObject to a global variable
const form = document.querySelector('form')
form.addEventListener('keyup', (e) => {
const searchString = e.target.value
console.log(searchString)
story.keywords.includes(searchString)
});

   
// const filtered

// console.log(foxNewsKeywords)
// let deepKeywordsObj = {}
// console.log(deepKeywordsObj)
// console.log(deepKeywordsArray)
let makeTheArticle = {}
console.log(makeTheArticle)
    



//TRYING A FILTER FUNCTION

// function filterFunction(story){
    
//     story.keywords.filter(word => {
//         word.includes(form)
//         console.log(word)
//     })
// }

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
    // let allKeywords = story.keywords
    // deepKeywordsArray.push(allKeywords)
    // deepKeywordsObj.push(story)
    // filterFunction(story)
    console.log(story)
    return articleTag
    
 }



function renderFox(){
    fetch("./db.json")
.then(response => response.json())
.then(newsData => { console.log(newsData)

    let foxNewsStory = newsData[0].data
    // console.log(foxNewsStory)
    let newFoxNewsObject = foxNewsStory.map((story) => ({
        "title": story.title,
        "url": story.url,
        "image": story.image,
        "keywords": story.deep_keywords,

    }))
    // deepKeywordsObj

    render(newFoxNewsObject)

 function render(newsObj) {
    let container = document.getElementById('rightside')
    newsObj.forEach((story) => {
        container.appendChild(makeArticle(story))
        // console.log(story.keywords)
        
    })
 }  
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
