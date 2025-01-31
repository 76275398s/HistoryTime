const button = document.getElementById('changeColorBtn');

function changeBackgroundColor() {
    document.body.style.backgroundColor = "#f5a623"; // Mengubah warna latar belakang
}

button.addEventListener('click', changeBackgroundColor);
