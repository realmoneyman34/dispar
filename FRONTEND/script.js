// JavaScript to display the content on button click
document.getElementById('bars').addEventListener('click', function () {
    var content = document.getElementById('list');
    // Toggle display between 'block' and 'none'
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';//
    }
});