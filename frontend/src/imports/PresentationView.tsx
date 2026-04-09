import svgPaths from "./svg-1q7sesd8jj";
import imgAvatar from "figma:asset/faa1e8d074396e4032924f2a8cdda6f9f9ebbb8d.png";
import imgAvatar1 from "figma:asset/c5c3893298ea69db7bd6ff92572011ef00ea8de8.png";
import imgAvatar2 from "figma:asset/1aaa615ba78943ebf5998bc7c0582fe9d51d2dda.png";
import imgImage5 from "figma:asset/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage12 from "figma:asset/dffdbe090d8ca91e623e0447908c84f04e30136c.png";
import imgImage13 from "figma:asset/04f88dc3aee78ac45bac01539bf42567a30a2230.png";
import imgImage11 from "figma:asset/ac1a470bf8bb3a553ac60d65c8e5b6399bdabd44.png";

function CustomerQuote({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start p-[32px] relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="bg-black content-stretch flex items-center px-[32px] py-[20px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}

export default function PresentationView() {
  return (
    <div className="bg-white relative size-full" data-name="PresentationView">
      <div className="absolute content-stretch flex gap-[32px] items-start left-[76px] top-[1941px] w-[1280px]" data-name="Cards">
        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Customer Quote">
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
          <div className="content-stretch flex flex-col gap-[48px] items-start p-[32px] relative w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">“The quality of the jackets is amazing!”</p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar">
              <div className="relative shrink-0 size-[45px]" data-name="Avatar">
                <img alt="" className="absolute block max-w-none size-full" height="45" src={imgAvatar} width="45" />
              </div>
              <Text text="Aaron" />
            </div>
          </div>
        </div>
        <CustomerQuote>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">“Fast shipping and perfect fit.”</p>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar">
            <div className="relative shrink-0 size-[45px]" data-name="Avatar">
              <img alt="" className="absolute block max-w-none size-full" height="45" src={imgAvatar1} width="45" />
            </div>
            <Text text="Sarah" />
          </div>
        </CustomerQuote>
        <CustomerQuote>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">“The jeans fit like a glove and the quality is outstanding. Will definitely order again!”</p>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar">
            <div className="relative shrink-0 size-[45px]" data-name="Avatar">
              <img alt="" className="absolute block max-w-none size-full" height="45" src={imgAvatar2} width="45" />
            </div>
            <Text text="Blake" />
          </div>
        </CustomerQuote>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(25%-284px)] not-italic text-[48px] text-black top-[1809px] tracking-[-0.96px] w-[625px]">What our clients say</p>
      <div className="absolute h-[164px] left-0 overflow-clip right-0 top-0" data-name="Navigation">
        <div className="absolute content-stretch flex gap-[48px] items-center justify-end right-[80px] top-[56px]" data-name="Items">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
            <p className="leading-[1.5]">Page</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
            <p className="leading-[1.5]">Page</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
            <p className="leading-[1.5]">Page</p>
          </div>
          <ButtonText text="Button" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[80px] not-italic text-[20px] text-white top-[82px] whitespace-nowrap">
          <p className="leading-[1.5]">Site name</p>
        </div>
      </div>
      <div className="absolute bg-white h-[164px] left-0 overflow-clip right-0 top-0" data-name="Navigation">
        <div className="absolute content-stretch flex gap-[48px] items-center justify-end right-[80px] top-[56px]" data-name="Items">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
            <p className="leading-[1.5]">Shop</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
            <p className="leading-[1.5]">Categories</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
            <p className="leading-[1.5]">About Us</p>
          </div>
          <ButtonText text="Login" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[80px] not-italic text-[20px] text-black top-[82px] whitespace-nowrap">
          <p className="leading-[1.5]">www.vanes.com</p>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(25%-284px)] not-italic text-[48px] text-black top-[843px] tracking-[-0.96px] w-[624px]">Popular Categories</p>
      <div className="absolute content-stretch flex gap-[39px] h-[748px] items-center left-[81px] top-[944px] w-[1279px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[381px]" data-name="Card">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[381px]" data-name="Copy">
            <div className="h-[561px] relative shrink-0 w-[374px]" data-name="image 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Jeans</p>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[24px] w-[min-content]">
              <p className="leading-[1.5]">Discover the perfect fit for everyday wear.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[676px] items-start relative shrink-0 w-[422px]" data-name="Card">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[381px]" data-name="Copy">
            <div className="h-[563px] relative shrink-0 w-[422px]" data-name="image 12">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Dresses</p>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[24px] w-[min-content]">
              <p className="leading-[1.5]">Elegant silhouettes for any occasion.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Card">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[381px]" data-name="Copy">
            <div className="h-[573px] relative shrink-0 w-[382px]" data-name="image 13">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Jackets</p>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[24px] w-[min-content]">
              <p className="leading-[1.5]">Stay warm without compromising on style.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+81px)] size-[545px] top-[196px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="absolute bg-[#f7f7f7] h-[236px] left-0 overflow-clip top-[2288px] w-[1440px]" data-name="Section">
        <div className="absolute content-stretch flex items-center justify-end right-[80px] top-[80px]" data-name="Buttons">
          <ButtonText1 text="Subscribe" />
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-640px)] not-italic text-[48px] text-black top-[89px] tracking-[-0.96px] w-[703px]">Get 10% Off Your First Order</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] h-[372px] items-start left-[79px] top-[275px] w-[636px]" data-name="Copy">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Page title">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[64px] text-black tracking-[-1.28px] w-full">
            <span className="leading-[normal]">{`Welcome to `}</span>
            <span className="font-['Cinzel_Decorative:Bold',sans-serif] leading-[normal] text-[#ff0808]">Vanes</span>
          </p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[24px] text-[rgba(0,0,0,0.75)] w-full">
            <p className="leading-[1.5]">Explore our latest collection of premium quality clothing. Designed for comfort, styled for you.</p>
          </div>
        </div>
        <ButtonText1 text="Shop Now" />
      </div>
      <div className="absolute bg-white h-[264px] left-[-4px] overflow-clip right-[4px] top-[2561px]" data-name="Navigation / Footer">
        <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(33.33%+37px)] text-[16px] top-[48px] w-[187px]" data-name="Items">
          <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
            <p className="leading-[1.5]">Contact Us</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">{`Shipping & Delivery`}</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">{`Returns & Exchanges`}</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">Size Guide</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(16.67%+58px)] text-[16px] top-[48px] w-[187px]" data-name="Items">
          <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
            <p className="leading-[1.5]">Our Story</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">Sustainability</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">Careers</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">{`Press & Media`}</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[80px] text-[16px] top-[48px] w-[187px]" data-name="Items">
          <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
            <p className="leading-[1.5]">Terms of Service</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">Privacy Policy</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">Cookie Policy</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
            <p className="leading-[1.5]">FAQ</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[80px] not-italic text-[24px] text-black top-[70px] whitespace-nowrap">
          <p className="leading-[1.5]">www.vanes.com</p>
        </div>
        <div className="absolute content-stretch flex gap-[8px] items-start left-[80px] top-[176px]" data-name="Social Icons">
          <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
            <Icon>
              <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
            </Icon>
          </div>
          <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
            <Icon>
              <path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" />
            </Icon>
          </div>
          <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
            <Icon>
              <path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" />
            </Icon>
          </div>
          <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
            <Icon>
              <path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" />
            </Icon>
          </div>
        </div>
        <div className="absolute h-0 left-[80px] top-px w-[1280px]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
              <line id="Divider" stroke="var(--stroke-0, #E6E6E6)" x2="1280" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}