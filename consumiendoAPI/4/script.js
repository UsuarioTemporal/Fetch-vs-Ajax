// let d= md5('Devnami Youtube Channel');
// console.log(d);
// estas llaves no son mias :v , lo copie de otro men xdxdxd
const privateKey = '7c55664c217553d96ed6e84098a931dff0204776',
    publicKey = 'a71fa6c845e117349196fe9c4a58b2ae',
    content = document.getElementById('content')

const getConnection = ()=>{
    const ts = Date.now(),
        hash = md5(ts+privateKey+publicKey),
        URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
    fetch(URL)
    .then(response=>response.json())
    .then(data=>console.log(data))
}
getConnection()