import KeyIcon from "@mui/icons-material/Key";
import { ProgressBar } from "./ProgressBar";
import { useFetch } from "../hooks/useFetch";

interface Auth {
  current_pwd: string;
  current_time: number;
  expire_time: number;
  progress: number;
}

export const TwoFactorAuth = () => {
  const { response } = useFetch<Auth>("http://localhost:9090/auth", 1);
  const { current_pwd: pwd, current_time: currentTime, progress } = response;
  return (
    <div className="h-screen w-screen flex justify-center items-center font-bold">
      <div className="w-auto h-auto bg-white/20 rounded-lg p-10 flex flex-col items-center space-y-10">
        <div className="w-full h-[20%]">
          <h1>
            Current Token <KeyIcon />{" "}
          </h1>
        </div>
        <p className="text-5xl tracking-wider">{pwd}</p>
        <div className="flex space-x-3 items-center">
          <p>Your token expires in</p>
          <ProgressBar progress={progress} label={currentTime} />
        </div>
      </div>
    </div>
  );
};
