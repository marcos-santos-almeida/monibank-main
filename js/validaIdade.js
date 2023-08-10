export default function ehMaioDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) {
        campo.setCustomValidity("o usuario não é maior de idade");
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCfullyear() + 18, data.getUTCmonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}