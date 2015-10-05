$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B011CZLM0I',
        'B00ZIHOWZ4',
        'B00E98Z8OW',
        'B00U4CET0G',
        'B00QX3KTN6',
        'B012BGTVB4',
        'B008EQ716I',
        'B0045EPF98',
        'B00LSWJB86'
    ];

    _.each(requestList,function(asin, index, list){
        $.getJSON('./api/amazon/lookup/' + asin)
            .success(function (data) {

                var theSaleDisplay = $('.sale-items article').eq(index);

                theSaleDisplay.find('h2').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('description').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('img').attr( 'src', data.Items.Item.LargeImage.URL );

                $('.sale-items article').eq(index).click(function(){
                    window.location = data.Items.Item.DetailPageURL;
                });
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            });
    });
});