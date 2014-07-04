Maybank2u-Seamless-Integration
==============================


Getting started
---------------

Include below javascript library in your web.

```javascript
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

<h3>Via JavaScript</h3>

Call a MOLPay seamless with id <code>myPay</code> with a single line of JavaScript:

```javascript
$('#myPay').MOLPaySeamless(options) 
```

<h3>Options</h3>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-amount=""</code>.

Name | type | mandatory | dafault | description
--- | --- | --- | --- | ---
mpsmerchantid |	String |	*Yes* |		 | Is the merchant login name given by MOLPay.
mpschannel |	String |	*Yes* |	maybank2u |	Bank code name.
mpsamount |	Float with 2 decimal place |	*Yes* |	1.10 |	The transaction amount in one bill. **Min accepted amount : 1.01**
mpsorderid |	String |	*Yes* |	MPS`<?php=rand()>` |	Bill/invoice number.
mpsbill_name |	String |	*Yes* |	MOLPay Demo |	Buyer name
mpsbill_email |	String |	*Yes* |	demo@molpay.com |	Buyer email
mpsbill_mobile |	String |	*Yes* |	55218438 |	Buyer mobile contact number.
mpsbill_desc |	String |	*Yes* |	Testing MOLPay seamless integration |	Purchase itemized list or order description. Try to avoid special character so that the payment request is not blocked by web application firewall.
mpscountry |	ISO3166 country code (Alpha2) |	*Optional* |	MY |	Buyer.s country or the shipping destionation country.
E.g. MY for Malaysia.








