$(document).ready(function(){
  $('#ajax-form').submit(function(e){
    e.preventDefault();
    var dataArr = $(this).serializeArray()
      ,dataStr = $(this).serialize()
      ,formURL = $(this).attr("action")
      ,reqs = true;
    if(!dataArr[0].value.length){
      alert("You must input some text!");
      reqs = false;
    }
    if(dataArr[0].value.length==1){
      alert("Please input a longer string to make the return meaningful!");
      reqs = false;
    }
    if(reqs){
      $.post(formURL,dataStr,function(ret){
        $('#return').show().find('#retStr').html(ret);
      },'json');
    }
  });
});
