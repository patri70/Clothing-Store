export default function RegisterView() {
  return (
    <div className="bg-white relative size-full" data-name="Register View">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[113px] leading-[normal] left-[calc(50%-330px)] not-italic text-[90px] text-black top-[260px] tracking-[-1.8px] w-[659px]">Create Account</p>
      <div className="absolute contents left-[320px] top-[688px]">
        <div className="absolute bg-[#d9d9d9] h-[80px] left-[320px] top-[688px] w-[804px]" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[80px] justify-center leading-[0] left-[342px] mix-blend-overlay not-italic text-[32px] text-black top-[728px] w-[86px]">
          <p className="leading-[1.5]">Email</p>
        </div>
      </div>
      <div className="absolute contents left-[320px] top-[836px]">
        <div className="absolute bg-[#d9d9d9] h-[85px] left-[320px] top-[836px] w-[800px]" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[81px] justify-center leading-[0] left-[343px] mix-blend-overlay not-italic text-[32px] text-black text-shadow-[0px_4px_4px_rgba(192,124,124,0)] top-[880.5px] w-[162px]">
          <p className="leading-[1.5]">Password</p>
        </div>
      </div>
      <div className="absolute contents left-[320px] top-[536px]">
        <div className="absolute contents left-[320px] top-[536px]">
          <div className="absolute bg-[#d9d9d9] h-[85px] left-[320px] top-[536px] w-[800px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[81px] justify-center leading-[0] left-[339px] mix-blend-overlay not-italic text-[32px] text-black text-shadow-[0px_4px_4px_rgba(192,124,124,0)] top-[576.5px] w-[100px]">
          <p className="leading-[1.5]">Name</p>
        </div>
      </div>
      <div className="absolute contents left-[560px] top-[1110px]">
        <div className="absolute bg-black content-stretch flex h-[108px] items-center left-[560px] px-[32px] py-[20px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[1110px] w-[320px]" data-name="Button">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white w-[256px]">
            <p className="leading-[1.5]">Register</p>
          </div>
        </div>
      </div>
    </div>
  );
}