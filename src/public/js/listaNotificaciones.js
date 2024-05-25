window.addEventListener('DOMContentLoaded', () => {
    fetch('/listaNotificaciones/listarNotificaciones')
        .then(res => res.json())
        .then(data => {
            if (data.response === 'success') {
                const notificaciones = data.notificaciones;
                let num = 1;
                const listaNotificacionesDatos = document.querySelector('#listaNotificacionesDatos');
                listaNotificacionesDatos.innerHTML = ''; // Limpiar el contenido previo
                notificaciones.forEach(notificacion => {
                    listaNotificacionesDatos.innerHTML += `
                        <tr>
                            <td class="text-center">${num}</td>
                            <td class="text-center">${notificacion.nombreLinea}</td>
                            <td class="text-center">${notificacion.descripcion}</td>
                            <td class="text-center">${formatDate(notificacion.fechaInicio)}</td>
                            <td class="text-center">${formatDate(notificacion.fechaFin)}</td>
                            <td class="text-center">
                                <a href="/listaNotificaciones/editarNotificacion/${notificacion._id}" class="ui yellow icon button">
                                    <i class="edit outline icon"></i>
                                </a>
                            </td>
                            <td class="text-center">
                                <button type="button" class="ui red icon button" data-bs-toggle="modal" data-bs-target="#exampleModal${notificacion._id}">
                                    <i class="trash alternate outline icon"></i>
                                </button>
                                <div class="modal fade" id="exampleModal${notificacion._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h2 class="modal-title" id="exampleModalLabel">Eliminar Notificación</h2>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <br>
                                                <p>¿Estás seguro de que deseas eliminar la notificación <b>${notificacion.nombreLinea}</b>?</p>
                                                <small>* Esta acción es irreversible</small>
                                            </div>
                                            <br>
                                            <div class="modal-footer">
                                                <button type="button" class="ui teal button" data-bs-dismiss="modal">Cancelar</button>
                                                <form action="/listaNotificaciones/eliminarNotificacion/${notificacion._id}" method="POST">
                                                    <button type="submit" class="ui red button" name="submit">Eliminar</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                    num++;
                });
            } else {
                alert(data.response);
            }
        })
        .catch(err => console.error(err));

    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        return `${day}/${month}/${year}`;
    }
});
