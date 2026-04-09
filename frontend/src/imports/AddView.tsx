export default function AddView() {
  return (
    <div className="bg-white relative size-full" data-name="Add View">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[161px] leading-[normal] left-[calc(50%-392px)] not-italic text-[96px] text-black top-[97px] w-[784px]">Add new product</p>
      <div className="absolute contents left-[339px] top-[390px]">
        <div className="-translate-x-1/2 absolute bg-[#d9d9d9] h-[105px] left-1/2 top-[390px] w-[936px]" data-name="Rectangle" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[normal] left-[372px] mix-blend-overlay not-italic text-[40px] text-black top-[422px] w-[188px]">Name</p>
      </div>
      <div className="absolute contents left-[339px] top-[605px]">
        <div className="-translate-x-1/2 absolute bg-[#d9d9d9] h-[105px] left-1/2 top-[605px] w-[936px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[41px] leading-[normal] left-[372px] mix-blend-overlay not-italic text-[40px] text-black top-[639px] w-[190px]">Category</p>
      </div>
      <div className="absolute contents left-[339px] top-[820px]">
        <div className="-translate-x-1/2 absolute bg-[#d9d9d9] h-[105px] left-1/2 top-[820px] w-[936px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[43px] leading-[normal] left-[372px] mix-blend-overlay not-italic text-[40px] text-black top-[844px] w-[118px]">Price</p>
      </div>
      <div className="absolute contents left-[490px] top-[1646px]">
        <div className="absolute bg-black h-[131px] left-[490px] top-[1646px] w-[600px]" data-name="Rectangle" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[131px] justify-center leading-[0] left-[790px] not-italic text-[64px] text-center text-white top-[1711.5px] w-[600px]">
          <p className="leading-[1.5]">Add Product</p>
        </div>
      </div>
      <div className="absolute contents left-[339px] top-[1035px]">
        <div className="-translate-x-1/2 absolute bg-[#d9d9d9] h-[105px] left-1/2 top-[1035px] w-[936px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[48px] leading-[normal] left-[372px] mix-blend-overlay not-italic text-[40px] text-black top-[1057px] w-[114px]">Sizes</p>
      </div>
      <div className="absolute contents left-[339px] top-[1250px]">
        <div className="absolute bg-[#d9d9d9] h-[264px] left-[339px] top-[1250px] w-[927px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[79px] leading-[normal] left-[calc(50%-171px)] mix-blend-overlay not-italic text-[48px] text-black top-[1345px] w-[324px]">Upload Image</p>
      </div>
    </div>
  );
}