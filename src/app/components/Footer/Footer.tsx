const Footer = () => {
    return (
        <footer className="border-t border-[#1c1f24] bg-[#090a0c]">
            <div
                className="
          mx-auto flex min-h-[68px] max-w-[1400px]
          flex-col items-center justify-center
          gap-3 px-5
          sm:flex-row sm:justify-between
          sm:px-6
          md:px-8
          lg:px-10
        "
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="flex items-center">
                        <span className="text-[18px] font-black leading-none text-[#c6ff00]">
                            ✚
                        </span>
                    </div>

                    {/* Logo Text */}
                    <span className="font-oswald text-[10px] font-bold uppercase tracking-wide text-white">
                        FitLog
                    </span>
                </div>

                {/* Copyright */}
                <p className="font-inter text-center text-[8px] text-[#666b74] sm:text-right sm:text-[9px] md:text-[10px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;