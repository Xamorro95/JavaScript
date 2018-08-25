/* Id de form --> ValidarForm */
/* Recurre a bootstrapvalidator.min.js */

$('#ValidarForm').bootstrapValidator({
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				Nombre: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduce tu nombre'
						}
					}
				},
				Correo: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduce tu correo'
						},
						emailAddress: {
							message: 'Por favor, introduce un correo válido'
						}
					}
				},
			},
		});
