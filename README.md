Maybank2u-Seamless-Integration
==============================


Getting started
---------------

Include below javascript library in your web.

```html
 <script src="https://www.onlinepayment.com.my/MOLPay/API/seamless/js/MOLPay_seamless.deco.js"></script> 
```

Example
---------

```html
<!-- Button trigger MOLPay seamless -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="molpayseamless" data-mpsmerchantid="molpaymerchant" data-mpschannel="maybank2u" data-mpsamount="1.20" data-mpsorderid="TEST1139669863" data-mpsbill_name="MOLPay Technical" >Pay via Maybank2u</button>
```

Usage
-----

The MOLPay seamless plugin process your button, via data attributes or JavaScript.

<h3>Via data attributes</h3>

Activate a MOLPay seamless without writing JavaScript. Set <code>data-toggle="molpayseamless"</code> on a controller element, like a button, along with a <code>data-amount="1.01"</code> to set value.

```html
<button type="button" data-toggle="molpayseamless">Pay via Maybank2u</button> 
```
