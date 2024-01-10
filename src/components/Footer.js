export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <section className="pt-6">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
                <div>
                    Copyright {year}{" "}
                    <a
                        className="text-cyan-600"
                        href="https://programmertowheed.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Programmer Towheed.
                    </a>
                </div>
                <div>
                    <a
                        className="text-cyan-600"
                        href="https://github.com/programmertowheed"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
            </div>
        </section>
    );
}
