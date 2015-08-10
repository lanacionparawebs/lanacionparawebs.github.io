<results>
<ul if={ items.length == 0 } class="media-list" style="color:black;font-size:24px">
Sin resultados
</ul>
<ul class="media-list">
<li each={ items } class="media" style="color:black;">
    <div class="media-body">
        <h5>{published}</h5>
        <h4 class="media-heading"><a style="color:black; font-size:19px;" href="{slug}">{title}</a></h4> {excerpt}
    </div>
</li>
</ul>


  <script>
    this.items = opts.items
    this.on('mount', function() {
    $("#topsearchs").fadeOut('slow/400/fast', function() {
      $("#searchwait").fadeOut();
      $("#resultados").fadeIn();

    });
    
  })
  </script>
</results>
