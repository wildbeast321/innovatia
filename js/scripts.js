$(document).ready(function(){
    $(".maintxt").mouseenter(function(){
        $(".maintxt").animate({           
            width: '50%'
        });  
        $(".secondmaintxt").animate({           
            width: '25%'
        });
        $(".thirdmaintxt").animate({           
            width: '25%'
        });
    }); 
    $(".maintxt").mouseleave(function(){
        $(".maintxt").animate({           
            width: '33.33%'
        });  
        $(".secondmaintxt").animate({           
            width: '33.33%'
        }); 
        $(".thirdmaintxt").animate({           
            width: '33.33%'
        });
    });
    $(".secondmaintxt").mouseenter(function(){
        $(".secondmaintxt").animate({           
            width: '50%'
        });  
        $(".maintxt").animate({           
            width: '25%'
        });
        $(".thirdmaintxt").animate({           
            width: '25%'
        });
    }); 
    $(".secondmaintxt").mouseleave(function(){
        $(".secondmaintxt").animate({           
            width: '33.33%'
        });  
        $(".maintxt").animate({           
            width: '33.33%'
        }); 
        $(".thirdmaintxt").animate({           
            width: '33.33%'
        });
    });
    $(".thirdmaintxt").mouseenter(function(){
        $(".thirdmaintxt").animate({           
            width: '50%'
        });  
        $(".secondmaintxt").animate({           
            width: '25%'
        });
        $(".maintxt").animate({           
            width: '25%'
        });
    }); 
    $(".thirdmaintxt").mouseleave(function(){
        $(".thirdmaintxt").animate({           
            width: '33.33%'
        });  
        $(".secondmaintxt").animate({           
            width: '33.33%'
        }); 
        $(".maintxt").animate({           
            width: '33.33%'
        });
    });
});