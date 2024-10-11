document.addEventListener("DOMContentLoaded", function() {
   
    const menu = document.querySelector(".menu");
    const sideNav = document.querySelector(".side-nav");
    menu.addEventListener("click", function() {
     //sideNav.classList.remove("close")
      sideNav.classList.add("block");
    });

    const close = document.querySelector(".close-div")
    close.addEventListener("click", () => {
        console.log("hello")
        sideNav.classList.add("close");
        setTimeout(() => {
            sideNav.classList.remove("block")
            sideNav.classList.remove("close")
        },1000)
    })
  });

  const date = document.querySelector(".date")

  const d = new Date();
  const year = d.getFullYear()
  date.innerText = year

  console.log(date)
  
  