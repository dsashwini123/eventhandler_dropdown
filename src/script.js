document.getElementById('lob').addEventListener('change', function() {
    const element = this;
    const selectedLob = element.value;
    document.getElementById('selected-lob').textContent = `You selected: ${selectedLob}`;
});
