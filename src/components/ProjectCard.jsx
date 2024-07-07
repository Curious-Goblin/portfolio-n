export function ProjectCard({ title, year, description, image, buttonText }) {
    return (
        <div className="flex justify-between gap-4 bg-zinc-900 border border-card px-24 py-16 rounded-xl shadow-md mb-8">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-white mb-8">{year}</p>
                    <p className="text-gray-300 text-xl text-left w-full max-w-lg mb-4">{description}</p>
                </div>
                <div className="mt-auto">
                    <button className="bg-zinc-900 border border-card font-semibold text-white font-bold py-2 px-4 rounded-lg">
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className="">
                <img src={image} alt={title} style={{ width: '700px', height: '500px' }} className="border-card rounded-2xl shadow-md" />
            </div>
        </div>
    );
}