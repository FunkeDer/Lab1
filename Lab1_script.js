function myFunction(){
    let input = document.getElementById('input1');
    const output = document.getElementById('input1');
    
    const requestURL = ('https://newton.vercel.app/api/v2/derive/' + input.value).replaceAll('^', '%5E').replaceAll('+', '%2B');
    
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
        output.innerHTML = 'Result: '  + data.result;
    }
    
}

