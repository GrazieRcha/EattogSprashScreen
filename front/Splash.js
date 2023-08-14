// let intro = document.querySelectorAll('.intro');
// let logo = document.querySelectorAll('.header-logo');
// let logoSpan = document.querySelectorAll('.logo');

// window.addEventListener("DOMContentLoaded", ()=>{

//     setTimeout(() => {

//         logoSpan.forEach((span, idx)=>{

//             setTimeout(()=>{
//                 span.classList.add('active');
//             },(idx + 1) * 400)

//         });

//         setTimeout(() => {

//             logoSpan.forEach((span, idx)=>{

//                 setTimeout(()=>{
//                     span.classList.remove('active');
//                     span.classList.add('fade');
//                 },(idx + 1) * 100)

//             })
//         },2000);

//         setTimeout(()=>{
//             intro.style.top = '-100vh';
//         },2300);

//     })
// })

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const logoSpan = document.querySelectorAll(".logo");

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 100);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
