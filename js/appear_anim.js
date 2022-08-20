const oper_wait_time = 400;
const sep_wait_time = 100;
const elem_anim_time = 250;
const logo_anim_time = 1000;

const intro_div = document.querySelector('.intro');
const content_div = document.querySelector('.content');
const intro_logo = document.querySelector('.intro .logo');


setTimeout(() => {
    intro_div.style.display = 'flex';
    intro_logo.style.animation = `logo-anim ${logo_anim_time}ms ease-in-out forwards`;

    setTimeout(() => {
        intro_div.style.display = 'none';
        content_div.style.display = 'flex';

        setInterval(() => {
            for(let i = 0; i < content_div.children.length; i += 1)
            setInterval(() => {
                content_div.children[i].style.animation = `appear ${elem_anim_time}ms ease-in-out forwards`
            }, (i + 1) * sep_wait_time);
        }, oper_wait_time);

    }, logo_anim_time * 1.5);
}, oper_wait_time);
