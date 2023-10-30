// Fetch and insert the navigation using JavaScript
fetch('../../components/nav.html')
.then(response => response.text())
.then(html => {
  document.getElementById('navigation').innerHTML = html;
});