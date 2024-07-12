document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form
    document.getElementById('contact-form').reset();

    // Thank the user
    alert('Thank you for contacting us! We will get back to you soon.');
});

function initMap() {
    var philippines = {lat: 13.4125, lng: 122.5621};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: philippines
    });
    var marker = new google.maps.Marker({
        position: philippines,
        map: map
    });
}
