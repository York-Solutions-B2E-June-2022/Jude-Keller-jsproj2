

/*Links headers names in html to JS*/
let IP = document.querySelector(".IP")
let HTTP_Header = document.querySelector(".HTTP_Header")
let Time_Date = document.querySelector(".Time_Date")
let Valid_JSON = document.querySelector(".Valid_JSON")
let MD5 = document.querySelector(".MD5")

/*function to get IP address from console*/
async function getIP() {
    const url = "http://ip.jsontest.com/";
    let response = await fetch(url)
         // if (!response.ok) {
         //     throw "Error";
         // }
          //return await response.json();
    let data = await response.json()
    return data.ip
    console.log(data.ip)
}
//getIP()

/* access by using keys to pull data from the console to webpage*/
async function displayHTTP() {
  let url = 'http://headers.jsontest.com/'
     let response = await fetch(url)
    //  if (!response.ok) {
    //      throw "Error";
    //  }
  // return await response.json();
   let data = await response.json()
   //console.log(data.headers)
   return data

}

/*function to turn object to string for HTTP headers*/
function objectString(displayHTTP){
    let str = "<table>Accept-Language: 'en-US, en; q=0.9'<tbody>"
    for (let key in displayHTTP){
        str += `<tr> "<td>${key}:</td><td>${displayHTTP[key]}</td></tr>`
    }
    str += "</tbody></table>"
    return str
}


async function timeDate(){
    let url = 'http://time.jsontest.com'
    let response = await fetch(url)
    let data = await response.json()
    return data.time
   // console.log(data)

}
//timeDate()

async function testJson(){
let url = 'http://echo.jsontest.com/insert-key-here/insert-value-here/key/value'
let response = await fetch(url)
let data = await response.json()
return data
//console.log(data)
}
testJson()

async function md5(){
let url = 'http://md5.jsontest.com/?text=example_text'
    let response = await fetch(url)
    let data =await response.json()
    return data
    console.log(data)
}
md5()

/*calls all the functions to display on webpage*/
async function Update(){
    IP.innerHTML = await getIP()
    HTTP_Header.innerHTML = objectString(await displayHTTP())
    Time_Date.innerHTML = await timeDate()
    Valid_JSON.innerHTML = "Allow user to submit any text and check to see if its valid JSON"
    MD5.innerHTML = "Allow the user to submit some text, and calculate the MD5"
}

Update()