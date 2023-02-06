function myFunction(){
    let input = document.getElementById('input1');
    const output = document.getElementById('input1');
    const requestURL = ('https://newton.vercel.app/api/v2/derive/' + input.value).replace(' ^ ', '%5E');
    console.log(requestURL)
    const xhr = new XMLHttpRequest();
    xhr.open('GET',requestURL,true);
    xhr.send(null);
    xhr.onload = () => {
        const answer = JSON.parse(xhr.response)
        appendData (answer)
    }
    function appendData(data) {
        let output = document.getElementById('par');
        let mainContainer = document.getElementById("output1");
        output.innerHTML = 'Result: '  + data.result;
    }
    
}

