function calculoTorneo(){
    let equipo = prompt("Escriba el nombre de el equipo:")
    while(!equipo || equipo.trim() === ""){
        equipo = prompt ("el nombre del equipo debe escribirse");

    }
    return equipo;

}
function cuartosDeFinal(equipo) {
    const equiposAleatorio = [...equipo];
    equiposAleatorio.sort(()=> Math.random() - 0.5);

  const cuartos = [];
  for (let i = 0; i < equiposAleatorio.length; i += 2){
  cuartos.push([equiposAleatorio[i], equiposAleatorio[i + 1]]);

    }
    return cuartos;
     }
     function semifinal (equipo1, equipo2) {
        const puntoDePartido = Math.floor (Math.random() * 5);
        const puntoDePartido2 = Math.floor (Math.random() * 5);

        console.log (`**${equipo1} ${puntoDePartido} - ${puntoDePartido2} - ${equipo2}**`);
return puntoDePartido > puntoDePartido2 ? equipo1 : equipo2;
     }

     function finales (fase, cuartos) {
        console.log (`**${fase}**`);
        const equipoganador= [];
        for (const cuarto of cuartos){
            const ganador = semifinal (cuarto[0], cuarto[1]);
            equipoganador.push(ganador);
        }
        return equipoganador;
     }
    
     const equipo = [];
     for (let i = 0; i < 8; i++) {

equipo.push (calculoTorneo());
     }    
     const cuartos = cuartosDeFinal (equipo);
     const semiFinalistas = finales ("semiFinalistas", cuartos);
     const finalistas = finales ("final", semiFinalistas);
     const ganador = calculoTorneo(finalistas[0], finalistas[1]);
     console.log (`**¡${ganador} es el campeon!**`);
