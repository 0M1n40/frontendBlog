function Home() {
  return (
      <>
          <div className="w-screen flex justify-center bg-amber-400 ">
              <div>
                  <div className="max-w-7xl flex flex-col items-center font-bold text-2xl text-center p-10">    
                      <h1>Seja Bem Vindos!</h1>
                      <p>Expresse aqui seus pensamentos e opniões</p>
                  </div>

                  <div className="max-w-7xl flex flex-col items-center">
                      <img
                          src="https://i.imgur.com/VpwApCU.png"
                          alt="Imagem da Página Home"
                          width="400px"
                      />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home