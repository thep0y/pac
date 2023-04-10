/**
 * genpac 2.1.0 https://github.com/JinnLynn/genpac
 * Generated: 2020-02-27 19:43:44
 * GFWList Last-Modified: 2019-11-05 00:21:47
 * GFWList From: online[https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt]
 */

var proxy = "SOCKS5 127.0.0.1:1086;SOCKS 127.0.0.1:1086";

var black_domains = {
    "com": {
        "openai": 1,
        "google": 1,
        "youtube": 1,
        "ytimg": 1,
        "googlevideo": 1,
        "googleapis": 1,
        "ggpht": 1,
        "googleusercontent": 1,
        "github": 1,
        "githubassets": 1,
        "githubusercontent": 1,
        "appspot": 1,
        "live": 1,
        'steampowered': 1,
        'nvidia': 1,
    },
    "eu": {
        "europa": 1
    },
    "hk": {
        "google.com": 1
    },
    "io": {
        "packagecontrol": 1,
        "pypa": 1,
        "github": 1,
    },
    "net": {
        "msauth": 1,
        "msftauth": 1,
        "azureedge": 1,
        "doubleclick": 1,
        "jsdelivr": 1,
    },
    "org": {
        "python": 1,
        "fao": 1,
        "wikimedia": 1,
        "pypi": 1,
    }
}

function isInDomains(domain_dict, host) {
    var suffix;
    var pos1 = host.lastIndexOf('.');

    // ipv6网址用直连
    if (host.indexOf("ipv6") > -1) {
        return false
    }

    suffix = host.substring(pos1 + 1);
    if (suffix == "cn" || suffix == "nd" || suffix == "localhost" ||
        suffix == "local" || suffix == "test" ||
        suffix == "onion" || suffix == "exit" || suffix == "bitnet" ||
        suffix == "uucp" || suffix == "example" || suffix == "invalid") {
        return false;
    }

    var domains = domain_dict[suffix];

    // 黑名单中不存在顶级域名走直连
    if (domains === undefined) {
        return false;
    }

    host = host.substring(0, pos1);
    var pos = host.lastIndexOf('.');

    while (1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return true;
            } else {
                return false;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return true;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}

function FindProxyForURL(url, host) {
    if (isInDomains(black_domains, host)) {
        return proxy
    }

    return 'DIRECT';
}