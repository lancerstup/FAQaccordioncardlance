// Variables
const dropDownBtn = document.querySelectorAll('.dropdown-btn')
let dropDownCnt = document.querySelectorAll('.dropdown-cnt')
const arrowS = document.querySelectorAll('.arrow')

let contentItems = 0
let isOpen = false
let isClose = true

//REUSE ANIMATION
function selectContent(cnts){
    if(cnts.classList.contains('fade-in')){
        
        cnts.classList.add('has-fade')
        cnts.classList.remove('has-fadein')

        cnts.classList.remove('fade-in')
        cnts.classList.add('fade-out')
    
        
    }
    else{
       
        cnts.classList.add('has-fadein')
        cnts.classList.remove('has-fade')
    
        cnts.classList.add('fade-in')
        cnts.classList.remove('fade-out')

      
          
    }

}












//content functions
function oneCnt(){
    dropDownCnt.forEach(function(cnts){
        if(cnts.classList.contains('one')){
         selectContent(cnts)
        }      
     })    
}

function twoCnt(){
    dropDownCnt.forEach(function(cnts){
        if(cnts.classList.contains('two')){
         selectContent(cnts)
        }      
     })    
}

function threeCnt(){
    dropDownCnt.forEach(function(cnts){
        if(cnts.classList.contains('three')){
         selectContent(cnts)
         
        }      
     })    
}
function fourCnt(){
    dropDownCnt.forEach(function(cnts){
        if(cnts.classList.contains('four')){
         selectContent(cnts)
        
        }      
     })    
}
function fiveCnt(){

    dropDownCnt.forEach(function(cnts){
        if(cnts.classList.contains('five')){
         selectContent(cnts)
       
        }      
     })    
}



//button functions
dropDownBtn.forEach(function(btns){
    btns.addEventListener('click', function(e){
        const selectButtons = e.currentTarget.classList
        console.log(selectButtons)
        if(selectButtons.contains('one-btn')){
            oneCnt()  
        }
        else if (selectButtons.contains('two-btn')){
            twoCnt()    
        }
        else if (selectButtons.contains('three-btn')){
            threeCnt()
            
        }
        else if (selectButtons.contains('four-btn')){
            fourCnt()
            
        }
        else if (selectButtons.contains('five-btn')){
            fiveCnt()
            
        }     
        
    })

})











