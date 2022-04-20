
/*import axios from 'axios'

 const setPerfilTroca = (Perfil) => ({
    name: 'Troca',
    prop: {
        Perfil
    }
})

 const setCorrespond = (Correspond) => ({
    name: 'Correspond',
    prop: {
        Correspond
    }
})



function perfil() {


    const getPerfilTroca = () => async (recuse) => {
        const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/person')

        recuse(setPerfilTroca(response.data.profile))
    }

    const PegaPerfil = (id, choice) => async (recuse) => {
        if (!id) {
            recuse(getPerfilTroca())
            return
        }

        await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/choose-person', {
            id,
            choice
        })

        recuse(getPerfilTroca())
    }

    const getCorrespond = () => async (recuse) => {
        const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/matches')

        recuse(setCorrespond(response.data.Correspond))
    }

    const LimparTroca = () => async (recuse) => {
        await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/clear')

        recuse(getPerfilTroca())
    }
}

export default perfil*/