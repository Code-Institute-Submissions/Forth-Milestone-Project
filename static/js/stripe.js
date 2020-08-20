var stripe_publishable_key = $('#stripe_publishable_key').text().slice(1, -1);

var stripe = Stripe(stripe_publishable_key);
var elements = stripe.elements();

var style = {
    base: {
        color: '#000',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545'
    }
};

var card = elements.create('card', {style: style});
card.mount('#creditCard');


// Realtime validation errors on the credit card field
card.addEventListener('change', function (event) {
    var errorDiv = $('#creditCardError'); 
    if (event.error) {
        var html = `<span>${event.error.message}</span>`;
        $(errorDiv).html(html);
    } else {
        errorDiv.textContent = '';
    }
});