const counters=document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText=0;

    const update=() => {
    const target = Number(counter.getAttribute('data-target'));
    const c = Number(counter.innerText);

    const increment=target/200;

    if(c<target)
    {
        counter.innerText=`${Math.ceil(c+increment)}`;
        setTimeout(update,1);
    }
}
update();

})

