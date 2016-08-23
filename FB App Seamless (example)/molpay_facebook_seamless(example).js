$(function() {
    $.ajaxSetup({
        cache: true
    }); //Enable catching - jQuery will timestamp by default.
    //$.getScript('//connect.facebook.net/en_US/sdk/debug.js', function(){
    $.getScript('//connect.facebook.net/en_US/all.js', function() {

        FB.init({
            appId: '(Your FB AppID)',
        });

        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
                FB.api('/me', function(response) {
                    //

                    /*BELOW: 2 lines of code that set the bill_name and bill_email automatically. The setting is
                    ** on data attributes. Then the rest is done as in usual seamless integration.
                    ##USER: have to link to MOLPay facebook .js after linking to jQuery but before linking to
                    ## MOLPay seamless .js.
                    */

                    $('#molpay_btn').html("<button type=\"button\" id=\"myPay\" class=\"btn btn-primary btn-lg\" data-toggle=\"molpayseamless\" data-mpsmerchantid=\"molpaymerchant\" data-mpschannel=\"maybank2u\" data-mpsamount=\"1.20\" data-mpsorderid=\"TEST1139669863\" data-mpsbill_name=\"\" >Pay by Maybank2u</button>");

                    var var_mpsbill_name = response.name;
                    var var_mpsbill_email = response.email;
                    if ($("[data-toggle=\"molpayseamless\"]")) {
                        $("[data-toggle=\"molpayseamless\"]").attr('data-mpsbill_name', var_mpsbill_name)
                    } else {
                        $("[data-toggle=molpayseamless]").attr('data-mpsbill_name', var_mpsbill_name);
                    } //End of if()
                    if ($("[data-toggle=\"molpayseamless\"]")) {
                        $("[data-toggle=\"molpayseamless\"]").attr('data-mpsbill_email', var_mpsbill_email);
                    } else {
                        $("[data-toggle=molpayseamless]").attr('data-mpsbill_email', var_mpsbill_email);
                    } //End of if()
                    if ($("[data-toggle=\"molpayseamless\"]")) {
                        $("[data-toggle=\"molpayseamless\"]").attr('data-mpsreturnurl', window.location.href);
                    } else {
                        $("[data-toggle=molpayseamless]").attr('data-mpsreturnurl', window.location.href);
                    } //End of if()

                    alert("BILL_NAME: " + $("[data-toggle=molpayseamless]").attr('data-mpsbill_name') + "\n\nBILL_EMAIL: " + $("[data-toggle=molpayseamless]").attr('data-mpsbill_email') + "\n\nBILL_AMOUNT: " + $("[data-toggle=molpayseamless]").attr('data-mpsamount') + "\n\nMERCHANTID: " + $("[data-toggle=molpayseamless]").attr('data-mpsmerchantid'));
                });
                console.log('Logged in=> DONE');
            } else {
                //
                console.log('NOT LOGGED IN');
                FB.login(function(response) {
                    //
                    //alert("Login response....");
                    console.log('LOGIN RESPONSE....');

                    window.location = window.location.href;

                    console.log('LOGIN RESPONSE....=> DONE');
                }, {
                    scope: 'public_profile,email'
                });
                //alert("else");
                console.log('NOT Logged in=> DONE');
            } //End of if()
        });
    });
});
