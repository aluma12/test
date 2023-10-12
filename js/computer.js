 window.onload=()=>{
    
const curSor = document.querySelector("#mouse_cursor")
const area = document.querySelector("#wrap")
area.addEventListener("mousemove",(e) =>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    curSor.style.left = mouseX + 'px';

    curSor.style.top = mouseY + 'px';

    let chk=true;/*state*/
    document.querySelector('.k_e_keys').onclick=function(){
        if(chk){
            this.innerText="A";
            chk = false;
        }else{
            this.innerText="가";
            chk = true;
        }
        
    }
    
})    






const fullscreenButton = document.getElementById('wrap');

fullscreenButton.addEventListener('click', () => {
  const element = document.documentElement; // HTML 요소
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();
  }
});



 const draggables = document.querySelectorAll(".draggable");
 const containers = document.querySelectorAll(".container");
 
 draggables.forEach(draggable => {
 draggable.addEventListener("dragstart", () => {
   draggable.classList.add("dragging");
 });
 
 draggable.addEventListener("dragend", () => {
   draggable.classList.remove("dragging");
 });
 });
 
 containers.forEach(container => {
 container.addEventListener("dragover", e => {
   e.preventDefault();
   const afterElement = getDragAfterElement(container, e.clientX);
   const draggable = document.querySelector(".dragging");
   if (afterElement === undefined) {
     container.appendChild(draggable);
   } else {
     container.insertBefore(draggable, afterElement);
   }
 });
 });
 
 function getDragAfterElement(container, x) {
 const draggableElements = [
   ...container.querySelectorAll(".draggable:not(.dragging)"),
 ];
 
 return draggableElements.reduce(
   (closest, child) => {
     const box = child.getBoundingClientRect();
     const offset = x - box.left - box.width / 2;
     // console.log(offset);
     if (offset < 0 && offset > closest.offset) {
       return { offset: offset, element: child };
     } else {
       return closest;
     }
   },
   { offset: Number.NEGATIVE_INFINITY },
 ).element;
 }
 

 }


const Naver = "#m_computer .naver";
const NaverBox = "#box .naver_box";
const Window1 = "#box .naver_box>.window";

const Google = "#m_computer .google";
const GoogleBox = "#box .google_box";
const Window2 = "#box .google_box>.window";

const Visual = "#m_computer .v_s_c";
const VisualBox = "#box .v_s_c_box";
const Window3 = "#box .v_s_c_box>.window";

const IMage = "#m_computer .image";
const ImagelBox = "#box .image_box";
const Window4 = "#box .image_box>.window";

const Skill = "#m_computer .skills";
const SkillBox = "#box .t_document_b";
const Window5 = "#box .t_document_b>.window";

const AboutMe = "#m_computer .about_me";
const AboutMeBox = "#box .about_me_box";
const Window6 = "#box .about_me_box .window";

const Portfolio = "#m_computer .portfolio";
const PortfolioBox = "#box .portfolio_box";
const Window7 = "#box .portfolio_box .window";

const Notepad = "#flex_n_k_t .notepad";
const NotepadBox = "#box .notepad_box";
const Window9 = "#box .notepad_box>.window";




$(function(){
    var css_test_idx = 10;
    $(NaverBox).hide(0)
    $(GoogleBox).hide(0)
    $(VisualBox).hide(0)
    $(ImagelBox).hide(0)
    $(SkillBox).hide(0)
    $(AboutMeBox).hide(0)
    $(PortfolioBox).hide(0)
    
    $(NotepadBox).hide(0)
    $("#naver_fo").hide(0)
    $("#google_fo").hide(0)
    $("#image_fo").hide(0)
    $("#v_s_c_fo").hide(0)
    $("#skills_fo").hide(0)
    $("#about_me").hide(0)
    $("#portfolio_fo").hide(0)


    $(Naver).click(function(){
        $(NaverBox).toggle(100)
        $("#naver_fo").toggle(100)
    })
    $(Window1).click(function(){
        $(NaverBox).hide(100)
        $("#naver_fo").hide(100)
    })
    $(NaverBox).draggable({
        handle:'img',
        containment: '#wrap',
        cursor: 'none',	
		opacity: 0.7,						
		cancel: '#f_computer',
    });
    
    $("#naver_fo").dblclick(function(){
        $(NaverBox).hide(100)
        $(this).hide(100)
    })
    $("#naver_fo").click(function(){
        $(NaverBox).css({"z-index":"11"})
        $("#box div").not(NaverBox).css({"z-index":"9"})
    })
    
    $(Google).click(function(){
        $(GoogleBox).toggle(100)
        $("#google_fo").toggle(100)
    })
    $(Window2).click(function(){
        $(GoogleBox).hide(100)
        $("#google_fo").hide(100)
    })
    $(GoogleBox).draggable({
        handle:'img',
        containment: '#wrap',
        cursor: 'none',		
		opacity: 0.7,						
		cancel: '#f_computer',
    });
    $("#google_fo").dblclick(function(){
        $(GoogleBox).hide(100)
        $(this).hide(100)
    })
    $("#google_fo").click(function(){
        $(GoogleBox).css({"z-index":"11"})
        $("#box div").not(GoogleBox).css({"z-index":"9"})
    })

    $(Visual).click(function(){
        $(VisualBox).toggle(100)
        $("#v_s_c_fo").toggle(100)
    })
    $(Window3).click(function(){
        $(VisualBox).hide(100)
        $("#v_s_c_fo").hide(100)
    })
    $(VisualBox).draggable({
        handle:'img',
        containment: '#wrap',
        cursor: 'none',		
		opacity: 0.7,						
		cancel: '#f_computer',
    });
    $("#v_s_c_fo").dblclick(function(){
        $(VisualBox).hide(100)
        $(this).hide(100)
    })
    $("#v_s_c_fo").click(function(){
        $(VisualBox).css({"z-index":"11"})
        $("#box div").not(VisualBox).css({"z-index":"9"})
    })


    $(IMage).click(function(){
        $(ImagelBox).toggle(100)
        $("#image_fo").toggle(100)
    })
    $(Window4).click(function(){
        $(ImagelBox).hide(100)
        $("#image_fo").hide(100)
    })
    $(ImagelBox).draggable({
        handle:'img',
        containment: '#wrap',
        cursor: 'none',		
		opacity: 0.7,						
		cancel: '#f_computer',
    });
    $("#image_fo").dblclick(function(){
        $(ImagelBox).hide(100)
        $(this).hide(100)
    })
    $("#image_fo").click(function(){
        $(ImagelBox).css({"z-index":"11"})
        $("#box div").not(ImagelBox).css({"z-index":"9"})
    })



    $(Skill).click(function(){
      $(SkillBox).toggle(100)
      $("#skills_fo").toggle(100)
  })
  $(Window5).click(function(){
      $(SkillBox).hide(100)
      $("#skills_fo").hide(100)
  })
  $(SkillBox).draggable({
      handle:'img',
      containment: '#wrap',
      cursor: 'none',		
  opacity: 0.7,						
  cancel: '#f_computer',
  });
  $("#skills_fo").dblclick(function(){
    $(SkillBox).hide(100)
    $(this).hide(100)
})
$("#skills_fo").click(function(){
    $(SkillBox).css({"z-index":"11"})
    $("#box div").not(SkillBox).css({"z-index":"9"})
})

$(AboutMe).click(function(){
  $(AboutMeBox).toggle(100)
  $("#about_me").toggle(100)
})
$(Window6).click(function(){
  $(AboutMeBox).hide(100)
  $("#about_me").hide(100)
})
$(AboutMeBox).draggable({
  handle:'img',
  containment: '#wrap',
  cursor: 'none',		
opacity: 0.7,						
cancel: '#f_computer',
});
$("#about_me").dblclick(function(){
$(AboutMeBox).hide(100)
$(this).hide(100)
})
$("#about_me").click(function(){
$(AboutMeBox).css({"z-index":"11"})
$("#box div").not(AboutMeBox).css({"z-index":"9"})
})


$(Portfolio).click(function(){
  $(PortfolioBox).toggle(100)
  $("#portfolio_fo").toggle(100)
})
$(Window7).click(function(){
  $(PortfolioBox).hide(100)
  $("#portfolio_fo").hide(100)
})
$(PortfolioBox).draggable({
  handle:'img',
  containment: '#wrap',
  cursor: 'none',		
opacity: 0.7,						
cancel: '#f_computer',
});
$("#portfolio_fo").dblclick(function(){
$(PortfolioBox).hide(100)
$(this).hide(100)
})
$("#portfolio_fo").click(function(){
$(PortfolioBox).css({"z-index":"11"})
$("#box div").not(PortfolioBox).css({"z-index":"9"})
})












    
    $(Notepad).click(function(){
        $(NotepadBox).toggle(100)
    })
    $(Window9).click(function(){
        $(NotepadBox).hide(100)
    })
    $(NotepadBox).draggable({
        handle:'img',
        containment: '#wrap',
        cursor: 'none',		
		opacity: 0.7,						
		cancel: '#f_computer',
    });






    $( '#box div' )
    .draggable()

    .mousedown(function(){ 
    $(this).css('z-index', css_test_idx); 
    css_test_idx++;
    })

    $(document).ready(function() {
        var images = $(".wifi img");
        
        images.click(function() {
            var randomIndex = Math.floor(Math.random() * images.length);
            var currentIndex = images.index(this);
            
            var newRandomIndex = randomIndex;
            while (newRandomIndex === randomIndex) {
                newRandomIndex = Math.floor(Math.random() * images.length);
            }
            
            images.eq(currentIndex).hide(); // 현재 이미지 숨기기
            images.eq(newRandomIndex).show(); // 새로운 랜덤 이미지 보이기
        });
    });
    $(document).ready(function() {
        function updateClock() {
            var now = new Date();
            var formattedTime = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
            var formattedDate = now.getFullYear() + "-" + ((now.getMonth() + 1) < 10 ? '0' : '') + (now.getMonth() + 1) + "-" + (now.getDate() < 10 ? '0' : '') + now.getDate();
            
            $("#time").text(formattedTime);
            $("#date").text(formattedDate);
        }
        
        // 초기화
        updateClock();
        
        // 1초마다 updateClock 함수 호출
        setInterval(updateClock, 1000);

    });




  })