<related>
 <div class="row">
  <div class="titles">
      <br>
      <br> { opts.title }
      <br>
      <br>
  </div>
  </div>
<div class="row post-referal ">
  <div each={ items } class="col-md-4 col-sm-4 referal ">
    <a href="/{slug}">
    <img class="img-responsive text-center" src="/fotoedicion/thumb_{image}">
    <h5>{title}</h5></a>
  </div>             
</div>
  <script>
    this.items = opts.items

  </script>
</related>
