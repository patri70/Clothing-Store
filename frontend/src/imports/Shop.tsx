import clsx from "clsx";
import svgPaths from "./svg-dkiwmth21r";
import imgImage10 from "figma:asset/02d1d80b6508740dc054ed461279cc0e8c8bd843.png";
import imgImage7 from "figma:asset/1bc355884a1cfe1ac7a479210c7b680407ad260b.png";
import imgImage5 from "figma:asset/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage8 from "figma:asset/e2664f5588505a2ee1e4e31269dfd8919f907071.png";
import imgImage9 from "figma:asset/dd2a6b95246252eb8cefc6a928916935b6efe817.png";
import imgImage4 from "figma:asset/9ddd1d8752981aa001d45f72622c714dd6acb4bc.png";
import imgImage6 from "figma:asset/b1e61676f58986b1987ae38fd979c7d8c97e1f11.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="left-[8px] size-[24px] top-[8px]">
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type CopyProps = {
  text: string;
  text1: string;
  text2: string;
};

function Copy({ text, text1, text2 }: CopyProps) {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] h-[128px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[24px] text-black w-full">{text}</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#828282] text-[20px] w-full">
        <p className="leading-[1.5]">{text1}</p>
      </div>
      <p className="leading-[1.5] relative shrink-0 text-[20px] text-black w-full">{text2}</p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("absolute bg-black content-stretch flex h-[59px] items-center px-[32px] py-[20px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[727px]", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="bg-white relative size-full" data-name="Shop">
      <div className="absolute h-[654px] left-[-7px] top-0 w-[1449px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.31%] left-[-0.03%] max-w-none top-0 w-[100.07%]" src={imgImage10} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 top-[216px] w-[844px]" data-name="Copy">
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-center w-full" data-name="Page Title">
          <p className="font-['Cinzel_Decorative:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#faf2f2] text-[64px] tracking-[-1.28px] w-full">Vanes</p>
          <div className="flex flex-col font-['Cinzel_Decorative:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
            <p className="leading-[1.4]">Style in every step</p>
          </div>
        </div>
        <div className="bg-black content-stretch flex items-center px-[32px] py-[20px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
            <p className="leading-[1.5]">Discover New Collection</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[164px] left-0 overflow-clip right-[2px] top-0" data-name="Navigation">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[80px] not-italic text-[20px] text-white top-[82px] whitespace-nowrap">
          <p className="leading-[1.5]">www.vanes.com</p>
        </div>
        <div className="absolute content-stretch flex gap-[48px] items-center justify-end right-[29px] top-[56px]" data-name="Items">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffafa] text-[20px] whitespace-nowrap">
            <p className="leading-[1.5]">Shop</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[20px] whitespace-nowrap">
            <p className="leading-[1.5]">Categories</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffbfb] text-[20px] whitespace-nowrap">
            <p className="leading-[1.5]">About Us</p>
          </div>
          <div className="bg-black content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.5]">Login</p>
            </div>
          </div>
        </div>
      </div>
      <ButtonText text="Filter" additionalClassNames="left-[144px]" />
      <div className="absolute bg-white h-[264px] left-[2px] overflow-clip right-0 top-[4070px]" data-name="Navigation / Footer">
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
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[3.61%] right-[60.68%] top-[3615px]" data-name="List">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[515px]" data-name="Copy">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="00">
            <div className="absolute inset-[12.5%]" data-name="🦆 icon 'globe'">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                <g id="ð¦ icon 'globe'">
                  <path clipRule="evenodd" d={svgPaths.p3efda700} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector" />
                  <path clipRule="evenodd" d={svgPaths.pd0d2900} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector_2" />
                  <path clipRule="evenodd" d={svgPaths.p39f37100} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector_3" />
                  <path clipRule="evenodd" d={svgPaths.p12c20f00} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector_4" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Free Shipping</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[20px] w-[min-content]">
            <p className="leading-[1.5]">Enjoy free standard delivery on all orders over $100. Fast and reliable shipping straight to your door, wherever you are.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[515px]" data-name="Copy">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="00">
            <div className="absolute h-[28.411px] left-[4px] top-[2px] w-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28.411">
                <g id="ð¦ icon 'lock closed'">
                  <path clipRule="evenodd" d={svgPaths.p14860a00} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Secure Payments</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[20px] w-[min-content]">
            <p className="leading-[1.5]">Shop with absolute confidence. We use industry-leading encryption to ensure your personal and payment details remain completely safe.</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[58.74%] right-[5.55%] top-[3625px]" data-name="List">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[513px]" data-name="Copy">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="00">
            <div className="absolute inset-[12.5%]" data-name="🦆 icon 'avatar'">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0001">
                <g id="ð¦ icon 'avatar'">
                  <path clipRule="evenodd" d={svgPaths.p21e83200} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">24/7 Support</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[20px] w-[min-content]">
            <p className="leading-[1.5]">Need help with sizing or tracking? Our styling and support team is online around the clock to assist you with any questions.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[513px]" data-name="Copy">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="00">
            <Wrapper additionalClassNames="inset-[9.38%_12.5%_15.63%_12.5%]">
              <g id="ð¦ icon 'calendar'">
                <path clipRule="evenodd" d={svgPaths.p1d03af80} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector" />
              </g>
            </Wrapper>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">30-Day Returns</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[20px] w-[min-content]">
            <p className="leading-[1.5]">Not quite the perfect fit? Return or exchange any unworn items within 30 days of delivery, completely hassle-free.</p>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[52px] not-italic text-[48px] text-black top-[3518px] tracking-[-0.96px] w-[625px]">Shop with Confidence at Vanes</p>
      <div className="absolute h-[620px] left-[calc(8.33%+64.83px)] top-[939px] w-[416px]" data-name="Card">
        <div className="absolute h-[489px] left-0 top-[9px] w-[418px]" data-name="image 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[127.99%] left-0 max-w-none top-[-4.62%] w-full" src={imgImage7} />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] h-[122px] items-start justify-center left-0 not-italic top-[498px] w-[418px]" data-name="Copy">
          <p className="leading-[1.5] relative shrink-0 text-[24px] text-black w-full">Laurna Puff</p>
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#828282] text-[20px] w-full">
            <p className="leading-[1.5]">White Fur</p>
          </div>
          <p className="leading-[1.5] relative shrink-0 text-[20px] text-black w-full">$230</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[780px] items-start left-[calc(58.33%-21.17px)] top-[2569px] w-[438px]" data-name="Card">
        <div className="h-[611px] relative shrink-0 w-[407px]" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
        </div>
        <Copy text="Miara" text1="Jeans" text2="$45" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[737px] items-start left-[calc(8.33%+41.83px)] top-[1724px] w-[439px]" data-name="Card">
        <div className="h-[497px] relative shrink-0 w-[442px]" data-name="image 8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[115.19%] left-[-0.16%] max-w-none top-[-8.02%] w-[97.12%]" src={imgImage8} />
          </div>
        </div>
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] h-[241px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Copy">
          <p className="leading-[1.5] relative shrink-0 text-[24px] text-black w-full">{`Ariadna `}</p>
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#828282] text-[20px] w-full">
            <p className="leading-[1.5]">Black Coat</p>
          </div>
          <p className="leading-[1.5] relative shrink-0 text-[20px] text-black w-full">$170</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[598px] items-start left-[calc(58.33%+7.83px)] top-[961px] w-[418px]" data-name="Card">
        <div className="aspect-[1600/1600] relative shrink-0 w-full" data-name="image 9">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
        <Copy text="Leandra" text1="Golden Belt" text2="$5" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[794px] items-start left-[calc(58.33%-26.17px)] top-[1667px] w-[447px]" data-name="Card">
        <div className="aspect-[840/1200] relative shrink-0 w-full" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        </div>
        <Copy text="Arabella" text1="Red Dress" text2="$110" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[760px] items-start left-[calc(8.33%+42.83px)] top-[2579px] w-[444px]" data-name="Card">
        <div className="h-[608px] relative shrink-0 w-[444px]" data-name="image 6">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
        <Copy text="Cartia" text1="Jacket" text2="$180" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-0.5px)] mix-blend-hard-light not-italic text-[#404040] text-[32px] text-center top-[3402px] w-[253px] whitespace-pre-wrap">{`<  1  2  3  ...  >`}</p>
      <div className="absolute flex h-[2px] items-center justify-center left-[127px] top-[807px] w-[1197px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.1deg]">
          <div className="h-0 relative w-[1197.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="1197" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-175px)] mix-blend-hard-light not-italic text-[28px] text-black top-[757px] w-[350px]">
        <p className="leading-[1.5]">Showing 1–12 of 48 items</p>
      </div>
      <ButtonText text="Sort" additionalClassNames="left-[calc(83.33%-9.67px)]" />
    </div>
  );
}