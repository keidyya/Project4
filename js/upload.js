const profilepic = document.querySelector(".image img");
const userfile = document.querySelector('.user-file');

userfile.onchange = function () {
    profilepic.src = URL.createObjectURL(userfile.files[0]);
}