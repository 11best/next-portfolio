export default function ExperienceDetail(props: {
  start?: boolean;
  end?: boolean;
  companyName: string;
  time: string;
  role: string;
  detail: string;
}) {
  return (
    <>
      <div className="flex">
        <div className="w-[100px] flex justify-center items-center relative">
          <div className="bg-orange-200 rounded-full w-3 h-3"></div>
          {props.start && (
            <div className="bg-orange-200 w-[3px] h-[10px] absolute bottom-0"></div>
          )}
          {props.end && (
            <div className="bg-orange-200 w-[3px] h-[10px] absolute top-0"></div>
          )}
          {!props.start && !props.end && (
            <div className="bg-orange-200 w-[3px] h-[30px] absolute"></div>
          )}
        </div>
        <div className="flex items-baseline">
          <p className="text-lg font-semibold text-orange-400">
            {props.companyName}
          </p>
          <p className="ml-2 text-md font-semibold text-slate-400">
            - {props.role}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[100px] flex justify-center items-center">
          {props.end ? (
            <div></div>
          ) : (
            <div className="bg-orange-200 w-[3px] h-full"></div>
          )}
        </div>
        <div className="break-word">
          <span className="text-sm text-slate-400">{props.time}</span>
          <p className="w-[600px]">{props.detail}</p>
        </div>
      </div>
      {props.end || (
        <div className="w-[100px] h-[30px] flex justify-center items-center">
          <div className="bg-orange-200 w-[3px] h-8"></div>
        </div>
      )}
    </>
  );
}
