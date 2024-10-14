
import useGames from "./useGames"
import GameCard from "./GameCard"


type Props = {}

function index({}: Props) {
const {data,isLoading} = useGames()
  return (
    <>

        {data?.map((game)=><GameCard key={game.gameID} game={game}/>)}
                   
    </>
  )
}

export default index