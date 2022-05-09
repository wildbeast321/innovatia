$(document).ready(function(){
    var resolution=$(window).width();
    if(resolution>768){
    $(".maintxt").mouseenter(function(){
        $(".maintxt").animate({           
            width: '50%'
        });  
        $(".secondmaintxt").animate({           
            width: '23%'
        });
        $(".thirdmaintxt").animate({           
            width: '23%'
        });
    }); 
    $(".maintxt").mouseleave(function(){
        $(".maintxt").animate({           
            width: '30.33%'
        });  
        $(".secondmaintxt").animate({           
            width: '30.33%'
        }); 
        $(".thirdmaintxt").animate({           
            width: '30.33%'
        });
    });
    $(".secondmaintxt").mouseenter(function(){
        $(".secondmaintxt").animate({           
            width: '50%'
        });  
        $(".maintxt").animate({           
            width: '23%'
        });
        $(".thirdmaintxt").animate({           
            width: '23%'
        });
    }); 
    $(".secondmaintxt").mouseleave(function(){
        $(".secondmaintxt").animate({           
            width: '30.33%'
        });  
        $(".maintxt").animate({           
            width: '30.33%'
        }); 
        $(".thirdmaintxt").animate({           
            width: '30.33%'
        });
    });
    $(".thirdmaintxt").mouseenter(function(){
        $(".thirdmaintxt").animate({           
            width: '50%'
        });  
        $(".secondmaintxt").animate({           
            width: '23%'
        });
        $(".maintxt").animate({           
            width: '23%'
        });
    }); 
    $(".thirdmaintxt").mouseleave(function(){
        $(".thirdmaintxt").animate({           
            width: '30.33%'
        });  
        $(".secondmaintxt").animate({           
            width: '30.33%'
        }); 
        $(".maintxt").animate({           
            width: '30.33%'
        });
    });
}
});