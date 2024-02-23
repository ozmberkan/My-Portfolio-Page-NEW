
export default function Header({ handleWhoMe, handleProjects }) {

  return (
    <div>
      <div className='flex justify-center items-center gap-x-4  px-4 py-4 mt-2 '>
        <button onClick={handleWhoMe}  className="bg-white text-black w-36 py-1 rounded-full shadow-md hover:bg-white/80 transition-colors">Ben Kimim</button>
        <button onClick={handleProjects}  className="bg-white text-black w-36 py-1 rounded-full shadow-md hover:bg-white/80 transition-colors">Projelerim</button>
      </div>
    </div>
  );
}
