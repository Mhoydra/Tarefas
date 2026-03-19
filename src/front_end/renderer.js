const api = "http://localhost:3000/tarefas";

const form = document.getElementById("form-tarefa");
const lista = document.getElementById("lista");

// LISTAR
async function listar() {
    const res = await fetch(api);
    const tarefas = await res.json();

    lista.innerHTML = "";

    tarefas.forEach(t => {
        lista.innerHTML += `
            <li>
                ${t.titulo}
                <button onclick="deletar(${t.id})">X</button>
            </li>
        `;
    });
}

// CRIAR
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;

    await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo })
    });

    form.reset();
    listar();
});

// DELETAR
async function deletar(id) {
    await fetch(`${api}/${id}`, {
        method: "DELETE"
    });

    listar();
}

listar();