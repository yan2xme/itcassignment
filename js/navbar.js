fetch("/html/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        document.querySelectorAll(".navbar a").forEach(a => {
            if (a.href === window.location.href) a.classList.add("active");
        });
    });