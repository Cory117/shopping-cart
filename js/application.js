$(document).ready(function() {
  var total = 0;

  var sum = function() {
    var prices = $('.item-price');
    var qty = $('.quantity');
    total = 0;

    for (i=0; i<qty.length; i++) {
      var price = Number($(prices[i]).text().replace(/\$/,""));
      var subtotal = (Number($(qty[i]).val())) * price;
      if (subtotal != 0) {
        $($('.item-subtotal')[i]).text("$" + subtotal);
      } else {
        $($('.item-subtotal')[i]).text("$--.--");
      }
      total += subtotal
    }
    $('#total-price').text("$ " + total);
    var addspace = "";
    var spaces = total.toString();
    spaces = spaces.length;
    spaces = 12 - spaces;
    for (i=0; i<spaces; i++) {
      addspace += " ";
    }
    return total;
  }

  var addItem = function(name,cost) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $('#item-list').prepend('<div class="row item"> \
    <div class="item-name col-xs-3"> \ '
    + name + '\
    </div> \
    <div class="item-price col-xs-3"> \
    $' + cost + '.00 \
    </div> \
    <div class="item-qty col-xs-3"> \
      <label>QTY</label> \
      <input class="quantity" type="number"> \
    </div> \
    <div class="col-xs-1"> \
      <button class="remove"> \
        Remove \
      </button> \
    </div> \
    <div class="item-subtotal col-xs-2"> \
    $--.-- \
    </div> \
    </div>');    
  }

$(document).on('click', '#fork', function() {
  addItem($('#name').val(), $('#cost').val());
});

$(document).on('click', '.remove', function() {
  $(this).parents('.row').remove();
  sum();
});

$('input').keydown(function(e){
  console.log(e.which);
  if (e.which == 13) {
    sum();
  };
});

$(document).on('keyup', '.quantity', function(){
  sum();
});

$(document).on('keydown', '#cost', function(e){
  console.log(e.which);
  if (e.which == 13) {
    addItem($('#name').val(), $('#cost').val());
  };
});

}); 