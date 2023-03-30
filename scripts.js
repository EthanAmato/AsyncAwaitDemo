// Promises in Javascript

let URL = "https://jsonplaceholder.typicode.com/posts/5";

function getData() {
    fetch(URL)
        .then((res) => {
            console.log(res)
            if(res.status !== 200) throw new Error("Bad Request")
            return res.json()
        })
        .then((data) => {
            let h1 = document.querySelector('h1')
            h1.innerText = `Id: ${data.id}\n 
            Title: ${data.title}\n
            Body: ${data.body}`;
        })
        .catch((error) => {
            console.log("help")
        })
        .finally(data => {
            console.log("Runs no matter what")
        })
}


async function myAsyncFunction() {
    try{
        const response = await fetch(URL);
        if(response.status !== 200) {
            throw new Error("Something went wrong");
        }
        const data = await response.json() 
        let h1 = document.querySelector('h1');
        h1.innerText = `Id: ${data.id}\n
        Title: ${data.title}\n
        Body: ${data.body}`;
    } catch(error) {
        console.error(error)
    } finally {
        console.log("Runs no matter what")
    }
}

myAsyncFunction()
