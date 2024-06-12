window.addEventListener('DOMContentLoaded', (e) => {
  fetch('http://localhost:3000/listLineas')
  .then(res => res.json())
  .then(data => {
    if(data.response === 'success'){
      const todos = data.data;
      
      todos.forEach(todo => {
        document.querySelector('#listaLineasDatos').innerHTML += `
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header" style="background-color: #0799B6;">
                <h5 class="card-title mb-0">${todo.Nombre}</h5>
              </div>
              <div class="card-body">
                <p class="card-text"><strong>Categoria:</strong> ${todo.Categoria}</p>
                <p class="card-text"><strong>Horarios:</strong> ${todo.Horarios || 'N/A'}</p>
                <div class="d-flex justify-content-between">
                  <a href="/linea/${todo._id}" class="btn btn-warning"><i class="edit outline icon"></i> Modificar</a>
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${todo._id}">
                    <i class="trash alternate outline icon"></i> Eliminar
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
                  <h2 class="modal-title" id="exampleModalLabel">Eliminar Línea</h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>¿Está seguro que desea eliminar <b>${todo.Nombre}</b>?</p>
                  <small>* Esta acción es irrevertible</small>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <form action="/eliminarLinea" method="post">
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
