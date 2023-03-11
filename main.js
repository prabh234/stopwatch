var hr = 0,min = 0,sec = 0 ;
$('#start').on('click',function(){
  const time = setInterval(function(){
    sec+=01;
    if( sec <= 9 ){

      $('#sec').text('0'+ sec);

    }
    else{
      $('#sec').text(sec);

    }
    if( min <= 9 ){
      $('#min').text('0'+ min);
    }
    else{
      $('#min').text(min);
    }

    if( hr <= 9 ){
      $('#hrs').text('0'+ hr);
    }
    else{
      $('#hrs').text(hr);
    }


    // console.log(sec);
    if(sec == 60){
      sec = 0;
      min += 1;
      if(min == 60){
        min = 0;
        hr += 1;
      }
    }
  },1000);
  $('#start').attr('disabled',true);
  $('#pause').attr('disabled',false);
  $('#reset').attr('disabled',false);

  $('#pause').on('click',function(){
    clearInterval(time);
    $('#start').attr('disabled',false);
    $('#pause').attr('disabled',true);
    console.log(time);
  })

  $('#reset').on('click',function(){
    hr = min = sec = 0;
    $('#sec').text('00');
    $('#min').text('00');
    $('#hrs').text('00');
    clearInterval(time);

    $('#pause').attr('disabled',true);
    $('#reset').attr('disabled',true);
    $('#start').attr('disabled',false);

  });









})
