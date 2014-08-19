Seamless Integration
=======================================

Important
--------------------
```
Please do not geneate your vcode in JS as this will disclose the merchant verify key.
```

Getting started
---------------

Register your domain by email to our support : support@molpay.com

Include below javascript library in your web.

```html
 <!-- jQuery (necessary for MOLPay Seamless JavaScript plugins) -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 <script src="https://www.onlinepayment.com.my/MOLPay/API/seamless/js/MOLPay_seamless.deco.js"></script> 
```

Example
---------

![alt text](https://raw.githubusercontent.com/MOLPay/Maybank2u-Seamless-Integration/master/pay_via_m2u.png "Example Button")
```html
<!-- Button trigger MOLPay Seamless -->
<button type="button" id="myPay" class="btn btn-primary btn-lg" data-toggle="molpayseamless" data-mpsmerchantid="molpaymerchant" data-mpschannel="maybank2u" data-mpsamount="1.20" data-mpsorderid="TEST1139669863" data-mpsbill_name="MOLPay Technical" >Pay by Maybank2u</button>
```

Usage
-----

The MOLPay seamless plugin process your button, via data attributes or JavaScript.

<h3>Via data attributes</h3>

Activate a MOLPay seamless without writing JavaScript. Set <code>data-toggle="molpayseamless"</code> on a controller element, like a button, along with a <code>data-mpsamount="1.01"</code> to set value.

```html
<button type="button" data-toggle="molpayseamless">Pay by Maybank2u</button> 
```

<h3>Via JavaScript</h3>

Call a MOLPay seamless with id <code>myPay</code> with a single line of JavaScript:

```javascript
$( document ).ready(function() {
     var options = { 
                    mpsmerchantid:"molpaymerchant",
                    mpschannel:"maybank2u", 
                    mpsamount:"1.20", 
                    mpsorderid:"TEST728638391", 
                    mpsbill_name:"MOLPay Technical", 
                    ...
                   }; 
                    
     $('#myPay').MOLPaySeamless(options)
});
                        
```

<h3>Options</h3>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-mpsamount=""</code>.

Name | Data Type (size) | M/O | Description
--- | --- | --- | --- | ---
mpsmerchantid |	an{1..32} |	*M*	| Merchant login username provided by MOLPay.
mpschannel |	an{3..32} |	*M* | Refer to **Appendix C** for more channel code.
mpsamount |	ns{10,2} |	*M* |	The transaction amount in one bill. **Min accepted amount : 1.01**
mpsorderid |	an{1..32} |	*M* |	Bill / Invoice no. provided by merchant.
mpsbill_name |	a{1..128} |	*M* |	Buyer name.
mpsbill_email |	ans{1..128} |	*M* |	Buyer email.
mpsbill_mobile |	n{1..128} |	*M* |	Buyer mobile contact number.
mpsbill_desc |	an{1..200} |	*M* |	Bill / Description provided by merchant / buyer.
mpscountry |	a{2} |	*O* |	Buyer country.
mpsvcode |	an{32} |	*C* | This is the data integrity protection hash string provided by merchant.
mpscurrency |	a{3} |	*O* | Payment currency, E.g. MYR, SGD, USD & etc.
mpslangcode |	a{2} |	*O* |	Default language, E.g. 'en' for default
mpsreturnurl |	ans{1..200} |	*O* |	Obsoleted. Used for multiple return URL. All URLs must be registered beforehand with MOLPay.

Appendix A: Data Type Details
--------------------------------
No | Code | Description
----|------|----
1. | a | Letters, A-Za-z
2. | n | Numbers, 0-9
3. | s | Symbols, .:|?*,!&_-
4. | {x} | Fixed length x
5. | {y..x} | Length range: y – x
6. | {y,x} | Number range: 0-9. 0-9

Appendix B: M/O Details
--------------------------------
No | Code | Description
----|------|----
1. | M | Mandatory field.
2. | O | Optional field, value can be empty.
3. | C | Conditional

Appendix C: Channel details (mpschannel)
--------------------------------
No | Code | Description| Type
----|------|-----|--------
1. | maybank2u | Maybank2u | Online Banking
2. | cimbclicks | CimbClicks | Online Banking
3. | hlb  | HLB Connect | Online Banking
4. | rhb  | RHB Now | Online Banking
5. | amb  | AmOnline | Online banking
6. | cash-711 | 7-Eleven(MOLPay Cash) | Physical Payment
7. | cash-epay | epay(MOLPay Cash) | Physical Payment

Data attributes for individual MOLPay seamless
----------------------------------------------
Options for individual MOLPay seamless can alternatively be specified through the use of data attributes, as explained above.

Return Parameters
-----------------
- All return parameters are same as described in MOLPay API for merchant. 
- Merchant can use the same return URL script for this seamless integration.
- Once payment done, existing page will be replaced by the merchant return URL.

Support
-------
Merchant Technical Support / Customer Care : support@molpay.com <br>
Sales/Reseller Enquiry : sales@molpay.com <br>
Marketing Campaign : marketing@molpay.com <br>
Channel/Partner Enquiry : channel@molpay.com <br>
Media Contact : media@molpay.com <br>
R&D and Tech-related Suggestion : technical@molpay.com <br>
Abuse Reporting : abuse@molpay.com
