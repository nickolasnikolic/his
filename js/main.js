$(document).ready(function(){

    var requestList = [
        'B00KOIBN9A',
        '11307731011'

    ];

    $.getJSON('./api/amazon/lookup/11307731011')
        .success(function(data){
            console.log(data);
        })
        .error(function(error){
            console.log('error:');
            console.log(error);
        });
});