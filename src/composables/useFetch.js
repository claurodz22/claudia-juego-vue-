import { onMounted, reactive,} from 'vue'


export function useFetch(apiurl="", onSuccess=()=>{}){
    
    
    const state = reactive({
        error: null,
        isLoading: false,
        datos: []
      })
      
      
      
      const fetchGames = async () => {
        try {
          state.isLoading = true
          const response = await fetch(apiurl)
          const json = await response.json()
          console.log(json)
          state.datos = json
          onSuccess(json)
          
        } catch (error) {
          console.error(error)
          state.error = error
        } finally {
          state.isLoading = false
        }
      }

      onMounted(() => {
        fetchGames()
      })

      return { state }
}