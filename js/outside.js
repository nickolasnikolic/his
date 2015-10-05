$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B00PU9WUH2',
        'B00Q7AYL2K',
        'B00LUOP01O',
        'B00BD6CU6W',
        'B014BTCG0W',
        'B00UZU6DTM',
        'B00I9R40E8',
        'B003G7VUNK',
        'B00AMADFIM'
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