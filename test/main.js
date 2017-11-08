var a  ={
   f:{
    b:"222",
    evaluteSubmit: function() {
        //a.f self
        var self = this;
      //  console.log(self);
        $ser.ajax(function(){
            console.log(self.b)
        })
    }
   }
}
var $ser = {
    ajax:function(callback){
        init(callback)
    }
}
window.init = function(callback){
    callback()
}


a.f.evaluteSubmit()

//f   d对象   fuck you!  undefined  undefined