
export default function Tailwind() {
    const H4 = "font-[700] text-[1.1rem] text-[#FFFFFF] leading-[25px] tracking-[1px]"
    const H3 = "font-[700] text-[1.2rem] leading-[25px] tracking-[2.57px] text-[#FFFFFF]"
    const H2 = "font-['Antonio'] text-[#FFFFFF] font-[400] text-[4rem] leading-[100%] tracking-[-1.5px]"
    const H1 = "font-['Antonio'] font-[400] text-[80px] leading-[100%] text-[#FFFFFF]"
    const P = "font-[400] text-[1.4rem] leading-[25px] text-[#FFFFFF]"
    const buttonStyle = `w-[100%]! h-[48px]! flex gap-[20px] items-center justify-start p-[0_20px_0_20px]! bg-transparent border-solid border-[1px] border-[rgba(255,255,255,0.2)] text-left ${H3}`
    return {H4, H3, H2, H1, P, buttonStyle}
}
