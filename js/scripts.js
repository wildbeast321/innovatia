$(document).ready(function(){
    $(".maintxt").mouseenter(function(){
        $(".maintxt").animate({           
            width: '500px'
        });  
        $(".secondmaintxt").animate({           
            width: '320px'
        });
        $(".thirdmaintxt").animate({           
            width: '310px'
        });
    }); 
    $(".maintxt").mouseleave(function(){
        $(".maintxt").animate({           
            width: '370px'
        });  
        $(".secondmaintxt").animate({           
            width: '370px'
        }); 
        $(".thirdmaintxt").animate({           
            width: '370px'
        });
    });
    $(".secondmaintxt").mouseenter(function(){
        $(".secondmaintxt").animate({           
            width: '500px'
        });  
        $(".maintxt").animate({           
            width: '320px'
        });
        $(".thirdmaintxt").animate({           
            width: '310px'
        });
    }); 
    $(".secondmaintxt").mouseleave(function(){
        $(".secondmaintxt").animate({           
            width: '370px'
        });  
        $(".maintxt").animate({           
            width: '370px'
        }); 
        $(".thirdmaintxt").animate({           
            width: '370px'
        });
    });
    $(".thirdmaintxt").mouseenter(function(){
        $(".thirdmaintxt").animate({           
            width: '500px'
        });  
        $(".secondmaintxt").animate({           
            width: '320px'
        });
        $(".maintxt").animate({           
            width: '310px'
        });
    }); 
    $(".thirdmaintxt").mouseleave(function(){
        $(".thirdmaintxt").animate({           
            width: '370px'
        });  
        $(".secondmaintxt").animate({           
            width: '370px'
        }); 
        $(".maintxt").animate({           
            width: '370px'
        });
    });
});