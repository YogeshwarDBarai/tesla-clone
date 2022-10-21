const openMenu = () => {
    console.log('openMenu');
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('aside').className='active';

    // document.querySelector(selectors:'.backdrop').className='backdrop active';
    // document.querySelector(selectors: 'aside').className = 'active';
}
const closeMenu = () => {
    console.log('closeMenu');
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('aside').className='';
    // document.querySelector(selectors: '.backdrop').className='backdrop';
    // document.querySelector(selectors: 'aside').className = '';
}

document.getElementById('menubtn').onclick = e => {
    console.log('menubtn');
    e.preventDefault();
    openMenu();
    
}
document.querySelector('aside button.close').onclick = e =>{
    console.log('aside button.close');
    closeMenu();

}
document.querySelector('.backdrop').onclick = e =>{
    console.log('.backdrop');
    closeMenu();
}