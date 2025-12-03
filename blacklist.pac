/**
 * genpac 2.1.0 https://github.com/JinnLynn/genpac
 * Generated: 2020-02-27 19:43:44
 * GFWList Last-Modified: 2019-11-05 00:21:47
 * GFWList From: online[https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt]
 */

var proxy = "SOCKS5 127.0.0.1:1086;SOCKS 127.0.0.1:1086";

var black_domains = {
  ai: {
    theb: 1,
    claude: 1,
    perplexity: 1,
    trae: 1,
    x: 1,
    // qwen: 1,
  },
  app: {
    csb: 1,
    vercel: 1,
  },
  cloud: {
    pinata: 1,
  },
  co: {
    fleek: 1,
  },
  com: {
    openai: 1,
    google: 1,
    youtube: 1,
    ytimg: 1,
    googlevideo: 1,
    googleapis: 1, // 此域名偶尔被墙，先加入黑名单
    ggpht: 1,
    googleusercontent: 1,
    github: 1,
    githubassets: 1,
    githubusercontent: 1,
    appspot: 1,
    live: 1,
    steampowered: 1,
    nvidia: 1,
    palletsprojects: 1,
    stackoverflow: 1,
    // bing 不加入黑名单无法使用 ai
    bing: 1,
    medium: 1,
    reddit: 1,
    imgur: 1,
    googletagmanager: 1,
    googlesyndication: 1,
    linkedin: 1,
    redditmedia: 1,
    facebook: 1,
    anthropic: 1,
    hsforms: 1,
    caddyserver: 1,
    mail: 1,
    discord: 1,
    discordapp: 1,
    midjourney: 1,
    cloudflare: 1,
    googletagmanager: 1,
    stripe: 1,
    msn: 1,
    microsoftonline: 1,
    "cloudflare-ipfs": 1,
    "cf-ipfs": 1,
    runfission: 1,
    via0: 1,
    oneloveipfs: 1,
    docker: 1,
    sublimetext: 1,
    skype: 1,
    apkpure: 1,
    v2ex: 1,
    googlesource: 1,
    poe: 1,
    quora: 1,
    oaistatic: 1,
    proquest: 1,
    octocaptcha: 1,
    gstatic: 1,
    chatgpt: 1,
    npmjs: 1,
    // "microsoftpersonalcontent": 1, // onedrive 认证需要用到的域名
    "self.events.data.microsoft": 1,
    bootstrapcdn: 1,
    "copilot.microsoft": 1, // bing ai 改为 copilot 后的域名
    instagram: 1,
    googlesyndication: 1,
    brave: 1,
    hostloc: 1,
    grok: 1,
    grokipedia: 1,
    x: 1,
    twimg: 1,
    apparyllis: 1,
  },
  community: {
    caddy: 1,
  },
  design: {
    ant: 1,
  },
  dev: {
    pub: 1,
    cube: 1,
    fluentui: 1, // 没有被墙，但访问太慢
  },
  do: {
    linux: 1,
  },
  eu: {
    europa: 1,
  },
  gg: {
    discord: 1,
  },
  gov: {
    state: 1,
    usda: 1,
  },
  hk: {
    "google.com": 1,
  },
  host: {
    "assets-servd": 1,
  },
  io: {
    packagecontrol: 1,
    pypa: 1,
    github: 1,
    intercom: 1,
    readthedocs: 1,
    sentry: 1,
    ipfs: 1,
    "infura-ipfs": 1,
    typora: 1,
  },
  it: {
    redd: 1,
  },
  link: {
    dweb: 1,
  },
  me: {
    t: 1,
  },
  net: {
    msauth: 1,
    msftauth: 1,
    azureedge: 1,
    doubleclick: 1,
    jsdelivr: 1,
    algolia: 1,
    sstatic: 1,
    fbcdn: 1,
    bing: 1,
    discordapp: 1,
    quoracdn: 1,
  },
  network: {
    aragon: 1,
    hysteria: 1,
  },
  org: {
    python: 1,
    fao: 1,
    wikimedia: 1,
    pypi: 1,
    apache: 1,
    wikipedia: 1,
    cgiar: 1,
    "rust-lang": 1,
    telegram: 1,
    "addons.mozilla": 1,
    greasyfork: 1,
    openrouteservice: 1,
    "annas-archive": 1,
  },
  rs: {
    docs: 1,
  },
  sk: {
    "z-library": 1,
  },
  to: {
    dev: 1,
  },
};

const wss = ["wss://sydney.bing.com"];

function isGoogle(host) {
  return host.slice(host.length - 10, host.length) === "google.com";
}

function isInDomains(domain_dict, host) {
  var suffix;
  var pos1 = host.lastIndexOf(".");

  // ipv6网址用直连
  if (host.indexOf("ipv6") > -1) {
    return false;
  }

  suffix = host.substring(pos1 + 1);
  if (
    suffix == "cn" ||
    suffix == "nd" ||
    suffix == "localhost" ||
    suffix == "local" ||
    suffix == "test" ||
    suffix == "onion" ||
    suffix == "exit" ||
    suffix == "bitnet" ||
    suffix == "uucp" ||
    suffix == "example" ||
    suffix == "invalid"
  ) {
    return false;
  }

  if (suffix == "gov" || suffix == "eu" || suffix == "jp") {
    return true;
  }

  host = host.substring(0, pos1);
  if (isGoogle(host)) {
    return true;
  }

  var domains = domain_dict[suffix];

  // 黑名单中不存在顶级域名走直连
  if (domains === undefined) {
    return false;
  }

  var pos = host.lastIndexOf(".");

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
    pos = host.lastIndexOf(".", pos - 1);
  }
}

function FindProxyForURL(url, host) {
  const shouldProxy = isInDomains(black_domains, host);

  if (shouldProxy) {
    return proxy;
  }

  return "DIRECT";
}
