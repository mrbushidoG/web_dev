$(function(){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status:'Ultra Important'},
        function(e){
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + '<br />';
            eventType = 'Event Type: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
})