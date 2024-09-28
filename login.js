document.getElementById('form-login').addEventListener('submit', (event) => {

    event.preventDefault()

    let nama_user = localStorage.getItem("nama_user")
    let nomor_user = localStorage.getItem("nomor_user")
    let password_user = localStorage.getItem('password_user')
    console.log(nama_user)
    console.log(nomor_user)
    console.log(password_user)
    const nama = document.getElementById('nama').value
    const password = document.getElementById('password').value
    if(nama_user == null)
    {
        if(nomor_user != nama ||  password_user != password)
        {
            alert('Username / pasword tidak sesuai')
            return
        }
    }
    if(nomor_user == null)
    {
        if(nama_user != nama ||  password_user != password)
        {
            alert('Username / pasword tidak sesuai')
            return
        }
    }
    if(nama_user != null  && nomor_user != null)
    {
        if(nama_user != nama ||  password_user != password)
        {
            alert('Username / pasword tidak sesuai')
            return
        }
    }
    alert('Login berhasil')
    window.location.href = 'home-sesudah.html'
})