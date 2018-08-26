/* Id de form --> ValidarForm */
/* Recurre a bootstrapvalidator.min.js */

<script src="scripts/bootstrap/js/bootstrapvalidator.min.js"></script>
	<script type="text/javascript">
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
							message: 'Por favor, introduzca su nombre'
						}
					}
				},
				Apellidos: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca sus apellidos'
						}
					}
				},
				FechaNacimiento: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su fecha de nacimiento'
						}
					}
				},
				Correo: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su correo electrónico'
						},
						emailAddress: {
							message: 'Por favor, introduzca un correo válido'
						}
					}
				},
				Movil: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su teléfono móvil'
						},
						numeric: {
							message: 'El teléfono móvil solo puede contener números'
						},
						stringLength: {
							min: 9,
							message: 'Por favor, introduzca un teléfono móvil válido'
						}
					}
				},
				Fijo: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su teléfono fijo'
						},
						numeric: {
							message: 'El teléfono fijo solo puede contener números'
						},
						stringLength: {
							min: 9,
							message: 'Por favor, introduzca un teléfono fijo válido'
						}
					}
				},
				NIF: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su NIF'
						}
					}
				},
				Acepto: {
					validators: {
						notEmpty: {
							message: 'Debes aceptar los términos y condiciones del aviso legal'
						}
					}
				},
				Poblacion: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su población'
						}
					}
				},
				CP: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca su código postal'
						},
						numeric: {
							message: 'El código postal solo puede contener números'
						},
						stringLength: {
							min: 5,
							max: 5,
							message: 'Por favor, introduzca un código postal válido'
						}
					}
				},
				Cuota: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca la cuota'
						},
						numeric: {
							message: 'La cuota solo puede contener números'
						},
					}
				},
				Iban: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca el Iban'
						},
						stringLength: {
							min: 4,
							max: 4,
							message: 'Incorrecto'
						}
					}
				},
				Entidad: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca La entidad'
						},
						stringLength: {
							min: 4,
							max: 4,
							message: 'Incorrecto'
						}
					},
					numeric: {
							message: 'Incorrecto'
						},
				},
				Oficina: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca la oficina'
						},
						stringLength: {
							min: 4,
							max: 4,
							message: 'Incorrecto'
						}
					},
					numeric: {
							message: 'Incorrecto'
						},
				},
				DC: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca el DC'
						},
						stringLength: {
							min: 2,
							max: 2,
							message: 'Incorrecto'
						}
					},
					numeric: {
							message: 'Incorrecto'
						},
				},
				Ncuenta: {
					validators: {
						notEmpty: {
							message: 'Por favor, introduzca el número de cuenta'
						},
						stringLength: {
							min: 10,
							max: 10,
							message: 'Incorrecto'
						}
					},
					numeric: {
							message: 'Incorrecto'
						},
				},
			}
		});
	</script>
