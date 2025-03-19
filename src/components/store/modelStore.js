// esto es una store para guardar los estados globales
// que se utilizara a lo largo de la aplicacion

import { reactive } from 'vue';

export const modelStore =  reactive({
    state:{
        show: false,
        game: {}
    },
    openModal(game = {}){
        this.state.show = true
        
        if(Object.keys(game).length){
            this.state.game = game
        }
    },
    closeModal(){
        this.state.show = false
        this.state.game = {}
    }
})