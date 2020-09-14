// function normalizeWheelSpeed(event) {
//     var normalized;
    
//     if (event.wheelDelta) {
//         normalized = (event.wheelDelta % 120 - 0) == -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
//     } else {
//         var rawAmount = event.deltaY ? event.deltaY : event.detail;
//         normalized = -(rawAmount % 3 ? rawAmount * 10 : rawAmount / 3);
//     }

//     test(normalized, '');
//     return normalized;
// } 
    

// // window.addEventListener('mousewheel', normalizeWheelSpeed);
// window.addEventListener('DOMMouseScroll', normalizeWheelSpeed);
// // window.addEventListener('wheel', normalizeWheelSpeed);


// const array = new Array();
// array.push(header, about, services, projects);


// function test(norm, offsetTop) {
//     console.log(offsetTop);
//     if (norm > 0) {
//         content.style.setProperty('transition', 'all 700ms ease');
//         content.style.setProperty('transform', 'translate3d(0,' + offsetTop + 'px' + ', 0)');
//     }

//     if (norm < 0) {
//         content.style.setProperty('transition', 'all 700ms ease');
//         content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');
//     } 
// }

// // if (e.deltaY < 0) {
// //     content.style.setProperty('transition', 'all 700ms ease');
// //     content.style.setProperty('transform', 'translate3d(0,' + offsetTop + 'px' + ', 0)');
// // }

// // if (e.deltaY > 0) {
// //     content.style.setProperty('transition', 'all 700ms ease');
// //     content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');
// // }