
var decode         = require("./decode").decode;
var tcp_tracker    = require("./lib/tcp_tracker");
var DNSCache       = require("./lib/dns_cache");
var binding        = require("./build/Release/pcap_binding");
var LiveSession    = require("./lib/liveSession");
var OfflineSession = require("./lib/offlineSession");

module.exports = {
    Session: LiveSession,
    OfflineSession: OfflineSession,
    decode: decode,
    TCPTracker: tcp_tracker.TCPTracker,
    TCPSession: tcp_tracker.TCPSession,
    DNSCache: DNSCache,
    lib_version: binding.lib_version()
};