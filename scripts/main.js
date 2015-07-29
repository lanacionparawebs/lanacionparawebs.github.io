$(document).ready(function() {
    !function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function t(e){e=e.getElementsByTagName("a");for(var t=e.length-1;t>=0;t--)e[t].setAttribute("target","_blank")}function n(e,t){for(var n=[],s=new RegExp("(^| )"+t+"( |$)"),i=e.getElementsByTagName("*"),a=0,l=i.length;l>a;a++)s.test(i[a].className)&&n.push(i[a]);return n}var s="",i=20,a=!0,l=[],r=!1,o=!0,c=!0,d=null,p=!0,m=!0,u=null,h=!0,w=!1,g=!0,f=!0,v={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),r)l.push(e);else{r=!0,s=e.domId,i=e.maxTweets,a=e.enableLinks,c=e.showUser,o=e.showTime,m=e.showRetweet,d=e.dateFunction,u=e.customCallback,h=e.showInteraction,w=e.showImages,g=e.linksInNewWindow,f=e.showPermalinks;var t=document.createElement("script");t.type="text/javascript",t.src="//cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t)}},callback:function(b){var y=document.createElement("div");y.innerHTML=b.body,"undefined"==typeof y.getElementsByClassName&&(p=!1),b=[];var T=[],k=[],C=[],x=[],E=[],N=[],_=0;if(p)for(y=y.getElementsByClassName("tweet");_<y.length;)x.push(0<y[_].getElementsByClassName("retweet-credit").length?!0:!1),(!x[_]||x[_]&&m)&&(b.push(y[_].getElementsByClassName("e-entry-title")[0]),E.push(y[_].getAttribute("data-tweet-id")),T.push(y[_].getElementsByClassName("p-author")[0]),k.push(y[_].getElementsByClassName("dt-updated")[0]),N.push(y[_].getElementsByClassName("permalink")[0]),C.push(void 0!==y[_].getElementsByClassName("inline-media")[0]?y[_].getElementsByClassName("inline-media")[0]:void 0)),_++;else for(y=n(y,"tweet");_<y.length;)b.push(n(y[_],"e-entry-title")[0]),E.push(y[_].getAttribute("data-tweet-id")),T.push(n(y[_],"p-author")[0]),k.push(n(y[_],"dt-updated")[0]),N.push(y[_].getElementsByClassName("permalink")[0]),C.push(void 0!==n(y[_],"inline-media")[0]?n(y[_],"inline-media")[0]:void 0),x.push(0<n(y[_],"retweet-credit").length?!0:!1),_++;for(b.length>i&&(b.splice(i,b.length-i),T.splice(i,T.length-i),k.splice(i,k.length-i),x.splice(i,x.length-i),C.splice(i,C.length-i),N.splice(i,N.length-i)),y=[],_=b.length,x=0;_>x;){if("string"!=typeof d){var B=k[x].getAttribute("datetime"),I=new Date(k[x].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),B=d(I,B);if(k[x].setAttribute("aria-label",B),b[x].innerText)if(p)k[x].innerText=B;else{var I=document.createElement("p"),A=document.createTextNode(B);I.appendChild(A),I.setAttribute("aria-label",B),k[x]=I}else k[x].textContent=B}B="",a?(g&&(t(b[x]),c&&t(T[x])),c&&(B+='<div class="user">'+e(T[x].innerHTML)+"</div>"),B+='<p class="tweet">'+e(b[x].innerHTML)+"</p>",o&&(B=f?B+('<p class="timePosted"><a href="'+N[x]+'">'+k[x].getAttribute("aria-label")+"</a></p>"):B+('<p class="timePosted">'+k[x].getAttribute("aria-label")+"</p>"))):b[x].innerText?(c&&(B+='<p class="user">'+T[x].innerText+"</p>"),B+='<p class="tweet">'+b[x].innerText+"</p>",o&&(B+='<p class="timePosted">'+k[x].innerText+"</p>")):(c&&(B+='<p class="user">'+T[x].textContent+"</p>"),B+='<p class="tweet">'+b[x].textContent+"</p>",o&&(B+='<p class="timePosted">'+k[x].textContent+"</p>")),h&&(B+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+E[x]+'" class="twitter_reply_icon"'+(g?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+E[x]+'" class="twitter_retweet_icon"'+(g?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+E[x]+'" class="twitter_fav_icon"'+(g?' target="_blank">':">")+"Favorite</a></p>"),w&&void 0!==C[x]&&(I=C[x],void 0!==I?(I=I.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],I=decodeURIComponent(I).split('"')[1]):I=void 0,B+='<div class="media"><img src="'+I+'" alt="Image from tweet" /></div>'),y.push(B),x++}if(null===u){for(b=y.length,T=0,k=document.getElementById(s),C="<ul>";b>T;)C+="<li>"+y[T]+"</li>",T++;k.innerHTML=C+"</ul>"}else u(y);r=!1,0<l.length&&(v.fetch(l[0]),l.splice(0,1))}};return window.twitterFetcher=v});
    
    function genFeatured(type) {

        if (!templates) var templates = {};
        templates.big = new Hogan.Template({
            code: function(b, s, a) {
                var e = this;
                return e.b(a = a || ""), e.b("<article> "), e.b("\n" + a), e.b('    <div class="slide"> '), e.b("\n" + a), e.b('        <a id="mainFeaturedUrl" href="'), e.b(e.v(e.f("slug", b, s, 0))), e.b('"><img class="img-responsive bigTitleImg" src="fotoedicion/thumb_'), e.b(e.v(e.f("featured", b, s, 0))), e.b('" alt=""></a> '), e.b("\n" + a), e.b('        <span class="category '), e.b(e.v(e.f("css", b, s, 0))), e.b('" >'), e.b(e.v(e.f("category", b, s, 0))), e.b("</span> "), e.b("\n" + a), e.b('        <span class="newTitle"> '), e.b("\n" + a), e.b('            <a href="'), e.b(e.v(e.f("slug", b, s, 0))), e.b('"><h3 class="bigTitleSli">'), e.b(e.v(e.f("title", b, s, 0))), e.b("</h3></a>"), e.b("\n" + a), e.b("        </span> "), e.b("\n" + a), e.b("    </div> "), e.b("\n" + a), e.b("</article>"), e.fl()
            },
            partials: {},
            subs: {}
        }), templates.small = new Hogan.Template({
            code: function(b, s, a) {
                var e = this;
                return e.b(a = a || ""), e.b('<div class="row"> '), e.b("\n" + a), e.b('<div class="col-md-12 col-lg-12 "> '), e.b("\n" + a), e.b('    <a href="'), e.b(e.v(e.f("slug", b, s, 0))), e.b('"><img class="img-responsive topnews" src="fotoedicion/thumb_'), e.b(e.v(e.f("featured", b, s, 0))), e.b('"></a> '), e.b("\n" + a), e.b('    <span class="categorysmall '), e.b(e.v(e.f("css", b, s, 0))), e.b('">'), e.b(e.v(e.f("category", b, s, 0))), e.b("</span> "), e.b("\n" + a), e.b('    <span class="newTitleSmall"> '), e.b("\n" + a), e.b('        <a href="'), e.b(e.v(e.f("slug", b, s, 0))), e.b('"><h3>'), e.b(e.v(e.f("title", b, s, 0))), e.b("</h3></a>"), e.b("\n" + a), e.b("    </span> "), e.b("\n" + a), e.b("</div> "), e.b("\n" + a), e.b("</div>"), e.fl()
            },
            partials: {},
            subs: {}
        });

        $.getJSON("featured.json", function(data) {
            if (type == true) {
                $("#smallNews").html("");
                for (var i = 1; i < data.length; i++) {
                    var output = templates["small"].render(data[i]);
                    $("#smallNews").append(output);
                }
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
                    randomStart:true,
                    controls: true,
                    slideMargin: 10,
                    pager: false,
                    auto: true
                });
                $(".adsLarge").show();
            });


        });
    }

    function facebookSidebar() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.3&appId=814402405268804";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    function twitterSidebar() {
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
                try{
                    element.innerHTML = html;

                }catch(e){

                }
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
            console.log("twitter sidebar error")
        }
    }

    function adSpot(data) {
          
        var adsense = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  \
        <ins class="adsbygoogle"  \
             style="display:inline-block;width:300px;height:250px"  \
             data-ad-client="ca-pub-6660576367227932"  \
             data-ad-slot="1397388415"></ins>  \
        <script>  \
        (adsbygoogle = window.adsbygoogle || []).push({});  \
        </script>';
        $(data['Spot']).html(adsense);
    }

    function loadPlate() {
        $('.plateinfo').html('<img src="/images/picoyplaca.jpg" height="386">')
    }

    function lazyLoad(l) {
        $(l).onScreen({
            lazyAttr: 'data-lazy'
        });
    }

    function animatePosts() {

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

    function postResize() {
        height = $(".postContainer").height(); //$('.bigTitleImg:first').height();
        width = $(".postContainer").width(); //$('.bigTitleImg:first').width();
        $(".postPic").height(Math.round((height * 0.0775) + height)).width(Math.round((width * 0.0775) + width));

    }
    function loader() {
    Response.action(function() {
        if (Response.band(992)) {
            if (window.location.pathname === '/') {
                genFeatured(true);
                if ( sessionStorage.addInsert == "false") {
                     sessionStorage.addInsert = true;
                    console.log("insert Lab")
                    $(".postLine div:nth-child(5)").before('<div class="col-xs-12 col-sm-6 col-md-6"><img src="/images/Laboratorio_Alfa_2_Arte.gif" alt="" style="max-width: 310px;"></div>');

                }

            }
            lazyLoad('.postimgl');

            //adSpot({"Spot": ".side2501","ancho": '300',"alto": '250'});
            //adSpot({"Spot": ".side2502","ancho": '300',"alto": '250'});
            //adSpot({"Spot": ".side2503","ancho": '300', "alto": '600' });
            facebookSidebar();
            twitterSidebar();
            loadPlate();
            animatePosts();


        } else if (Response.band(992)) {
            console.log("md")
        } else if (Response.band(768)) {
            console.log("sm");
            if (window.location.pathname === '/') {
                genFeatured(false);
                animatePosts();
            }
        } else {
            console.log("xs")
            if (window.location.pathname === '/') {
                lazyLoad('.postimgs');
                animatePosts();
            }
        }
    });

}


    $(".socialMedia").on("click", function(event) {
        event.preventDefault();
        ga('send', 'event', 'share', $(this).data("network"), $(location).attr('href'));

    });

    $('img').bind('error', function(e) {
        var src = this.src;
        this.src = "/fotoedicion/thumb_84c20ac6c9a47486381aceb7f6ccb466.jpg"
        ga('send', 'event', 'error', 'img', src);
    });

    $('#nav').affix({
        offset: {
            top: function() {
                return ($('header').height())
            }
        }
    })
     $("#mobileMenu").click(function(e) {
        e.preventDefault();
       // $("#wrapper").toggleClass("toggled");
    });
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
    $(window).resize(function() {
        //postResize();
        //loader();
       // location.reload();
    });
        sessionStorage.addInsert = false;

        loader();

    postResize();
    $('.dropdown-toggle').dropdown()
    $('.dropdown-toggle').dropdownHover();

});
$(document).ready(function(e) {
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();

    });
});

 $('#search').click(function(e) {
        e.preventDefault();
         $('#menuModal').modal('show');
    });
$('#menuModal').on('show.bs.modal', function (e) {
            //      $('.lastadv').css('position', 'static');

})


/////////////////// Tracking /////////
function Tracking() {
    try {
        this.newid = document.querySelector("article").getAttribute("data-id");

    } catch (e) {
        this.newid = "0"
    }
    try {
        this.cat = document.querySelector("article").getAttribute("data-cat");

    } catch (e) {
        this.cat = "unk"
    }
    this.cookieName = "lanacion";
    this.cookie = this.cookieSeter();
    this.slug = window.location.pathname;
}

Tracking.prototype.cookieSeter = function() {
    var myCookie = this.getCookie();
    if (myCookie == null) {
        var ck = this.genGuid();
        this.setCookie(ck);
        return ck;
    } else {
        return myCookie;
    }

}


Tracking.prototype.setCookie = function(val) {
    document.cookie = this.cookieName + "=" + val + "; expires=Fri, 31 Dec 9999 23:59:59 GMT;"
    if (Modernizr.localstorage) {
    sessionStorage.setItem(this.cookieName , val);
    localStorage.setItem(this.cookieName , val);
    } 
    

}


Tracking.prototype.sendTrack = function() {

    'use strict';

    var httpReq = new XMLHttpRequest();
    var url = 'https://api.parse.com/1/classes/CurrentNews';
    var fields = JSON.stringify({user:this.cookie,cat:this.cat,newId:this.newid});

    httpReq.open('POST', url, true);

    httpReq.setRequestHeader('X-Parse-Application-Id', 'mxPOm008hyVfunzWFCKB98kEiMHnwkFrMNiOoS4n');
    httpReq.setRequestHeader('X-Parse-REST-API-Key', 'uJLctPaJxsFXWTUEUz3ia2Bi6wWaUvGnCjTns59N');
    httpReq.setRequestHeader('Content-Type', 'application/json');

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState === 4 && httpReq.status === 'success') {
            //alert(httpReq.responseText);
        }
    };

    httpReq.send(fields);


    'use strict';

    var httpReq = new XMLHttpRequest();
    var url = 'https://api.parse.com/1/functions/mostRead';
    var fields = JSON.stringify({news:this.newid});

    httpReq.open('POST', url, true);

    httpReq.setRequestHeader('X-Parse-Application-Id', 'mxPOm008hyVfunzWFCKB98kEiMHnwkFrMNiOoS4n');
    httpReq.setRequestHeader('X-Parse-REST-API-Key', 'uJLctPaJxsFXWTUEUz3ia2Bi6wWaUvGnCjTns59N');
    httpReq.setRequestHeader('Content-Type', 'application/json');

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState === 4 && httpReq.status === 'success') {
            //alert(httpReq.responseText);
        }
    };

    httpReq.send(fields);

}

Tracking.prototype.renderRecomend = function(data) {
    var items = [];
    for (var i = 0; i < data['result'].length; i++) {

        items.push(data['result'][i]);
    }
    riot.mount('recommendations', {
        title: 'LA NACION RECOMIENDA..',
        items: items
    })


}

Tracking.prototype.renderTopNews = function() {
    setTimeout(function() {
        var url = 'http://lanacionweb.parseapp.com/top';
        $.getJSON(url, function(data) {
            console.log(data);
            riot.mount('top', {
                items: data
            })


        });
    }, 1000);
}

Tracking.prototype.renderRelated = function(data) {
    var items = [];
    for (var i = 0; i < data['result'].length; i++) {

        items.push(data['result'][i]);
    }
    riot.mount('related', {
        title: 'QUIZÀS QUIERAS VER..',
        items: items
    })


}


Tracking.prototype.getRelated = function() {
        'use strict';
        var that = this;
        var httpReq = new XMLHttpRequest();
        var url = 'https://api.parse.com/1/functions/relatedNews';
        var fields = JSON.stringify({category:this.cat,news:this.newid});

        httpReq.open('POST', url, true);

        httpReq.setRequestHeader('X-Parse-Application-Id', 'mxPOm008hyVfunzWFCKB98kEiMHnwkFrMNiOoS4n');
        httpReq.setRequestHeader('X-Parse-REST-API-Key', 'uJLctPaJxsFXWTUEUz3ia2Bi6wWaUvGnCjTns59N');
        httpReq.setRequestHeader('Content-Type', 'application/json');

        httpReq.onreadystatechange = function () {
            if (httpReq.readyState === 4 && httpReq.status === 200) {
                        var data = JSON.parse(httpReq.responseText);
                        that.renderRelated(data);
            }
        };

        httpReq.send(fields);


}
Tracking.prototype.getRecomend = function() {
        'use strict';
        var that = this;
        var httpReq = new XMLHttpRequest();
        var url = 'https://api.parse.com/1/functions/recomendNews';
        var fields = JSON.stringify({category:this.cat,news:this.newid,user:this.cookie});

        httpReq.open('POST', url, true);

        httpReq.setRequestHeader('X-Parse-Application-Id', 'mxPOm008hyVfunzWFCKB98kEiMHnwkFrMNiOoS4n');
        httpReq.setRequestHeader('X-Parse-REST-API-Key', 'uJLctPaJxsFXWTUEUz3ia2Bi6wWaUvGnCjTns59N');
        httpReq.setRequestHeader('Content-Type', 'application/json');

        httpReq.onreadystatechange = function () {
            if (httpReq.readyState === 4 && httpReq.status === 200) {
                        var data = JSON.parse(httpReq.responseText);
                         that.renderRecomend(data);
            }
        };

        httpReq.send(fields);


}

Tracking.prototype.getCat = function() {
    return this.cat
}
Tracking.prototype.getCookie = function() {
    var name = this.cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return null;
}

Tracking.prototype.genGuid = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};


/////////////////// End Of Tracking /////////


if (window.location.pathname !== '/') {

    setTimeout(function() {
        var track = new Tracking();
        track.sendTrack();
        track.getRelated();
        track.getRecomend();
        
        if (track.getCat() == "obituarios"){
            $(".rela").hide();
        }
        //console.log(track);
    }, 0);
}
if (window.location.pathname == '/') {

    setTimeout(function() {
        var track = new Tracking();

        track.renderTopNews();

    }, 0);
}
