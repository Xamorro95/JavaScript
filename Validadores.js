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

/* Valida Cusip tarjetas de credito */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.cusip={
		validate:function(b,c){
			var d=c.val();if(""==d)return!0;if(d=d.toUpperCase(),!/^[0-9A-Z]{9}$/.test(d))return!1;for(var e=a.map(d.split(""),function(a){
				var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a
			}),f=e.length,g=0,h=0;f-1>h;h++){var i=parseInt(e[h]);h%2!=0&&(i*=2),i>9&&(i-=9),g+=i}return g=(10-g%10)%10,g==e[f-1]
		}
	}
}

/* Valida CVV de tarjeta de credito */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.cvv={
		html5Attributes:{
			message:"message",ccfield:"creditCardField"
		},validate:function(a,b,c){var d=b.val();if(""==d)return!0;if(!/^[0-9]{3,4}$/.test(d))return!1;if(!c.creditCardField)return!0;var e=a.getFieldElements(c.creditCardField).val();if(""==e)return!0;e=e.replace(/\D/g,"");var f,g,h={
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
		},i=null;for(f in h)for(g in h[f].prefix)if(e.substr(0,h[f].prefix[g].length)==h[f].prefix[g]&&-1!=h[f].length.indexOf(e.length)){i=f;break}return null==i?!1:"AMERICAN_EXPRESS"==i?4==d.length:3==d.length}
	}
}

/* Valida si es un archivo, junto a su extensión */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.file={
		html5Attributes:{
			extension:"extension",maxsize:"maxSize",message:"message",type:"type"
		},validate:function(a,b,c){
			var d=b.val();if(""==d)return!0;var e,f=c.extension?c.extension.split(","):null,g=c.type?c.type.split(","):null,h=window.File&&window.FileList&&window.FileReader;if(h)for(var i=b.get(0).files,j=i.length,k=0;j>k;k++){if(c.maxSize&&i[k].size>parseInt(c.maxSize))return!1;if(e=i[k].name.substr(i[k].name.lastIndexOf(".")+1),f&&-1==f.indexOf(e))return!1;if(g&&-1==g.indexOf(i[k].type))return!1}else if(e=d.substr(d.lastIndexOf(".")+1),f&&-1==f.indexOf(e))return!1;return!0
		}
	}
}

/* Mayor que lo que indiquemos */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.greaterThan={
		html5Attributes:{
			message:"message",value:"value",inclusive:"inclusive"
		},enableByHtml5:function(a){
			var b=a.attr("min");return b?{value:b}:!1
		},validate:function(a,b,c){
			var d=b.val();return""==d?!0:(d=parseFloat(d),c.inclusive===!0?d>c.value:d>=c.value)
		}
	}
}

/* Comprueba que sea un dígito hexadecimal */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.hex={
		validate:function(a,b){
			var c=b.val();return""==c?!0:/^[0-9a-fA-F]+$/.test(c)
		}
	}
}

/* Comprueba que sea un código de color hexadecimal */
(window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.hexColor={
		enableByHtml5:function(a){
			return"color"==a.attr("type")
		},validate:function(a,b){
			var c=b.val();return""==c?!0:/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)
		}
	}
}

/* Comprueba que son digitos */
window.jQuery),function(a){
	a.fn.bootstrapValidator.validators.digits={
		validate:function(a,b){
			var c=b.val();return""==c?!0:/^\d+$/.test(c)
		}
	}
}
