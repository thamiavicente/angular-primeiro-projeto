export interface Contato {
    id: string,
    nome: string,
    email: string,
    cpf: string,
    dadosBancarios: {
        banco: String, 
        ag: string,
        cc: string,
    }
}