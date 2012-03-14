// Simple AJAX Example
$(function () {
    var input  = $('form#ajax > input[type=text]');
    input.bind('keyup', function (e) {
        var val = input.val();
        if (val)
            $.get('data/' + val, function (data) {
                $('div#display').html(data);
            });
        return false;
    });
});