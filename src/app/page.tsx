import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-center items-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <div 
        className="h-[60%] w-[80%] rounded-xl relative flex flex-col justify-center items-center gap-5"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-7 gap-5">
          <div className="flex relative w-[30%] md:w-[15%]">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={200} 
              height={200}
            />
          </div>
          <div className="w-[100%] md:w-[50%] text-center flex flex-col gap-5 text-white">
            <p className="md:text-3xl text-xl">ADUAN PELANGGAN</p>
            <p className="md:text-xl">
              Aduan ini adalah aduan perkhidmatan dan tidak termasuk aduan kerosakan dan ICT
            </p>
          </div>
        </div>

        <div className="flex md:gap-x-10 gap-x-5">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiSyrovcAv7diM4JV3EeY8__SASlpON96u_6NaZLY7xb5XyA/viewform"
            className="rounded text-center text-black md:px-5 px-1 py-3 bg-[#f79b00] hover:bg-[#ffd284]"
          >
            Borang Aduan
          </a>
          <a
            href="/status"
            className="rounded text-center text-black md:px-5 px-1 py-3 bg-[#f79b00] hover:bg-[#ffd284]"
          >
            Status Aduan
          </a>
        </div>
      </div>
    </main>
  );
}