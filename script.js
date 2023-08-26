const url = 'https://dog.ceo/api/breeds/image/random'

const getDog = async () => {
    try {
        const data = await fetch(url)
        const json = await data.json()
        return json.message
    }
    catch(e) {
        console.log(e)
    }
}

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0]
    img.src = await getDog()
}

loadImg()

const botao = document.getElementsByTagName('button')[0]
botao.addEventListener('click', loadImg)
