import Restart from "../../assets/restart_alt.svg";
import Profile from "../../assets/profile.jpg";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-4 py-4">

        <div className="px-2 w-full flex justify-end">
          <img className="w-12 h-12" src={Restart}></img>
        </div>

        <div className="h-36 w-36 rounded-full overflow-hidden">
          <img className="w-full h-full" src={Profile}></img>
        </div>

        <div>
          <h2 className="font-light text-2xl text-white">Biel Cabeleireiro</h2>
        </div>

      </div>
  )
}
