// === CALCULATOR RATES === //
// === GROUND TRANSPORTATION === //
var $dataGround;

$.getJSON("./js/ground.json", function (data) {

    console.log('%c data ground', 'color: red; font-weight: 600; font-size: 16px;', data);

    $dataGround = data;

    for (let key in data) {
        if (key !== '') {
            let $option = '<option value="' + key + '">' + key + '</option>';
            $('[name="auction"]').append($option);
        }
    }

});

$('[name="auction"]').on('change', function () {
    let $inpVal = $(this).val();

    if ($inpVal.toLowerCase() !== '0') {

        for (let key in $dataGround) {

            if ($inpVal.toLowerCase() === key.toLowerCase()) {

                $('[name="location"]').html('<option value="0.00" selected>Choose location</option>');
                $('[name="ground-port"]').html('<option value="0.00" selected>Choose exit port</option>');
                $('#ground-trans').val('0.00');

                for (let location in $dataGround[key]) {
                    let $option = "<option data-price='" + JSON.stringify($dataGround[key][location]) + "' value='" + location + "'>" + location + "</option>";
                    $('[name="location"]').append($option);
                }

            }

        }

    } else {

        let $option = '<option value="0.00" selected>Choose location</option>';
        let $optionExitPort = '<option value="0.00" selected>Choose exit port</option>';
        $('[name="location"]').html($option);
        $('[name="ground-port"]').html($optionExitPort);
        $('#ground-trans').val('0.00');

    }

    totalBill();

});


$('[name="location"]').on('change', function () {

    let $inpVal = $(this).val();

    if ($inpVal.toLowerCase() !== '0') {

        let $exitPort = JSON.parse($('[name="location"] option:selected').attr('data-price'));

        // console.log($exitPort);

        $('[name="ground-port"]').html('<option value="0.00" selected>Choose exit port</option>');
        $('#ground-trans').val('0.00');

        for (let key in $exitPort) {
            let $option = "<option value='" + $exitPort[key] + "'>" + key + "</option>";
            $('[name="ground-port"]').append($option);
        }

    } else {

        let $option = '<option value="0.00" selected>Choose exit port</option>';
        $('[name="ground-port"]').html($option);
        $('#ground-trans').val('0.00');

    }

    totalBill();

});

$('[name="ground-port"]').on('change', function () {

    let $inpVal = $(this).val();

    if ($inpVal !== 'call') {
        $('#ground-trans').val($inpVal);
    } else {
        $('#call-message-ground').fadeIn();
        $('#ground-trans').val('0.00');
        setTimeout(function () {
            $('#call-message-ground').fadeOut();
        }, 5000);
    }

    totalBill();

});


// === OCEAN TRANSPORTATION === //
var $dataOcean;

$.getJSON("./js/ocean.json", function (data) {

    console.log('%c data ocean', 'color: green; font-weight: 600; font-size: 16px;', data);

    $dataOcean = data;

    for (let key in data) {
        let $option = "<option value='" + key + "'>" + key + "</option>";
        $('[name="ocean-port"]').append($option);
    }

});


$('[name="ocean-port"]').on('change', function () {

    let $inpVal = $(this).val();

    if ($inpVal.toLowerCase() !== '0') {
        for (let key in $dataOcean) {
            if ($inpVal.toLowerCase() === key.toLowerCase()) {
                $('[name="destination"]').html('<option value="0.00" selected>Choose destination</option>');
                $('#ocean-trans').val('0.00');

                for (let port in $dataOcean[key]) {
                    let $option = "<option value='" + $dataOcean[key][port] + "'>" + port + "</option>";
                    $('[name="destination"]').append($option);
                }
            }
        }
    } else {
        let $option = '<option value="0.00" selected>Choose exit port</option>';
        $('[name="destination"]').html($option);
        $('#ocean-trans').val('0.00');
    }

    totalBill();

});

$('[name="destination"]').on('change', function () {
    let $inpVal = $(this).val();

    if ($inpVal !== 'call') {
        $('#ocean-trans').val($inpVal);
    } else {
        $('#call-message-ocean').fadeIn();
        $('#ocean-trans').val('0.00');
        setTimeout(function () {
            $('#call-message-ocean').fadeOut();
        }, 5000);
    }

    totalBill();
});

function totalBill() {
    let $groundTrans = $('#ground-trans').val();
    let $oceanTrans = $('#ocean-trans').val();

    $groundTrans = (!isNaN(parseFloat($groundTrans))) ? parseFloat($groundTrans) : 0;
    $oceanTrans = (!isNaN(parseFloat($oceanTrans))) ? parseFloat($oceanTrans) : 0;

    let $result = $groundTrans + $oceanTrans;
    $('#total').val($result.toFixed(2));
}