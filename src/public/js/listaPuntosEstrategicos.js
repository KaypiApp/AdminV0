window.addEventListener('DOMContentLoaded', (e) => {
    fetch('http://localhost:3000/listPuntos')
    .then(res => res.json())
    .then(data => {
        if(data.response === 'success'){
            const todos = data.data;
            
            todos.forEach(todo => {
                document.querySelector('#listaPuntosEstrategicosDatos').innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header" style="background-color: #0799B6;">
                                <h5 class="card-title mb-0">${todo.Nombre}</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text"><strong>Categoria:</strong> ${todo.Categoria}</p>
                                <p class="card-text"><strong>Zona:</strong> ${todo.ZonasCBBA}</p>
                                <div class="d-flex justify-content-end">
                                    <a href="/puntoEstrategico/${todo._id}" class="btn btn-warning me-2">
                                        <img src="/img/Editar.png" alt="Editar" style="height: 30px;">
                                    </a>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${todo._id}">
                                        <img src="/img/Eliminacion.png" alt="Eliminar" style="height: 30px;">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${todo._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title" id="exampleModalLabel">Eliminar Punto Estratégico</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>¿Está seguro que desea eliminar <b>${todo.Nombre}</b>?</p>
                                    <small>* Esta acción es irrevertible</small>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <form action="/eliminarPuntoEstrategico" method="post">
                                        <input name="_id" value="${todo._id}" hidden>
                                        <button type="submit" class="btn btn-danger" name="submit">Eliminar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else {
            alert(data.response);
        }
    })
    .catch(err => console.error(err));
});
