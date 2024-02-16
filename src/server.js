import http from 'node:http'

// CommonJS => require
// ESModule => import/export
// node:nome-da-lib, o nodejs pede para fazer a importação dos módulos internos dessa forma para que possa diferenciar as importações entre terceiros.

const users = []

const server = http.createServer((request, response) => {
    const {method, url} = request

    if (method === 'GET' && url === '/users') {        
        // early return
        // o uso do JSON é necessário porque o servidor em node não interpreta arrays e objetos sem que eles estejam nos seguintes formatos: string (JSON), Buffer, ou Uint8Array.

        // por padrão não é necessário declarar o status 200 como retorno pois isso já acontece automaticamente.
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        // Status 201 representa que a criação foi feita.
        return response.writeHead(201).end('Usuário criado.')
    }

    // retorna com a função .end() vazia é opcional.
    return response.writeHead(404).end()
})

server.listen(3333)

