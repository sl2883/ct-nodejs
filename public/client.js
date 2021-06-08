console.log('Client-side code running');

const button = document.getElementById('productViewed');
button.addEventListener('click', function(e) {
  console.log('product viewed was clicked');
  productViewed();
});

function productViewed() {
  clevertap.event.push("Product Viewed", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "events",
    "Price":59.99,
  });
}

const button1 = document.getElementById('login');
button1.addEventListener('click', function(e) {
  console.log('login was clicked');
  login();
});

function login() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "sunny gmail",            // String
      "Email": "sunny.ladkani@gmail.com",         // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
}