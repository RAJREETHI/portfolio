import { ChevronDown } from "lucide-react";

export default function CardExpand({ title, image, setOpen }) {
  const sectionMap = {
    "CORE COMPETENCIES": "skills",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    EDUCATION: "education",
  };

  const handleClick = () => {
    setOpen(title);

    setTimeout(() => {
      const sectionId = sectionMap[title];
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <div className="relative h-60 sm:h-72 md:h-80 rounded-xl bg-black text-white">
      <div
        className="relative h-60 sm:h-72 md:h-80 rounded-xl shadow-lg bg-cover bg-center hover:scale-105 transition duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-center px-2">
          {title}
        </h2>
      </div>

      <button
        onClick={handleClick}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 
        bg-gradient-to-r from-cyan-500 to-blue-500 
        p-2 sm:p-3 rounded-full hover:scale-105 transition"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </button>
    </div>
  );
}
