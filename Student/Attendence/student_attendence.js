const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const header = document.querySelector('header');
const overall = document.getElementById('overall_1');
const cm = document.getElementById('cm');
const ds = document.getElementById('ds');
const dlcd = document.getElementById('dlcd');   
const dm = document.getElementById('dm');
const oops = document.getElementById('oops');


menu.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cross').style.display = 'block';
    document.getElementById('header').style.marginLeft = '-350px';
    document.getElementsByTagName('nav').style.marginLeft = '-100px';
    document.getElementById('subjects').style.width = '100vw';
    // document.querySelector('nav').style.width = '70%';

})
cross.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cross').style.display = 'none';
    document.getElementById('header').style.marginLeft = '0px';
    // header.classList.remove('active');

})



overall_1.addEventListener('click' ,function(){
    document.getElementById('overall_2').style.display = 'block';
    document.getElementById('computational_methods').style.display = 'none';
    document.getElementById('data_structures').style.display = 'none';
    document.getElementById('digital_logic').style.display = 'none';
    document.getElementById('discrete_mathematics').style.display = 'none';
    document.getElementById('object_oriented').style.display = 'none';

});
cm.addEventListener('click' ,function(){
    document.getElementById('overall_2').style.display = 'none';
    document.getElementById('computational_methods').style.display = 'block';
    document.getElementById('data_structures').style.display = 'none';
    document.getElementById('digital_logic').style.display = 'none';
    document.getElementById('discrete_mathematics').style.display = 'none';
    document.getElementById('object_oriented').style.display = 'none';

});
ds.addEventListener('click' ,function(){
    document.getElementById('overall_2').style.display = 'none';
    document.getElementById('computational_methods').style.display = 'none';
    document.getElementById('data_structures').style.display = 'block';
    document.getElementById('digital_logic').style.display = 'none';
    document.getElementById('discrete_mathematics').style.display = 'none';
    document.getElementById('object_oriented').style.display = 'none';

});
dlcd.addEventListener('click' ,function(){
    document.getElementById('overall_2').style.display = 'none';
    document.getElementById('computational_methods').style.display = 'none';
    document.getElementById('data_structures').style.display = 'none';
    document.getElementById('digital_logic').style.display = 'block';
    document.getElementById('discrete_mathematics').style.display = 'none';
    document.getElementById('object_oriented').style.display = 'none';

});

dm.addEventListener('click' ,function(){
    document.getElementById('overall_2').style.display = 'none';
    document.getElementById('computational_methods').style.display = 'none';
    document.getElementById('data_structures').style.display = 'none';
    document.getElementById('digital_logic').style.display = 'none';
    document.getElementById('discrete_mathematics').style.display = 'block';
    document.getElementById('object_oriented').style.display = 'none';

});
oops.addEventListener('click' ,function(){
    console.log('oops');
    document.getElementById('overall_2').style.display = 'none';
    document.getElementById('computational_methods').style.display = 'none';
    document.getElementById('data_structures').style.display = 'none';
    document.getElementById('digital_logic').style.display = 'none';
    document.getElementById('discrete_mathematics').style.display = 'none';
    document.getElementById('object_oriented').style.display = 'block';

});



