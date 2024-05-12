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
        editarNotificacion(data);
      });

    function editarNotificacion(data) {
        const notificacionId = $('#_id').val();
        Notificacion.findByIdAndUpdate(notificacionId, data, { new: true })
            .then((result) => {
                console.log('Notificación actualizada:', result);
                window.location.href = '/listaNotificaciones';
            })
            .catch((error) => {
                console.error('Error al actualizar la notificación:', error);
            });
    }
});
