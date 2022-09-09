export default function ExperienceDetail(props: {
  start?: boolean;
  end?: boolean;
  companyName: string;
  time: string;
  role: string;
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
          <h3 className="text-lg font-semibold">{props.companyName}</h3>
          <span className="ml-4 text-sm text-slate-400">{props.time}</span>
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
        <p>{props.role}</p>
      </div>
      {props.end || (
        <div className="w-[100px] flex justify-center items-center">
          <div className="bg-orange-200 w-[3px] h-6"></div>
        </div>
      )}
    </>
  );
}
