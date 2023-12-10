function receberTurmaUsuario() {
    // Receber dados do campo "form_turma_usuario" do formulario quando usuario digitar valor no campo
    var turmaUsuario = document.getElementById("form_turma_usuario").value;
    var turmaUsuario2 = document.getElementById("form_turma_usuario2").value;
    var turmaUsuario3 = document.getElementById("form_turma_usuario3").value;
    var turmaUsuario4 = document.getElementById("form_turma_usuario4").value;
    var turmaUsuario5 = document.getElementById("form_turma_usuario5").value;
    var turmaUsuario6 = document.getElementById("form_turma_usuario6").value;
    var turmaUsuario7 = document.getElementById("form_turma_usuario7").value;
    var turmaUsuario8 = document.getElementById("form_turma_usuario8").value;
    var turmaUsuario9 = document.getElementById("form_turma_usuario9").value;
    var turmaUsuario10 = document.getElementById("form_turma_usuario10").value;
    var turmaUsuario11 = document.getElementById("form_turma_usuario11").value;
    var turmaUsuario12 = document.getElementById("form_turma_usuario12").value;

    //console.log(turmaUsuario);

    const info = [turmaUsuario,turmaUsuario2,turmaUsuario3] 
    const info2 = [turmaUsuario4,turmaUsuario5,turmaUsuario6] 
    const info3 = [turmaUsuario7,turmaUsuario8,turmaUsuario9] 
    const info4 = [turmaUsuario10,turmaUsuario11,turmaUsuario12] 
    const final = [info,info2,info3,info4] 
    // Enviar os dados para o formulario do arquivo index.html utilizando o atributo ID
    document.getElementById("receber_turma_usuario").value = final;


}
