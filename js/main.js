$(document).ready(function(){

    var requestList = [
        'B00KOIBN9A',
        '11307731011'

    ];

    $.getJSON('./api/amazon/lookup/B013UTM6HM')
        .success(function(data){
            console.log(data);
        })
        .error(function(error){
            console.log('error:');
            console.log(error);
        });

    $.getJSON('./api/amazon/node/11307731011')
        .success(function(data){
            console.log(data);
        })
        .error(function(error){
            console.log('error:');
            console.log(error);
        });
});