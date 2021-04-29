//TASK1
//$("a[href = 'https://']").attr('target','_blank');


//TASK2
// $('h2.head').css('background-color', 'green').find('.inner').css('fontSize', '35px');

//TASK3
// $('div').insertBefore('h3');

//TASK4
$('input:checkbox').click(function(){
    $('#result span').html($('input:checkbox:checked').length);
});

if($('#result span').html($('input:checkbox:checked').length) <= 3) {
    $('input:checkbox:disabled');
}