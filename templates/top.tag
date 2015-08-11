<top>
<div each={ items } class="media" style="color:#336799; margin-top:20px">
    <div class="media-left">
        <a href="#">
            <img class="media-object" src="/fotoedicion/thumb_{image}" style="width: 74px; height: 64px;">
        </a>
    </div>
    <div class="media-body">
        <div class="row">
            <div class="col-md-3 col-md-offset-8 readsCount">+{reads}</div>
        </div>
        <a href="/{slug}" style="text-decoration:none;text-align: left !important;"><p class="topTitle">{ title.substr(0, 50); }</p></a>
    </div>
</div>
  <script>
    this.items = opts.items
    this.on('mount', function() {
    console.log("mount");
    var refreshIntervalId = setInterval(function() {$( ".readsCount" ).fadeOut(400).fadeIn(400);}, 800);

    //$( ".readsCount" ).fadeOut(400).fadeIn(400);
     setTimeout(function() {
     clearInterval(refreshIntervalId);
     }, 3000);
  })
  </script>
</top>