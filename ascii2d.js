var uri = document.getElementById('uri');
uri.value = decodeURIComponent(window.location.search.substring(1));

form = document.getElementById('form');
form.submit();