import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Encuentra</span> <br /> La pareja de la foto
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        Para revelar <br /> <span className="text-gray-400">la sorpresa</span>
      </h1>
    </>
  );
}
