$(document).ready(function(){

    var requestList = ['B011JEUHM6','B013P16C8E','B00P03AKC0','B00YA15IH0','B00KACKORM','1612194443'];
    var responseList = [];

    _.each(requestList,function(asin){
        $.getJSON('./api/amazon/lookup/' + asin)
            .success(function (data) {
                responseList.push(data.Items.Item);
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            });
    });

    console.log(responseList);

});