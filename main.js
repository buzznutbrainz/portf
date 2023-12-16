document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent = '© Copyright ' + currentYear + ' Ava Ehtesham-Heravi';
});

document.addEventListener('DOMContentLoaded', function() {
    var btnAlert = document.getElementById('btn-alert');
    var btnCounter = document.getElementById('btn-counter');
    var txtCounter = document.getElementById('txt-counter');
    var count = 1; 

    btnAlert.addEventListener('mouseover', function() {
        btnAlert.textContent = 'no spoon 4 you';
    });

    btnAlert.addEventListener('mouseleave', function() {
        btnAlert.textContent = 'Click me!!!!';
    });

    btnAlert.addEventListener('click', function() {
        alert('just kidding');
    });

    btnCounter.addEventListener('click', function() {
        count++;
        txtCounter.textContent = 'Number: ' + count;

    if (count % 2 === 0) {
        txtCounter.classList.add('even');
        txtCounter.classList.remove('odd');
    } else {
        txtCounter.classList.add('odd');
        txtCounter.classList.remove('even');
    }
})
});


