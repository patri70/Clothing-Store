import imgImage4 from "figma:asset/9ddd1d8752981aa001d45f72622c714dd6acb4bc.png";
import imgImage5 from "figma:asset/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage6 from "figma:asset/b1e61676f58986b1987ae38fd979c7d8c97e1f11.png";

export default function MasterViewProducts() {
  return (
    <div className="bg-white relative size-full" data-name="Master View - Products">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[154px] leading-[normal] left-[1562px] mix-blend-hard-light not-italic text-[#404040] text-[70px] text-center top-[1969px] w-[542px] whitespace-pre-wrap">{`<  1  2  3  ...  >`}</p>
      <div className="absolute contents left-[261px] top-[215px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[170px] justify-center leading-[0] left-[304px] not-italic text-[64px] text-black top-[300px] w-[2656px]">
          <p className="leading-[1.5] whitespace-pre-wrap">{`ID             Image             Name             Category          Price             Sizes             Actions`}</p>
        </div>
        <div className="absolute h-0 left-[304px] top-[385px] w-[2656px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2656 1">
              <line id="Line 1" stroke="var(--stroke-0, black)" x2="2656" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[64px] leading-[normal] left-[290px] not-italic text-[60px] text-black top-[576px] w-[169px]">#001</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[64px] leading-[normal] left-[261px] not-italic text-[60px] text-black top-[1053px] w-[169px]">#002</p>
        <div className="absolute h-[363px] left-[567px] top-[478px] w-[254px]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[93px] leading-[0] left-[989px] not-italic text-[0px] text-black top-[576px] w-[1971px] whitespace-pre-wrap">
          <span className="leading-[normal] text-[60px]">{`Arabella             Dress               110$           36, 38, 40`}</span>
          <span className="leading-[normal] text-[48px]">{`         `}</span>
          <span className="leading-[normal] text-[60px]">Edit / Delete</span>
          <span className="leading-[normal] text-[48px]">{` `}</span>
        </p>
        <div className="absolute h-[382px] left-[567px] top-[923px] w-[254px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[64px] leading-[normal] left-[261px] not-italic text-[60px] text-black top-[1556px] w-[169px]">#003</p>
        <div className="absolute h-[380px] left-[567px] top-[1398px] w-[278px]" data-name="image 6">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[93px] leading-[0] left-[989px] not-italic text-[0px] text-black top-[1053px] w-[1971px] whitespace-pre-wrap">
          <span className="leading-[normal] text-[60px]">{`Miara                 Jeans               45$               36, 40`}</span>
          <span className="leading-[normal] text-[48px]">{`             `}</span>
          <span className="leading-[normal] text-[60px]">Edit / Delete</span>
          <span className="leading-[normal] text-[48px]">{` `}</span>
        </p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[93px] leading-[0] left-[989px] not-italic text-[0px] text-black top-[1556px] w-[1971px] whitespace-pre-wrap">
          <span className="leading-[normal] text-[60px]">{`Cartia                Jacket              180$           36, 38, 42`}</span>
          <span className="leading-[normal] text-[48px]">{`         `}</span>
          <span className="leading-[normal] text-[60px]">Edit / Delete</span>
          <span className="leading-[normal] text-[48px]">{` `}</span>
        </p>
      </div>
      <div className="absolute contents left-[2360px] top-[1880px]">
        <div className="absolute bg-black h-[131px] left-[2360px] top-[1880px] w-[600px]" data-name="Rectangle" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[131px] justify-center leading-[0] left-[2660px] not-italic text-[64px] text-center text-white top-[1945.5px] w-[600px]">
          <p className="leading-[1.5]">Add Product</p>
        </div>
      </div>
    </div>
  );
}