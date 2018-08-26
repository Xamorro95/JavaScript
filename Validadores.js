/* Valida los distintos tipos de tarjetas de credito */
(window.jQuery),function(a){
a.fn.bootstrapValidator.validators.creditCard={
	validate:function(b,c){
		var d=c.val();if(""==d)return!0;if(/[^0-9-\s]+/.test(d))return!1;if(d=d.replace(/\D/g,""),!a.fn.bootstrapValidator.helpers.luhn(d))return!1;var e,f,g={
			AMERICAN_EXPRESS:{
				length:[15],prefix:["34","37"]
			},DINERS_CLUB:{
				length:[14],prefix:["300","301","302","303","304","305","36"]
			},DINERS_CLUB_US:{
				length:[16],prefix:["54","55"]
			},DISCOVER:{
				length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]
			},JCB:{
				length:[16],prefix:["3528","3529","353","354","355","356","357","358"]
			},LASER:{
				length:[16,17,18,19],prefix:["6304","6706","6771","6709"]
			},MAESTRO:{
				length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]
			},MASTERCARD:{
				length:[16],prefix:["51","52","53","54","55"]
			},SOLO:{
				length:[16,18,19],prefix:["6334","6767"]
			},UNIONPAY:{
				length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]
			},VISA:{
				length:[16],prefix:["4"]
			}
		};
		for(e in g)for(f in g[e].prefix)if(d.substr(0,g[e].prefix[f].length)==g[e].prefix[f]&&-1!=g[e].length.indexOf(d.length))return!0;return!1
	}
}
}
