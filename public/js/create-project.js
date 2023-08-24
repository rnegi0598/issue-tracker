const accordianOneNext=document.querySelector('.accordian-1 .next');
const accordianTwoNext=document.querySelector('.accordian-2 .next');
const accordianTwoBack=document.querySelector('.accordian-2 .back');
const accordianThreeFinish=document.querySelector('.accordian-3 .finish');
const accordianThreeBack=document.querySelector('.accordian-3 .back');


accordianOneNext.onclick=()=>{
    document.querySelector('.accordian-1 p').classList.toggle('fold');
    document.querySelector('.accordian-2 p').classList.toggle('fold');
}

accordianTwoNext.onclick=()=>{
    document.querySelector('.accordian-2 p').classList.toggle('fold');
    document.querySelector('.accordian-3 p').classList.toggle('fold');
}

accordianTwoBack.onclick=()=>{
    document.querySelector('.accordian-2 p').classList.toggle('fold');
    document.querySelector('.accordian-1 p').classList.toggle('fold');

}

accordianThreeBack.onclick=()=>{
    document.querySelector('.accordian-3 p').classList.toggle('fold');
    document.querySelector('.accordian-2 p').classList.toggle('fold');
}
