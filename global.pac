var wall_proxy = "SOCKS5 127.0.0.1:1086;SOCKS 127.0.0.1:1086";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
    url = "" + url;
    host = "" + host;

    // 不是 http 或 https 协议的请求不走代理
    if (!(url.startsWith("http:") || url.startsWith("https:"))) {
        return direct;
    }

    if (isPlainHostName(host) === true) {
        return direct;
    }

    return wall_proxy;
}