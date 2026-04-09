export default function LoginView() {
  return (
    <div className="bg-white relative size-full" data-name="Login View">
      <div className="absolute contents left-[401px] top-[944px]">
        <div className="absolute bg-black content-stretch flex h-[108px] items-center left-[401px] px-[32px] py-[20px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[944px] w-[470px]" data-name="Button">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[62px] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white w-[488px]">
            <p className="leading-[1.5] whitespace-pre-wrap">{`    Enter the account`}</p>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[232px] leading-[0] left-[calc(50%-335.5px)] not-italic text-[0px] text-black top-[107px] tracking-[-0.96px] w-[668px] whitespace-pre-wrap">
        <span className="leading-[normal] text-[48px]">{`             `}</span>
        <span className="leading-[normal] text-[96px]">{` Authentication`}</span>
      </p>
      <div className="absolute contents left-[240px] top-[633px]">
        <div className="absolute bg-[#d9d9d9] h-[85px] left-[240px] top-[633px] w-[800px]" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[81px] justify-center leading-[0] left-[263px] mix-blend-overlay not-italic text-[32px] text-black text-shadow-[0px_4px_4px_rgba(192,124,124,0)] top-[677.5px] w-[168px]">
          <p className="leading-[1.5]">Password</p>
        </div>
      </div>
      <div className="absolute contents left-[240px] top-[484px]">
        <div className="absolute bg-[#d9d9d9] h-[80px] left-[240px] top-[484px] w-[804px]" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[80px] justify-center leading-[0] left-[267px] mix-blend-overlay not-italic text-[32px] text-black top-[524px] w-[161px]">
          <p className="leading-[1.5]">Email</p>
        </div>
      </div>
      <p className="absolute font-['Inter:Thin_Italic',sans-serif] font-thin h-[39px] italic leading-[normal] left-[456px] text-[24px] text-black top-[1070px] w-[360px]">Don’t have account? Create one</p>
    </div>
  );
}