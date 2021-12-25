//client side validation with bootstrap
//Script para validacións de Bootstrap. Poñer no boilerplate
<script>
    (function () {
      'use strict'
    
     const forms = document.querySelectorAll('.validated-form')
    
      Array.from(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()
    </script>


//Ejemplo form
<form action="/sounds" method="POST" novalidate class="validated-form"><!--Para non usar validador estándar e usar o de bootstrap. Require función js-->
<div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Nombre:</label>
    <div class="col-sm-10">
        <input type="text" id="name" placeholder="Sonido" name="sound[name]" class="form-control" required>
        <div class="valid-feedback">Válido!</div>
    </div>
</div>
</form>

//SERVER SIDE validation with Joi
//Sacamos a validación Server-Side con Joi para unha función e pasámola nas rutas de post e editar
const joiValidation = (req, res, next) => {
    const validation = joiSoundSchema.validate(req.body);
    if(validation.error) {
        const errorMsg = validation.error.details.map(msg => msg.message).join(",");//Como Joi mete os detalles do error nun array de objetos, hai q sacalo para enseñalo
        throw new ExpressError(errorMsg, 400);
    } else {
        next();
    };
};


//Noutro archivo
const Joi = require("joi");//Schema para a validación con Joi. Para avitar problemas usar TODOS os campos do schema, anque sea con Joi.any();

const joiSoundSchema = Joi.object({
    sound: Joi.object({
        name: Joi.string().required(),
        minFrec: Joi.number().required().min(0),
        maxFrec: Joi.number().required().min(0),
        minInt: Joi.number().required().min(0),
        maxInt: Joi.number().required().min(0),
        category: Joi.string().valid("hogar", "naturaleza", "conversación", "ocio", "lugares", "ciudad"),
        audio: Joi.any(),
        image: Joi.any()
    }).required()
});

module.exports = joiSoundSchema;