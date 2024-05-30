const Notificacion = require('../models/notificaciones');

$(function(){
    $('#formPrincipal')
      .form({
        fields: {
          nombreLinea: {
            identifier: 'nombreLinea',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor introduce el nombre de la línea'
              }
            ]
          },
          descripcion: {
            identifier: 'descripcion',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor introduce la descripción de la notificación'
              }
            ]
          },
          fechaInicio: {
            identifier: 'fechaInicio',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor introduce la fecha de inicio de la notificación'
              }
            ]
          },
          fechaFin: {
            identifier: 'fechaFin',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor introduce la fecha de fin de la notificación'
              }
            ]
          }
        }
      })
      .submit(function(e) {
        e.preventDefault();
        const data = $(this).serializeArray().reduce(function(obj, item) {
          obj[item.name] = item.value;
          return obj;
        }, {});

        // Agrega el atributo isSent con el valor false por defecto
        //se agrego esto 
        data.isSent = false;

        guardarNotificacion(data);
      });

    function guardarNotificacion(data) {
        const notificacion = new Notificacion(data);
        notificacion.save()
            .then((result) => {
                console.log('Notificación guardada:', result);
                window.location.href = '/listaNotificaciones';
            })
            .catch((error) => {
                console.error('Error al guardar la notificación:', error);
            });
    }
});
