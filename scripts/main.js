/*********************************************************************
 *  #### Twitter Post Fetcher v13.0 ####
 *  Coded by Jason Mayes 2015. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
(function(w, n) {
    "function" === typeof define && define.amd ? define([], n) : "object" === typeof exports ? module.exports = n() : n()
})(this, function() {
    function w(a) {
        return a.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a, g) {
            return g
        }).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
    }

    function n(a) {
        a = a.getElementsByTagName("a");
        for (var c = a.length - 1; 0 <= c; c--) a[c].setAttribute("target", "_blank")
    }

    function m(a, c) {
        for (var g = [], f = new RegExp("(^| )" + c + "( |$)"), h = a.getElementsByTagName("*"), b = 0, k = h.length; b <
            k; b++) f.test(h[b].className) && g.push(h[b]);
        return g
    }
    var B = "",
        k = 20,
        C = !0,
        u = [],
        x = !1,
        v = !0,
        q = !0,
        y = null,
        z = !0,
        D = !0,
        A = null,
        E = !0,
        F = !1,
        r = !0,
        G = !0,
        H = {
            fetch: function(a) {
                void 0 === a.maxTweets && (a.maxTweets = 20);
                void 0 === a.enableLinks && (a.enableLinks = !0);
                void 0 === a.showUser && (a.showUser = !0);
                void 0 === a.showTime && (a.showTime = !0);
                void 0 === a.dateFunction && (a.dateFunction = "default");
                void 0 === a.showRetweet && (a.showRetweet = !0);
                void 0 === a.customCallback && (a.customCallback = null);
                void 0 === a.showInteraction && (a.showInteraction = !0);
                void 0 === a.showImages && (a.showImages = !1);
                void 0 === a.linksInNewWindow && (a.linksInNewWindow = !0);
                void 0 === a.showPermalinks && (a.showPermalinks = !0);
                if (x) u.push(a);
                else {
                    x = !0;
                    B = a.domId;
                    k = a.maxTweets;
                    C = a.enableLinks;
                    q = a.showUser;
                    v = a.showTime;
                    D = a.showRetweet;
                    y = a.dateFunction;
                    A = a.customCallback;
                    E = a.showInteraction;
                    F = a.showImages;
                    r = a.linksInNewWindow;
                    G = a.showPermalinks;
                    var c = document.createElement("script");
                    c.type = "text/javascript";
                    c.src = "//cdn.syndication.twimg.com/widgets/timelines/" + a.id + "?&lang=" + (a.lang ||
                        "en") + "&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" + Math.random();
                    document.getElementsByTagName("head")[0].appendChild(c)
                }
            },
            callback: function(a) {
                var c = document.createElement("div");
                c.innerHTML = a.body;
                "undefined" === typeof c.getElementsByClassName && (z = !1);
                a = [];
                var g = [],
                    f = [],
                    h = [],
                    b = [],
                    p = [],
                    t = [],
                    e = 0;
                if (z)
                    for (c = c.getElementsByClassName("tweet"); e < c.length;) {
                        0 < c[e].getElementsByClassName("retweet-credit").length ? b.push(!0) : b.push(!1);
                        if (!b[e] || b[e] && D) a.push(c[e].getElementsByClassName("e-entry-title")[0]),
                            p.push(c[e].getAttribute("data-tweet-id")), g.push(c[e].getElementsByClassName("p-author")[0]), f.push(c[e].getElementsByClassName("dt-updated")[0]), t.push(c[e].getElementsByClassName("permalink")[0]), void 0 !== c[e].getElementsByClassName("inline-media")[0] ? h.push(c[e].getElementsByClassName("inline-media")[0]) : h.push(void 0);
                        e++
                    } else
                        for (c = m(c, "tweet"); e < c.length;) a.push(m(c[e], "e-entry-title")[0]), p.push(c[e].getAttribute("data-tweet-id")), g.push(m(c[e], "p-author")[0]), f.push(m(c[e], "dt-updated")[0]),
                            t.push(c[e].getElementsByClassName("permalink")[0]), void 0 !== m(c[e], "inline-media")[0] ? h.push(m(c[e], "inline-media")[0]) : h.push(void 0), 0 < m(c[e], "retweet-credit").length ? b.push(!0) : b.push(!1), e++;
                a.length > k && (a.splice(k, a.length - k), g.splice(k, g.length - k), f.splice(k, f.length - k), b.splice(k, b.length - k), h.splice(k, h.length - k), t.splice(k, t.length - k));
                c = [];
                e = a.length;
                for (b = 0; b < e;) {
                    if ("string" !== typeof y) {
                        var d = f[b].getAttribute("datetime"),
                            l = new Date(f[b].getAttribute("datetime").replace(/-/g, "/").replace("T",
                                " ").split("+")[0]),
                            d = y(l, d);
                        f[b].setAttribute("aria-label", d);
                        if (a[b].innerText)
                            if (z) f[b].innerText = d;
                            else {
                                var l = document.createElement("p"),
                                    I = document.createTextNode(d);
                                l.appendChild(I);
                                l.setAttribute("aria-label", d);
                                f[b] = l
                            } else f[b].textContent = d
                    }
                    d = "";
                    C ? (r && (n(a[b]), q && n(g[b])), q && (d += '<div class="user">' + w(g[b].innerHTML) + "</div>"), d += '<p class="tweet">' + w(a[b].innerHTML) + "</p>", v && (d = G ? d + ('<p class="timePosted"><a href="' + t[b] + '">' + f[b].getAttribute("aria-label") + "</a></p>") : d + ('<p class="timePosted">' +
                        f[b].getAttribute("aria-label") + "</p>"))) : a[b].innerText ? (q && (d += '<p class="user">' + g[b].innerText + "</p>"), d += '<p class="tweet">' + a[b].innerText + "</p>", v && (d += '<p class="timePosted">' + f[b].innerText + "</p>")) : (q && (d += '<p class="user">' + g[b].textContent + "</p>"), d += '<p class="tweet">' + a[b].textContent + "</p>", v && (d += '<p class="timePosted">' + f[b].textContent + "</p>"));
                    E && (d += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + p[b] + '" class="twitter_reply_icon"' + (r ? ' target="_blank">' :
                        ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + p[b] + '" class="twitter_retweet_icon"' + (r ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + p[b] + '" class="twitter_fav_icon"' + (r ? ' target="_blank">' : ">") + "Favorite</a></p>");
                    F && void 0 !== h[b] && (l = h[b], void 0 !== l ? (l = l.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0], l = decodeURIComponent(l).split('"')[1]) : l = void 0, d += '<div class="media"><img src="' + l + '" alt="Image from tweet" /></div>');
                    c.push(d);
                    b++
                }
                if (null === A) {
                    a = c.length;
                    g = 0;
                    f = document.getElementById(B);
                    for (h = "<ul>"; g < a;) h += "<li>" + c[g] + "</li>", g++;
                    f.innerHTML = h + "</ul>"
                } else A(c);
                x = !1;
                0 < u.length && (H.fetch(u[0]), u.splice(0, 1))
            }
        };
    return window.twitterFetcher = H
});


/* jshint devel:true */
$('#nav').affix({
    offset: {
        top: function() {
            return ($('header').height())
        }
    }
})

$(document).ready(function(e) {
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});





$(function() {

    if (!!$('.lastadv').offset()) {

        var stickyTop = 2774;

        $(window).scroll(function() {

            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                $('.lastadv').css({
                    position: 'fixed',
                    top: 50,
                    paddingLeft: 20
                });
            } else {
                $('.lastadv').css('position', 'static');
            }

        });

    }

});

/*
$(function(){ // document ready
 
  if (!!$('.lastadv').offset()) { // make sure ".sticky" element exists
 
    var stickyTop = 2774; // returns number 
    
    $(window).scroll(function(){ // scroll event
        
      var windowTop = $(window).scrollTop(); // returns number    
      if (stickyTop < windowTop){
        
      }
      else {
        $('.lastadv').css('position','static');
      }
 
    });
 
  }
 
});


jQuery('#news-slider').slippry({
    // general elements & wrapper
    slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
    elements: 'article', // elments cointaining slide content

    // options
    adaptiveHeight: false, // height of the sliders adapts to current 
    captions: false,
    pager: false,
    // pager
    pagerClass: 'news-pager',

    // transitions
    transition: 'horizontal', // fade, horizontal, kenburns, false
    speed: 1200,
    pause: 8000,

    // slideshow
    autoDirection: 'prev'
});

*/


$(document).ready(function() {

    function genFeatured() {

        if (!!!templates) var templates = {};
        templates["big"] = new Hogan.Template({
            code: function(c, p, i) {
                var t = this;
                t.b(i = i || "");
                t.b("<article> ");
                t.b("\n" + i);
                t.b("    <div class=\"slide\"> ");
                t.b("\n" + i);
                t.b("        <a id=\"mainFeaturedUrl\" href=\"");
                t.b(t.v(t.f("slug", c, p, 0)));
                t.b("\"><img class=\"img-responsive bigTitleImg\" src=\"fotoedicion/thumb_");
                t.b(t.v(t.f("featured", c, p, 0)));
                t.b("\" alt=\"\"></a> ");
                t.b("\n" + i);
                t.b("        <span class=\"category ");
                t.b(t.v(t.f("css", c, p, 0)));
                t.b("\" >");
                t.b(t.v(t.f("category", c, p, 0)));
                t.b("</span> ");
                t.b("\n" + i);
                t.b("        <span class=\"newTitle\"> ");
                t.b("\n" + i);
                t.b("            <a href=\"");
                t.b(t.v(t.f("slug", c, p, 0)));
                t.b("\"><h3 class=\"bigTitleSli\">");
                t.b(t.v(t.f("title", c, p, 0)));
                t.b("</h3></a>");
                t.b("\n" + i);
                t.b("        </span> ");
                t.b("\n" + i);
                t.b("    </div> ");
                t.b("\n" + i);
                t.b("</article>");
                return t.fl();
            },
            partials: {},
            subs: {}
        });
        templates["small"] = new Hogan.Template({
            code: function(c, p, i) {
                var t = this;
                t.b(i = i || "");
                t.b("<div class=\"row\"> ");
                t.b("\n" + i);
                t.b("<div class=\"col-md-12 col-lg-12 \"> ");
                t.b("\n" + i);
                t.b("    <a href=\"");
                t.b(t.v(t.f("slug", c, p, 0)));
                t.b("\"><img class=\"img-responsive topnews\" src=\"fotoedicion/thumb_");
                t.b(t.v(t.f("featured", c, p, 0)));
                t.b("\"></a> ");
                t.b("\n" + i);
                t.b("    <span class=\"categorysmall ");
                t.b(t.v(t.f("css", c, p, 0)));
                t.b("\">");
                t.b(t.v(t.f("category", c, p, 0)));
                t.b("</span> ");
                t.b("\n" + i);
                t.b("    <span class=\"newTitleSmall\"> ");
                t.b("\n" + i);
                t.b("        <a href=\"");
                t.b(t.v(t.f("slug", c, p, 0)));
                t.b("\"><h3>");
                t.b(t.v(t.f("title", c, p, 0)));
                t.b("</h3></a>");
                t.b("\n" + i);
                t.b("    </span> ");
                t.b("\n" + i);
                t.b("</div> ");
                t.b("\n" + i);
                t.b("</div>");
                return t.fl();
            },
            partials: {},
            subs: {}
        });

        $.getJSON("featured.json", function(data) {

            $("#smallNews").html("");
            for (var i = 1; i < data.length; i++) {
                var output = templates["small"].render(data[i]);
                $("#smallNews").append(output);
            }
            $("#news-slider").html("")
            var news = [];
            for (var i = 0; i < data.length; i++) {
                var output = templates["big"].render(data[i]);
                news.push(output);
            }

            $.when($("#news-slider").html(news)).done(function(x) {
                height = 400 //$('.bigTitleImg:first').height();
                width = 600 //$('.bigTitleImg:first').width();
                $(".bigTitleSli").width(width);
                $('.bigTitleImg').height(Math.round((height * 0.0575) + height)).width(Math.round((width * 0.0175) + width))
                $('#news-slider').bxSlider({
                    mode: 'fade',
                    captions: false,
                    minSlides: 1,
                    maxSlides: 1,
                    controls: true,
                    slideMargin: 10,
                    pager: false,
                    auto: true
                });
                $(".adsLarge").show();
            });


        });
    }
    if (window.location.pathname === '/') {
        genFeatured();
    }

    try {


        var tweetslider = {
            "id": '589861836763299840',
            "domId": '',
            "maxTweets": 10,
            "enableLinks": true,
            "showUser": false,
            "showTime": true,
            "dateFunction": '',
            "showRetweet": false,
            "customCallback": handleTweets,
            "showInteraction": false

        };

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById('tweets');
            var html = '<ul class="tweets">';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
            $('.tweets').bxSlider({
                mode: 'fade',
                captions: false,
                minSlides: 1,
                maxSlides: 1,
                controls: false,
                slideMargin: 10,
                pager: false,
                auto: true,
                pause: 5000
            });
        }

        twitterFetcher.fetch(tweetslider);
    } catch (err) {
        console.log("twitter error.")
    }

});


/* Twitter Button */
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
/* Twitter Button  Fin*/


/* Facebook Sdk */
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.3&appId=814402405268804";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/*Facebook SDK twitter */


/* Load IMG */

function lazyLoad() {
    /* 
    To use the lazy loader, you must initialize onScreen and tell it 
    which HTML attribute to look for.
    onScreen will then replace the SRC value with the one from lazyAttr.
    */
    $('.postimg').onScreen({
        lazyAttr: 'data-lazy'
    });
}

function animatePosts() {
    /*
    In this example I used onScreen to animate the posts as
    they become visible. I set the tolerance to 50 so the posts
    start animating once they're 50px inside the viewport.
    */
    $('.post').onScreen({
        doIn: function() {
            $(this).animate({
                top: 0,
                opacity: 1
            }, 500);
        },
        tolerance: 50
    });
}

$(function() {
    function postResize() {
        height = $(".postContainer").height(); //$('.bigTitleImg:first').height();
        width = $(".postContainer").width(); //$('.bigTitleImg:first').width();
        $(".postPic").height(Math.round((height * 0.0775) + height)).width(Math.round((width * 0.0775) + width));

    }
    animatePosts()
    lazyLoad();
    postResize();
    $('img').bind('error', function(e) {
        var src = this.src;
        this.src = "http://betalanacion.parawebs.com/fotoedicion/thumb_84c20ac6c9a47486381aceb7f6ccb466.jpg"
        ga('send', 'event', 'error', 'img', src);
    });

    $(window).resize(function() {
        postResize();
    });

$(".socialMedia").on("click",function(event){
    event.preventDefault();
  ga('send', 'event', 'share', $(this).data("network"),  $(location).attr('href'));
   
});

});

/* Load IMG */
