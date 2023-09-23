function copyToClipboard() {
    // Get the text field
    let text = "milan12n30";
    navigator.clipboard.writeText(text);
  
    // Alert the copied text
    alert("Copied the userid: " + text);
}