export default function Heading({ text }: { text: string }) {
    return (
        <div className="bg-white rounded-lg mx-auto px-5 py-3 my-5">
            <h2 className="text-gray-600 text-xl font-semibold px-5">{text}</h2>
        </div>
    );
}