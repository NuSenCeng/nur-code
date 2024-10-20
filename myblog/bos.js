const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Popup'ı açma
openPopup.onclick = function() {
    popup.style.display = "block";
}

// Popup'ı kapatma
closePopup.onclick = function() {
    popup.style.display = "none";
}

// Dışarıya tıklama ile kapatma
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}