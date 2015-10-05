$(document).ready(function(){

    var requestList = ['B011JEUHM6','B013P16C8E','B00P03AKC0','B00YA15IH0','B00KACKORM','1612194443'];
    var responseList = [];

    _.each(requestList,function(asin, index, list){
        $.getJSON('./api/amazon/lookup/' + asin)
            .success(function (data) {
                console.log(data);
                responseList.push(data.Items.Item);

                var theSaleDisplay = $('section.sale-items article').eq(index);

                theSaleDisplay.find('h2').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('description').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('img').src( data.Items.Item.LargeImage.URL );

                theSaleDisplay.click(function(){
                    window.location = data.Items.Item.DetailPageURL;
                });
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            });
    });

});