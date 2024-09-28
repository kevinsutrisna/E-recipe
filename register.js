document.getElementById('form-register').addEventListener('submit', (event) => {

    event.preventDefault()
    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repassword = document.getElementById('repassword').value
    let word = 0
    let num = 0

    let nama_user = localStorage.getItem("nama_user")
    let nomor_user = localStorage.getItem("nomor_user")
    let password_user = localStorage.getItem('password_user')
    console.log(nama_user)
    console.log(nomor_user)
    console.log(password_user)

    for(let i = 0; i < nama.length; i++)
    {
        if((nama[i] >= 'a' && nama[i] <= 'z') || (nama[i] >= 'A' && nama[i] <= 'Z') )
        {
            word++;
        }
        if(nama[i] >= '0' && nama[i] <= '9')
        {
            num++;
        }
    }
    if(word != 0 && num != 0)
    {
        alert('Username harus berisi minimal 5 huruf dan maksimal 1 kata, nomor harus berisi 10 sampai 12 angka')
        return
    }
    if(nama.length == word)
    {
        if(word < 5)
        {
            alert('Username harus lebih dari 5 huruf')
            return
        }
        localStorage.setItem("nama_user", nama)
    }

    if(nama.length == num)
    {
        if(num < 10 || num > 12)
        {
            alert('Nomor harus diantara 10 sampai 12 angka')
            return
        }
        localStorage.setItem("nomor_user", nama)
    }

    if(word + num != nama.length)
    {
        alert('Jangan gunakan karakter spesial (+, *, @, #, $, %, ...)')
        return
    }

    if (!email.endsWith('@gmail.com')) 
    {
        alert('Email harus diakahiri dengan @gmail.com!')
        return
    }

    let huruf_besar = 0
    let angka = 0
    for(let i = 0; i < password.length; i++)
    {
        if(password[i] >= 'A' && password[i] <= 'Z')
        {
            huruf_besar++;
        }
        if(password[i] >= '0' && password[i] <= '9')
        {
            angka++;
        }
    }

    if(password.length < 5)
    {
        alert('Password harus lebih dari 5 huruf')
        return
    }
    if(huruf_besar == 0)
    {
        alert('Password harus berisi satu huruf besar')
        return
    }

    if(angka == 0)
    {
        alert('Password harus berisi satu angka')
        return
    }

    if(password != repassword)
    {
        alert('password tidak sama dengan repassword')
        return
    }
    
    localStorage.setItem("password_user", password)
    localStorage.setItem("email_user", email)
    alert('Registerasi berhasil')
    window.location.href = 'login.html'
})