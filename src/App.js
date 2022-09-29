import './App.css';
import DataTable from 'react-data-table-component';
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { idlFactory as idlScore } from './candid/score_token';
import { idlFactory as idlUser } from './candid/players_canister';
import { useEffect, useState } from 'react';

const betaCanisterId = "k7h5q-jyaaa-aaaan-qaaaq-cai";
const xpCanisterId = "e3q2w-lqaaa-aaaai-aazva-cai";
const playersCanisterId = "7saxw-4aaaa-aaaak-qadmq-cai";
const host = 'https://raw.ic0.app/';


function App() {

    // set data va a cambiar la data 
  const [data, setData] = useState ([])


//async regresa una promesa
        const getCanister = async (identity, idl, canisterId) => {
          const _canister = Actor.createActor(idl, {
              agent: new HttpAgent({
                host: host,
                identity,
              }),
              canisterId,
          });
          console.log("Canister", _canister);
          return _canister;
      };

      useEffect (
        //declarar funcion de forma abreviada
        ()=>{
          initializeData()
        },
        //Datos que se van a mostrar de la funcion
        []
      )
        //inicializar data de los canisters
      const initializeData = async ()=> {
        //recuperar los datos del canister de forma asyncrona
        let canisterScore = await getCanister(null,idlScore,xpCanisterId)
        // en allScores se va a guardar  .funcion interna
        let allScores = await canisterScore.getAllScores()
        console.log("scores",allScores)

        let canisterUser = await getCanister(null,idlUser,playersCanisterId)

        let allPlayers = await canisterUser.getAllPlayers()
        console.log("players", allPlayers)

          //se renueva el valor de data
        // setData([])
// guion bajo es para variables locales _
        let _data = []


        //crear un cyclo - 3 secciones   (lenght es la longitud en JavaScript)
        //  variable;hasta cuando se ejecuta,  *++ incremento de 1 en 1
        for(let i = 0; i<allPlayers.length; i++) {

          //sacar la informacion
          _data.push (allPlayers[i][1])
      
        }

        console.log("data", _data)

        for(let i = 0; i<_data.length; i++) {
          //hacer match con los nuevos registros *(tablas)
          //entre mas nested mas complejo  (parantesis para parametros) [posicion en un array] {encapsular if, else, for} 
          //if solo condiciona una linea abajo o usar llaves{}
          // verificar que la informacion haga match
            for(let j = 0; j<allScores.length; j++) {
            // un = es para asignar              == es para comparar informacion    === es para ser identico tambien con tipo de dato
            if (_data[i].aid == allScores[j][0])
             {  //parseInt forza a ser un entero porque tiene n al final
              _data [i].score = parseInt(allScores[j][1])
             }
          }
        }

        for(let i = 0; i<_data.length; i++) {
          if (_data[i].score == undefined || _data[i].score == null || _data[i].score <= 0 ) {
            _data[i].score = 0
          }
        }

        console.log("data2", _data)
        //pasar el data local al data global
        setData (_data.sort((a, b) => b.score - a.score))
           }

           //actualiza la informacion 
      useEffect (()=> {
                      },[data])


  const columns = [
    {
        name: 'Username',
        selector: row => row.playerName,
    },
    {
        name: 'CXP',
        selector: row => row.score.toLocaleString('en-US'),
    },
    {
      name: 'Wallet',
      selector: row => row.aid,
  },
];


  return (
    
      <DataTable
          columns={columns}
          data={data}
      />
  );
}

export default App;
