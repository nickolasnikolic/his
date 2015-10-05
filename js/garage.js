$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B00SCKA6XQ',
        'B001DNRJLG',
        'B001355MX6',
        'B00DPH6DM4',
        'B001HT720O',
        'B00028CFC6',
        'B00FAHCDDA',
        'B00K4UWY2I',
        'B002S4L4RY'
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