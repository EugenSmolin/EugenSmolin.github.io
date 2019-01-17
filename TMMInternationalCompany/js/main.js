$(document).ready(function () {

    // === SEARCH === //
    $('#btn-search').on('click', function () {
        console.log($('#inp-search').val());

        $('#inp-search').val('');
    });


    // === SERVICES MORE === //
    $('.slider__more').on('click', function () {

        $(this).closest('.slider__desc').find('.add-more-info').slideToggle();

    });


    // === MODAL LOGIN === //
    /*$('#login').on('click', function (e) {
        e.prevent0();
        $('#modal-login').addClass('fadeIn'); //.fadeIn(300);
    });

    $('.modal-window__close').on('click', function () {
        $(this).closest('.modal-window').removeClass('fadeIn'); //.fadeOut(300);
    });*/


    // === LOGIN === //
    /*$('#btn-login').on('click', function () {
        let $valid = true;

        if (!validEmail($('[name="login-email"]'))) {
            $valid = false;
        }

        if (!validPassword($('[name="login-password"]'))) {
            $valid = false;
        }

        if ($valid === true) {
            console.log('Good log in!');
        } else {
            console.log('Error valid log in!!!');
        }
    });*/


    // === SIGN UP === //
    /*$('#btn-sign-up').on('click', function () {

        $('#modal-sign-up').addClass('fadeIn');
    });*/


    // === CONFIRM AGREE DISABLED === //
    /*$('#confirm-agree').on('change', function () {
        let $thisChecked = $(this).prop('checked');
        if ($thisChecked === true) {
            $('#btn-create-account').removeClass('btn-disabled').prop('disabled', false);
        } else {
            $('#btn-create-account').addClass('btn-disabled').prop('disabled', true);
        }
    });*/


    // === INPUT VALIDATION === //
    function validEmail(_this) {
        let $inpVal = _this.val();
        let $regExp = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/;

        if ($inpVal === '' || !$regExp.test($inpVal)) {
            _this.addClass('required-input');
            return false;
        }

        return true;
    }

    /*function validPassword(_this) {
        let $inpVal = _this.val();

        if ($inpVal.length < 6) {
            _this.addClass('required-input');
            return false;
        }

        return true;
    }*/

    /*function validConfirmPassword(_pass, _passConf) {
        let $pass = _pass.val();
        let $passConf = _passConf.val();

        if ($pass === '' || $pass !== $passConf) {
            _pass.addClass('required-input');
            _passConf.addClass('required-input');
            return false;
        }

        return true;
    }*/

    function validName(_this) {
        let $inpVal = _this.val();

        if ($inpVal === '') {
            _this.addClass('required-input');
            return false;
        }

        return true;
    }

    function validPhoneNumber(_this) {
        let $inpVal = _this.val();

        if ($inpVal === '') {
            _this.addClass('required-input');
            return false;
        }

        return true;
    }


    // === CREATE ACCOUNT - SIGN UP === //
    /*$('#btn-create-account').on('click', function () {
        let $valid = true;

        // valid account
        if (!validName($('[name="first-name"]'))) {
            $valid = false;
        }

        if (!validName($('[name="last-name"]'))) {
            $valid = false;
        }

        if (!validEmail($('[name="user-email"]'))) {
            $valid = false;
        }

        if (!validConfirmPassword($('[name="user-pass"]'), $('[name="user-pass-confirm"]'))) {
            $valid = false;
        }


        if ($valid === true) {
            createAccount();
        } else {
            console.log('Error valid sign up!!!');
        }

    });

    function createAccount() {

        let $createAccount = {
            firstName: $('[name="first-name"]').val(),
            lastName: $('[name="last-name"]').val(),
            phone: $('[name="user-phone"]').val(),
            company: $('[name="company"]').val(),
            country: $('[name="country"]').val(),
            street: $('[name="street"]').val(),
            code: $('[name="code"]').val(),
            email: $('[name="user-email"]').val(),
            password: $('[name="user-pass-confirm"]').val()
        };

        console.log($createAccount);

        // $.ajax({
        //     type: "POST",
        //     url: "",
        //     contentType: "application/json",
        //     data: JSON.stringify($createAccount),
        //     success: function (data) {
        //
        //         console.log(data);
        //
        //     }
        //
        // });

    }*/


    // === SEND FORM - HOME PAGE === //
    $('#btn-send-quick-quote').on('click', function () {

        let $valid = true;

        if (!validEmail($('[name="Email"]'))) {
            $valid = false;
        }


        if ($valid === true) {
            sendFormQuickQuote();
        } else {
            console.log('Error valid send form!!!');
        }

    });

    function sendFormQuickQuote() {

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $('#form-quick-quote').serialize(),
            success: function () {
                $('#message-success').addClass('fadeIn');
                $('#form-quick-quote').trigger("reset");
                setTimeout(function () {
                    $('#message-success').removeClass('fadeIn');
                }, 4000);
            },
            error: function (error) {
                console.log('Error', error);
                $('#message-server-error').addClass('fadeIn');
                setTimeout(function () {
                    $('#message-server-error').removeClass('fadeIn');
                }, 4000);
            }
        });

    }


    // === AJAX MESSAGE CLOSE === //
    $('.message-success__close').on('click', function () {
        $(this).closest('.message-success').removeClass('fadeIn');
    });


    // === SEND FORM - CONTACTS PAGE === //
    $('#btn-send-contacts').on('click', function () {

        let $valid = true;

        if (!validName($('[name="FirstName"]'))) {
            $valid = false;
        }

        if (!validName($('[name="SecondName"]'))) {
            $valid = false;
        }

        if (!validPhoneNumber($('[name="Phone"]'))) {
            $valid = false;
        }

        if (!validEmail($('[name="Email"]'))) {
            $valid = false;
        }


        if ($valid === true) {
            sendFormContacts();
        } else {
            console.log('Error valid send form!!!');
        }

    });

    function sendFormContacts() {

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $('#form-contacts').serialize(),
            success: function () {
                $('#message-success').addClass('fadeIn');
                $('#form-contacts').trigger("reset");
                setTimeout(function () {
                    $('#message-success').removeClass('fadeIn');
                }, 4000);
            },
            error: function (error) {
                console.log('Error', error);
                $('#message-server-error').addClass('fadeIn');
                setTimeout(function () {
                    $('#message-server-error').removeClass('fadeIn');
                }, 4000);
            }
        });

    }


    // === REMOVE CLASS required-input === //
    $('input').on('focus', function () {
        $(this).removeClass('required-input');
    });


    // === ВВОД ТОЛЬКО ЦИФР === //
    $('.only-number').bind("change keyup input click", function () {
        if ($(this).val().match(/[^0-9]/g)) {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        }
    });


    // === MAKE ORDER === //
    $('#make-order').on('click', function () {
        console.log('Make order!');
    });


    // === SELECT 2 === //
    $('.select-freight').select2({
        dropdownCssClass: 'quote-select-dropdown'
    });

    $('.select-calculate').select2({
        dropdownCssClass: 'calculate-select-dropdown'
    });

});