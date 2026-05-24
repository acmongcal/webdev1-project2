


const form = document.getElementById("subscribe-form");
const close = document.getElementById("close");
const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'block';
    subscribeBtn.style.display = 'none';
    close.style.display ='block';
});

close.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    subscribeBtn.style.display = 'block';
    close.style.display ='none';
});