const copyButton = document.getElementById('copyButton');
const pasteButton = document.getElementById('pasteButton');
const textToCopy = document.getElementById('textToCopy');
const pasteArea = document.getElementById('pasteArea');

copyButton.addEventListener('click', () => {
    textToCopy.select();
    document.execCommand('copy');
    alert('Text copied to clipboard');
});

pasteButton.addEventListener('click', () => {
    pasteArea.textContent = '';
    const clipboardText = navigator.clipboard.readText();
    clipboardText.then((text) => {
        pasteArea.textContent = text;
    });
});