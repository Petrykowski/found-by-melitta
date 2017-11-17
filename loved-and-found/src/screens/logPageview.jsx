const logSubscription = () => {
    var token = window.token || localStorage.getItem('token');
    if (!token) {
        token = Math.random().toString(36).substring(7);
        localStorage.setItem('token', token)
    }
window.token = token;
    let url = "https://rare-market.coffee/log/" + document.location.hostname + '/' + (window.location.hash.replace('#', '').replace(/\//g, '%2F') || 'start') + '/' + token.replace(/\//g, '%2F')
    fetch(url)
}
export default logSubscription