// 화살표 함수를 만들고 선언까지 동시에 함
// 지역변수로 처리해서 전역에서 건드리지 못하게 함
(() => {

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');

    for (let i = 0; i < stepElems.length; i++) {
        // 통상적인 방법
        // stepElems[i].setAttribute('data-index', i);
        // data- 이용
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;
        for (let i = 0; i < stepElems.length; i++ ) {
            step = stepElems[i];
            // 각 요소의 위치 정보
            boundingRect = step.getBoundingClientRect();
            // console.log(i, boundingRect.top)

            if (boundingRect.top > window.innerHeight * 0.1 && 
                boundingRect.top < window.innerHeight * 0.8) {
                    console.log(step.dataset.index);
                }
        }
    });

})();