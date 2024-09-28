let nama_user = localStorage.getItem("nama_user")
let nomor_user = localStorage.getItem("nomor_user")
let email_user = localStorage.getItem("email_user")

if(nama_user != null)
{
    document.getElementById("nama").innerHTML = nama_user
}

if(email_user != null)
{
    document.getElementById("email").innerHTML = email_user
}

if(nomor_user != null)
{
    document.getElementById("nomor").innerHTML = nomor_user
}