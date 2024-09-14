import "./home.css";

export const metadata = {
  title: "Home",
  description: "Home page of financial assistance website",
};

export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold">Introduction:</h1>
      <div className="flex-center h-[75vh]">
        <p className="text-center text-xl font-extrabold text-black/65">
          (Home Page Content)
        </p>
      </div>
    </div>
  );
}
