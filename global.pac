var wall_proxy = "SOCKS5 127.0.0.1:1086;SOCKS 127.0.0.1:1086";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
    return wall_proxy;
}