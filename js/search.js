function search() {
    var search_item = document.getElementById("name");
    let searched = search_item.value;
    searched.replace(" ", "+")
    window.open("https://www.google.com/search?q=" + searched, '_blank').focus();
}