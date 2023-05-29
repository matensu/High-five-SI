
export const Footer= () =>{
  return (
    <footer className='light ' >
      <div className='text-center p-3 font-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{` Lycée Bernard Palissy 2nd Science de l'ingénieur `}
        <a className='text-dark' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </footer>
  );
}