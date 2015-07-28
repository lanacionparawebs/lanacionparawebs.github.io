<recommendations>
<div class="relatedTitle text-left ">
    { opts.title }
</div>
<ul class="relatedNews">
   <li each={ items }  class="relatedTitles "><strong><a href="/{slug}">{title}</a></strong></li>
</ul>
  <script>
    this.items = opts.items
  </script>
</recommendations>
