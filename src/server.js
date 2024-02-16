import http from 'node:http'

// CommonJS => require
// ESModule => import/export
// node:nome-da-lib, o nodejs pede para fazer a importação dos módulos internos dessa forma para que possa diferenciar as importações entre terceiros.

const server = http.createServer((request, response) => {
    const {method, url} = request

    if (method === 'GET' && url === '/users') {        
        // early return
        return response.end('Listagem de usuários')
    }

    if (method === 'POST' && url === '/users') {
        return response.end('Criação de usuário')
    }

    return response.end("hello world")
})

server.listen(3333)

