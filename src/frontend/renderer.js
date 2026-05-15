const tituloInput = document.getElementById('titulo-input');
const descricaoInput = document.getElementById('descricao-input');
const btnAdicionar = document.getElementById('adicionar-btn');

const colunaPendente = document.getElementById('pendente');
const colunaAndamento = document.getElementById('andamento');
const colunaConcluida = document.getElementById('concluida');

const API = 'http://localhost:3000/tarefas';


async function carregarTarefas() {

    const response = await fetch(API);
    const json = await response.json();

    const tarefas = json.data || json;

    renderizarTarefas(tarefas);
}


function renderizarTarefas(tarefas) {

    colunaPendente.innerHTML = '';
    colunaAndamento.innerHTML = '';
    colunaConcluida.innerHTML = '';

    tarefas.forEach(tarefa => {

        const li = document.createElement('li');

        li.innerHTML = `
        <div>
            <strong>${tarefa.titulo}</strong>
            <small>${tarefa.descricao}</small>

            <span class="status ${tarefa.status.replace(' ', '')}">
                ${tarefa.status}
            </span>
        </div>

        <div class="acoes">
            <button class="editar-btn">Editar</button>
            <button class="deletar-btn">Excluir</button>
        </div>
        `;


        // 🔹 Enviar para coluna correta

        if (tarefa.status === "pendente") {
            colunaPendente.appendChild(li);
        }

        else if (tarefa.status === "em andamento") {
            colunaAndamento.appendChild(li);
        }

        else {
            colunaConcluida.appendChild(li);
        }


        const btnEditar = li.querySelector('.editar-btn');
        const btnDeletar = li.querySelector('.deletar-btn');


        btnEditar.addEventListener('click', () => {

            li.innerHTML = `
            <input type="text" class="edit-titulo" value="${tarefa.titulo}">
            <input type="text" class="edit-descricao" value="${tarefa.descricao}">

            <select class="edit-status">

                <option value="pendente" ${tarefa.status === 'pendente' ? 'selected' : ''}>
                Pendente
                </option>

                <option value="em andamento" ${tarefa.status === 'em andamento' ? 'selected' : ''}>
                Em andamento
                </option>

                <option value="concluída" ${tarefa.status === 'concluída' ? 'selected' : ''}>
                Concluída
                </option>

            </select>

            <button class="salvar-btn">Salvar</button>
            `;


            const btnSalvar = li.querySelector('.salvar-btn');

            btnSalvar.addEventListener('click', async () => {

                const novoTitulo = li.querySelector('.edit-titulo').value;
                const novaDescricao = li.querySelector('.edit-descricao').value;
                const novoStatus = li.querySelector('.edit-status').value;


                await fetch(`${API}/${tarefa.id}`, {

                    method: 'PUT',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        titulo: novoTitulo,
                        descricao: novaDescricao,
                        status: novoStatus
                    })
                });

                carregarTarefas();

            });

        });


        btnDeletar.addEventListener('click', async () => {

            await fetch(`${API}/${tarefa.id}`, {
                method: 'DELETE'
            });

            carregarTarefas();

        });

    });

}


btnAdicionar.addEventListener('click', async () => {

    const titulo = tituloInput.value.trim();
    const descricao = descricaoInput.value.trim();

    if (titulo && descricao) {

        await fetch(API, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                titulo,
                descricao
            })

        });

        tituloInput.value = '';
        descricaoInput.value = '';

        carregarTarefas();

    }

});


carregarTarefas();