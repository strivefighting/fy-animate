import Animate from '../../dist/index.js';
;(function(){
    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        const div = document.querySelector('div');
        const animate1 = new Animate(div);
        // const animate2 = new Animate(div);

        animate1.start('left', 500, 2000, 'easeInOut');
        // animate2.start('top', 400, 2000, 'linear');
    })
})()