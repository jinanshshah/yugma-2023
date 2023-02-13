// Get the button
  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  $(document).ready(function() {
    let cart = [];
    
      // Add item to cart
    $(".add-to-cart").click(function() {
      let product = $(this).data("product");
      let item = { name: product, quantity: 1 };
      let exists = false;
      
        // Check if item is already in the cart
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product) {
          exists = true;
          cart[i].quantity++;
          break;
        }
      }
      
        // Add new item to the cart
      if (!exists) {
        cart.push(item);
      }
      
        // Update cart display
      updateCart();
    });
    
      // Update cart display
    function updateCart() {
      $("#cart-items").empty();
      for (let i = 0; i < cart.length; i++) {
        $("#cart-items").append(
          "<tr><td>" +
          cart[i].name +
          "</td><td>" +
          cart[i].quantity +
          "</td><td><button class='btn btn-danger remove-item'>Remove</button></td></tr>"
          );
      }
    }
    
      // Remove item from cart
    $("#cart-items").on("click", ".remove-item", function() {
      let product = $(this)
      .closest("tr")
      .find("td:first-child")
      .text();
      
        // Remove item from cart array
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product) {
          cart.splice(i, 1);
          break;
        }
      }
      
        // Update cart display
      updateCart();
    });
    
      // Checkout button
    $("#checkout-button").click(function() {
        // Perform checkout actions (e.g. send data to server, redirect to payment page, etc.)
        // Checkout button
      $("#buy-button").click(function() {
      });
    });
  });
