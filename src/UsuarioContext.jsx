import axios from 'axios';
import React, { createContext, useState } from 'react'

export const UsuarioContext = createContext({});

const url = 'https://api-pessoas-weld.vercel.app/familias/'


export default function UsuarioProvider({ children }) {

    function buscarFamilias() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setFamilias(respJson))
            .catch((erro) => console.warn(erro))
            console.log("passou no getFamilias", familias);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)
        if (id) {
          axios.put(url + id, {
            voce : voce,
            pai: pai,
            mae: mae,
            avo_paterno: avo_paterno,
            ava_paterno: ava_paterno,
            avo_materno: avo_materno,
            ava_materno: ava_materno,
          }).then((resp) => atualizaFamiliaEditado(resp)).catch((erro) => console.log(erro));
        } else {
          axios.post(url, {
            voce : voce,
            pai: pai,
            mae: mae,
            avo_paterno: avo_paterno,
            ava_paterno: ava_paterno,
            avo_materno: avo_materno,
            ava_materno: ava_materno,
          }).then((resp) => atualizaFamiliaNovo(resp)).catch((erro) => console.log(erro));
        }
      }

      function atualizaFamiliaEditado(response) {
        const id  = response.data.identificador;//atualizar SLIDES ! 
        const {voce, pai, mae, avo_paterno,ava_paterno,avo_materno,ava_materno} = JSON.parse(response.config.data);
        const index = familias.findIndex(item => item.id == id);
        console.log(voce, pai, mae, avo_paterno,ava_paterno,avo_materno,ava_materno);
        let familys = familias;
        familys[index].voce = voce;
        familys[index].pai = pai;
        familys[index].mae = mae;
        familys[index].avo_paterno = avo_paterno;
        familys[index].ava_paterno = ava_paterno;
        familys[index].avo_materno = avo_materno;
        familys[index].ava_materno = ava_materno;
    
        let familia = {};
        familia.voce = voce;
        familia.pai = pai;
        familia.mae = mae;
        familia.avo_paterno = avo_paterno;
        familia.ava_paterno = ava_paterno;
        familia.avo_materno = avo_materno;
        familia.ava_materno = ava_materno;
        console.log('atualização' , familia);
        setAtualizacao(familia);
      }

      function atualizaFamiliaNovo(response) {
        let { voce, pai, mae, avo_paterno,ava_paterno,avo_materno,ava_materno } = response.data;
        let obj = { "voce": voce, "pai": pai, "mae": mae, "avo_paterno": avo_paterno,"ava_paterno": ava_paterno,"avo_materno": avo_materno,"ava_materno": ava_materno };
        let familys = familias;
        users.push(obj);
        setUsuarios(familys);
        setAtualizacao(obj);
      }

      function apagarFamilia(cod) {
        axios.delete(url + cod)
        .then(() => {
          setFamilias(familias.filter(item => item.id !== cod));})
        .catch( (erro) => console.log(erro) )
      }    

    const [id, setId] = useState("");
    const [voce, setVoce] = useState("");
    const [pai, setPai] = useState("");
    const [mae, setMae] = useState("");
    const [avo_paterno, setAvo_Paterno] = useState("");
    const [ava_paterno, setAva_Paterno] = useState("");
    const [avo_materno, setAvo_Materno] = useState("");
    const [ava_materno, setAva_Materno] = useState("");
    const [familias, setFamilias] = useState([]);
    const [atualizacao, setAtualizacao] = useState({});

    return (
        <UsuarioContext.Provider value={{ id, setId, voce, setVoce, pai, setPai, mae, setMae, avo_paterno, setAvo_Paterno, ava_paterno, setAva_Paterno, ava_materno, setAva_Materno, avo_materno, setAvo_Materno, familias, setFamilias, atualizacao, buscarFamilias, apagarFamilia, atualizaFamiliaEditado, atualizaFamiliaNovo,gravarDados }}>
            {children}
        </UsuarioContext.Provider>
    )
}