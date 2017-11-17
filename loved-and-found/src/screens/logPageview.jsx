export default logSubscription = () => {
    var token = localStorage.getItem('token');
    if (!token) {
        token = Math.random().toString(36).substring(7);
        localStorage.setItem('token', token)
    }
    let url = "https://rare-market.coffee/log/" + document.location.hostname + '/' + window.location.hash.replace(/\//g, '%2F') + '/' + token.replace(/\//g, '%2F')
    fetch(url)
}