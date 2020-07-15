/*  Type H1 In Home Page Function */
let typeEffect = (element, speed) => {
    let texth1 = element.innerText; //OmarEyad;
    element.innerText = '';
    let i = 0;
    let timer = setInterval(function () {
        if (i < texth1.length) {
            element.append(texth1.charAt(i));
            i++;
        }
        else {
            document.querySelector('.arrowDown');
            let btnHtml = `<div class="arrow-down">
        <div class="right"></div>
          <div class="left"></div>
      </div>`;
            document.querySelector('.arrowDown').innerHTML = btnHtml;
            clearInterval(timer);
        }
    }, speed);

}

//call Method Eeffect :

let heading1 = document.getElementById('heading1');
typeEffect(heading1, 150);

/* Tabs Method */

let TabsUl = Array.from(document.querySelectorAll('.tabsMenu .tabItem')); //Array of Items
let Tabs = Array.from(document.querySelectorAll('.tabs .tab'));

const TabsBtn = (index) =>{


TabsUl.forEach(node =>{
        node.classList.remove('activeTabs');
    });
Tabs.forEach(node =>{
    node.classList.remove('showTab');
});
TabsUl[index].classList.add('activeTabs');
Tabs[index].classList.add('showTab');
}


for(var i = 0 ; i<TabsUl.length ; i++)
{
TabsUl[i].setAttribute('data-index', i);
}



for(var i = 0 ; i<TabsUl.length ; i++){
    TabsUl[i].onclick = function()
    {
  let index = parseInt(this.getAttribute('data-index'));
 TabsBtn(index);

    };
  }

/* Arrow UP Show Hide */
  let ArrowUP = document.querySelector('.arrowup');

  window.onscroll = ()=>{
    (window.pageYOffset > 740)? ArrowUP.classList.add('showTab'):ArrowUP.classList.remove('showTab');
  }

  /* Arrow UP Scroll */

  ArrowUP.onclick = () =>{
    window.scrollTo({top:0,behavior:'smooth'});
  }

  /*Arrow Down */
let ArrowDown = document.querySelector('.arrowDown');
let mySkills = document.querySelector('.mySkills-tabs');
let rect = mySkills.getBoundingClientRect().top;
ArrowDown.onclick = ()=>{
    window.scrollTo({top:rect,behavior:'smooth'});
}

let scrollNav = (index) =>{
  window.scrollTo({top:rect,behavior:'smooth'});
  TabsBtn(index);
}
let friendSection = document.querySelector('.Be-friends').getBoundingClientRect().top;
let scrollfriend = () =>{
window.scrollTo({top:friendSection,behavior:'smooth'});
}
