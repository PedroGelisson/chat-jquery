$(document).ready(function(){

    let token = null;
    let idUser = null;
    let nick = null;
    let idSala = null;
    let sala = null;

    let listarSalas = ()=>{
        console.log("mostrar salas");
        $.ajax({
            url:"https://e68f28ac-0743-42a1-abc0-f598b4784f1d.mock.pstmn.io/salas",
            method:"GET",
            Headers:{ token:token,iduser:idUser,nick:nick },
            sucess: function(response){
                console.log(response);
                token = response.resp.token;
                idUser = response.resp.idUser;
                nick = response.resp.nick;
                idSala = response.resp.idSala;
                sala = response.resp.sala;

                console.log(response.resp.sala);
                response.resp.sala;

                
            },
            error: function(xhr,status, error){
                console.error(error);
            }
        });

    }

    $("#salas").hide();
    $("#mensagens").hide();

    $("#btn-entrar").on("click",()=>{
        console.log("0");
        if($("#input-nick").val().length> 2){
            console.log("1");
            console.log($("#input-nick").val());
            $.ajax({   
                url:"https://e68f28ac-0743-42a1-abc0-f598b4784f1d.mock.pstmn.io",
                method:"POST",
                data:{ nick: $("#input-nick").val() },
                sucess: function(response){
                    console.log("2");
                    console.log(response.resp); 
                    token = response.resp.token;
                    idUser = response.resp.idUser;
                    nick = response.resp.nick;

                    $("#input-nick").val("");
                    $("#inicio").hide();
                    $("#salas").show();
                    listarSalas();
                },
                error: function(xhr,status, error){
                    console.error(error);
                }
            });
        }
    });
});