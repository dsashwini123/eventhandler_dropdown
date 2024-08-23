document.getElementById('lob').addEventListener('change', function() {
    // this element points to lob selected or changed.
    const element = this;
    // value will have the lob selected.
    const selectedLob = element.value;
    document.getElementById('selected-lob').textContent = `You selected: ${selectedLob}`;
});
