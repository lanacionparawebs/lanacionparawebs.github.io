<slider>
<div class="slide">
    <a id="mainFeaturedUrl" href="{items.slug}"><img class="img-responsive bigTitleImg" src="/fotoedicion/thumb_{items.featured}" alt=""></a>
    <span class="category {items.css}">{items.category}</span>
    <span class="newTitle"><a href=""><h3 class="bigTitleSli">{items.title}</h3></a>
    </span>
</div>
    this.items = opts.items
 this.on('mount', function() {
        height = 400 //$('.bigTitleImg:first').height();
        width = 600 //$('.bigTitleImg:first').width();
        $(".bigTitleSli").width(width);
        $('.bigTitleImg').height(Math.round((height * 0.0575) + height)).width(Math.round((width * 0.0175) + width))

        $('.newTitle').width(Math.round(($('.bigTitleImg').width() - 22)));

        var image = $("#mainFeaturedUrl");
        image.fadeOut('slow', function () {
        image.fadeIn('slow');
    });
 })
</slider>
