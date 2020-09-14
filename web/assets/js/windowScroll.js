// function normalizeWheelSpeed(event) {
//     var normalized;
    
//     if (event.wheelDelta) {
//         normalized = (event.wheelDelta % 120 - 0) == -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
//     } else {
//         var rawAmount = event.deltaY ? event.deltaY : event.detail;
//         normalized = -(rawAmount % 3 ? rawAmount * 10 : rawAmount / 3);
//     }

//     test(normalized);
//     return normalized;
// } 
    

window.addEventListener('wheel', test);

function test(e) {
    const currentSection = document.querySelector('.is--visible');
    const offsetTop = currentSection.clientHeight;
    
    if(e.deltaY > 0)
        content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');

        console.log(e)
}

// if (e.deltaY < 0) {
//     content.style.setProperty('transition', 'all 700ms ease');
//     content.style.setProperty('transform', 'translate3d(0,' + offsetTop + 'px' + ', 0)');
// }

// if (e.deltaY > 0) {
//     content.style.setProperty('transition', 'all 700ms ease');
//     content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');
// }