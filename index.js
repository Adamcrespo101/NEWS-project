//could assign newNewsObject to a global variable
emptyArticleArray = []
console.log('emptyArticleArray', emptyArticleArray)
allKeywords = []
console.log(allKeywords)


const form = document.querySelector('form')
form.addEventListener('keyup', (e) => {
const searchString = e.target.value
console.log(searchString)
const filterNewsArray = emptyArticleArray.filter(newsStory => {
  return newsStory.keywords.includes(searchString)

})
aftersearch(filterNewsArray)
})

function aftersearch(searchArray){
    console.log(searchArray)
}

// send to a new function that removes previous articles and replaces with this new filteres news array

// console.log(filterAllKeywords)



// const keyword = allKeywords.filter(word => {
   
//         if (word == searchString) {
//             console.log('keyword exists')
//         } else {
//             console.log('no match')
//         }
      
//     })
    // if (keyword.includes(searchString)){
    //     console.log('yay')
    // }
    // console.log(keyword.toString())

// console.log('HERE',typeof keyword)
    // if (allKeywords[0].includes(searchString)){
    //     console.log('hi')
    // }
    // else{
    //     console.log('did not work')
    // }

// console.log(searchString)

// const filteredKeywords = emptyArticleArray.filter(array => {
//     // console.log(array.keywords)
//     console.log(array.keywords)
//     if(searchString == allKeywords){
//         // makeArticle(filteredKeywords)
//         console.log('hi')
//     }
// })


    




    



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
