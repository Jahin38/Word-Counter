document.getElementById('btn').addEventListener('click', function() {
    const text = document.getElementById('textArea').value.trim();
    const words = text.split(' ').filter(word => word);
    document.getElementById('wordCount').textContent = words.length;
    
});
