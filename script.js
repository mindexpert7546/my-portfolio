
            document.addEventListener('DOMContentLoaded', () => {
                const scriptURL = 'https://script.google.com/macros/s/AKfycbzUZeYLjqAZZKRewHDNPi031lO1erPYQk1zdlneEnzu8Xog0VTuRgiPGcPNBV1ESmTP/exec';
                const form = document.forms['formName'];
    
                form.addEventListener('submit', e => {
                    e.preventDefault();
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                        .then(response => alert("Thank you! Your form is submitted successfully."))
                        .then(() => { window.location.reload(); })
                        .catch(error => console.error('Error!', error.message));
                });
            });