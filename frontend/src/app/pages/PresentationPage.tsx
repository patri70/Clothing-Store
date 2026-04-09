import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-1q7sesd8jj";
import imgAvatar from "../../assets/faa1e8d074396e4032924f2a8cdda6f9f9ebbb8d.png";
import imgAvatar1 from "../../assets/c5c3893298ea69db7bd6ff92572011ef00ea8de8.png";
import imgAvatar2 from "../../assets/1aaa615ba78943ebf5998bc7c0582fe9d51d2dda.png";
import imgImage5 from "../../assets/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage12 from "../../assets/dffdbe090d8ca91e623e0447908c84f04e30136c.png";
import imgImage13 from "../../assets/04f88dc3aee78ac45bac01539bf42567a30a2230.png";
import imgImage11 from "../../assets/ac1a470bf8bb3a553ac60d65c8e5b6399bdabd44.png";

function CustomerQuote({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch w-full md:w-auto">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start p-[24px] md:p-[32px] relative size-full">{children}</div>
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
  onClick?: () => void;
};

function ButtonText1({ text, onClick }: ButtonText1Props) {
  return (
    <button 
      onClick={onClick}
      className="bg-black content-stretch flex items-center justify-center px-[24px] md:px-[32px] py-[16px] md:py-[20px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 hover:bg-[#FF0808] transition-colors cursor-pointer w-full md:w-auto"
    >
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] md:text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </button>
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

export default function PresentationPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative min-h-screen w-full overflow-x-hidden" data-name="PresentationView">
      
      {/* Hero Section */}
      <div className="w-full px-[24px] md:px-[79px] py-[40px] md:py-[80px]">
        {/* 💡 RESPONSIVE: Pe mobil sunt coloană (flex-col), pe desktop pe același rând (md:flex-row) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[64px]">
          
          {/* Hero Text - Left Side */}
          <div className="flex-1 flex flex-col gap-[32px] md:gap-[40px] text-center md:text-left">
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              {/* 💡 RESPONSIVE: Text mai mic pe mobil (text-[48px]) */}
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] md:text-[64px] text-black tracking-[-1.28px] leading-[1.2]">
                <span>{`Welcome to `}</span>
                <span className="font-['Cinzel_Decorative:Bold',sans-serif] text-[#ff0808]">Vanes</span>
              </p>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center text-[18px] md:text-[24px] text-[rgba(0,0,0,0.75)]">
                <p className="leading-[1.5]">Explore our latest collection of premium quality clothing. Designed for comfort, styled for you.</p>
              </div>
            </div>
            <ButtonText1 text="Shop Now" onClick={() => navigate('/shop')} />
          </div>

          {/* Hero Image - Right Side */}
          {/* 💡 RESPONSIVE: Poza ocupă 100% din ecranul telefonului, iar pe laptop e fixată */}
          <div className="flex-shrink-0 w-full md:w-[545px] h-[350px] md:h-[545px]">
            <img alt="Fashion jacket" className="w-full h-full object-cover rounded-lg shadow-2xl" src={imgImage11} />
          </div>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="py-[40px] md:py-20 px-[24px] md:px-[81px]">
        {/* 💡 RESPONSIVE: Text centrat pe mobil */}
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[36px] md:text-[48px] text-black tracking-[-0.96px] mb-8 md:mb-12 text-center md:text-left">Popular Categories</p>
        
        {/* 💡 RESPONSIVE: 1 categorie pe mobil, 3 pe desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[39px]">
          
          <div className="content-stretch flex flex-col items-start" data-name="Card">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Copy">
              {/* 💡 RESPONSIVE: Am lăsat height flexibil sau mai mic pe mobil */}
              <div className="h-[400px] md:h-[561px] relative shrink-0 w-full rounded-lg overflow-hidden" data-name="image 5">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-full">Jeans</p>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#828282] text-[18px] md:text-[24px] w-full">
                <p className="leading-[1.5] whitespace-normal">Discover the perfect fit for everyday wear.</p>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-start" data-name="Card">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Copy">
              <div className="h-[400px] md:h-[563px] relative shrink-0 w-full rounded-lg overflow-hidden" data-name="image 12">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-full">Dresses</p>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#828282] text-[18px] md:text-[24px] w-full">
                <p className="leading-[1.5] whitespace-normal">Elegant silhouettes for any occasion.</p>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-start" data-name="Card">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Copy">
              <div className="h-[400px] md:h-[573px] relative shrink-0 w-full rounded-lg overflow-hidden" data-name="image 13">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-full">Jackets</p>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#828282] text-[18px] md:text-[24px] w-full">
                <p className="leading-[1.5] whitespace-normal">Stay warm without compromising on style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What our clients say Section */}
      <div className="py-[40px] md:py-20 px-[24px] md:px-[76px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[36px] md:text-[48px] text-black tracking-[-0.96px] mb-8 md:mb-12 text-center md:text-left">What our clients say</p>
        
        {/* 💡 RESPONSIVE: flex-col pe mobil, flex-row pe desktop */}
        <div className="content-stretch flex flex-col md:flex-row gap-[32px] items-start w-full" data-name="Cards">
          
          <CustomerQuote>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[20px] md:text-[24px] text-black w-full whitespace-normal">"The quality of the jackets is amazing!"</p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 mt-auto" data-name="Avatar">
              <div className="relative shrink-0 size-[45px]" data-name="Avatar">
                <img alt="" className="absolute block max-w-none size-full rounded-full" height="45" src={imgAvatar} width="45" />
              </div>
              <Text text="Aaron" />
            </div>
          </CustomerQuote>
          
          <CustomerQuote>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[20px] md:text-[24px] text-black w-full whitespace-normal">"Fast shipping and perfect fit."</p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 mt-auto" data-name="Avatar">
              <div className="relative shrink-0 size-[45px]" data-name="Avatar">
                <img alt="" className="absolute block max-w-none size-full rounded-full" height="45" src={imgAvatar1} width="45" />
              </div>
              <Text text="Sarah" />
            </div>
          </CustomerQuote>
          
          <CustomerQuote>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[20px] md:text-[24px] text-black w-full whitespace-normal">"The jeans fit like a glove and the quality is outstanding. Will definitely order again!"</p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 mt-auto" data-name="Avatar">
              <div className="relative shrink-0 size-[45px]" data-name="Avatar">
                <img alt="" className="absolute block max-w-none size-full rounded-full" height="45" src={imgAvatar2} width="45" />
              </div>
              <Text text="Blake" />
            </div>
          </CustomerQuote>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#f7f7f7] py-[40px] md:py-20 px-[24px] md:px-[80px]" data-name="Section">
        {/* 💡 RESPONSIVE: flex-col pe mobil cu text centrat */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[24px] max-w-7xl mx-auto text-center md:text-left">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic text-[36px] md:text-[48px] text-black tracking-[-0.96px] max-w-full md:max-w-[703px]">Get 10% Off Your First Order</p>
          <div className="content-stretch flex items-center justify-center md:justify-end w-full md:w-auto" data-name="Buttons">
            <ButtonText1 text="Subscribe" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-[40px] md:py-12 px-[24px] md:px-[80px]" data-name="Navigation / Footer">
        <div className="border-t border-[#E6E6E6] pt-8 md:pt-12">
          {/* 💡 RESPONSIVE: Tot footerul trece pe coloană pe mobil */}
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] max-w-7xl mx-auto">
            
            {/* Logo & Social */}
            <div className="flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[24px] text-black">
                <p className="leading-[1.5]">www.vanes.com</p>
              </div>
              <div className="content-stretch flex justify-center lg:justify-start gap-[8px] items-start" data-name="Social Icons">
                <div className="relative rounded-[4px] shrink-0 size-[40px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Buttons / Icon">
                  <Icon><path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" /></Icon>
                </div>
                <div className="relative rounded-[4px] shrink-0 size-[40px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Buttons / Icon">
                  <Icon><path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" /></Icon>
                </div>
                <div className="relative rounded-[4px] shrink-0 size-[40px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Buttons / Icon">
                  <Icon><path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" /></Icon>
                </div>
                <div className="relative rounded-[4px] shrink-0 size-[40px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Buttons / Icon">
                  <Icon><path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" /></Icon>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            {/* 💡 RESPONSIVE: Pe mobil e 1 coloană, pe tabletă 2, pe laptop 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[80px] text-center lg:text-left">
              
              <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[16px] md:gap-[24px] items-center lg:items-start justify-center leading-[1.5] not-italic text-[16px]" data-name="Items">
                <div className="text-black"><p>Contact Us</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>{`Shipping & Delivery`}</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>{`Returns & Exchanges`}</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>Size Guide</p></div>
              </div>

              <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[16px] md:gap-[24px] items-center lg:items-start justify-center leading-[1.5] not-italic text-[16px]" data-name="Items">
                <div className="text-black"><p>Our Story</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>Sustainability</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>Careers</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>{`Press & Media`}</p></div>
              </div>

              <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[16px] md:gap-[24px] items-center lg:items-start justify-center leading-[1.5] not-italic text-[16px]" data-name="Items">
                <div className="text-black"><p>Terms of Service</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>Privacy Policy</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>Cookie Policy</p></div>
                <div className="text-[#454545] hover:text-black transition-colors cursor-pointer"><p>FAQ</p></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}