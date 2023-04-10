import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="my-heading">
          Have fun in this web and have a chat with friends and family in these social media platforms! Happy Chatting!
          
        </h1>
        
      </div>

      <div className=" move-left relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/The-Chatroom-Logos.png"
          alt="The Chatroom Logo"
          width={400}
          height={37}
          priority
        />
      </div>

      <div className="move-left mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.facebook.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Facebook{' '}
            
          </h2>
          <Image
          className="move-right relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/facebook.png"
          alt="Facebook Logo"
          width={50}
          height={37}
          priority
          />
        </a>

        <a
          href="https://www.instagram.com/accounts/login/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Instagram{' '}
            
          </h2>
          <Image
          className="move-right relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/instagram.jpg"
          alt="Instagram Logo"
          width={50}
          height={37}
          priority
          />
        </a>

        <a
          href="https://twitter.com/i/flow/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Twitter{' '}
            
          </h2>
          <Image
          className="move-right relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/twitter.png"
          alt="Twitter Logo"
          width={50}
          height={37}
          priority
          />
        </a>

        <a
          href="https://web.whatsapp.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Whatsapp{' '}
            
          </h2>
          <Image
          className="move-right relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/whatsapp.png"
          alt="Whatsapp Logo"
          width={50}
          height={37}
          priority
          />
        </a>
      </div>


      <div>

        <p style={{fontSize : "4rem"}}> {"\u{1F483}"} {"\u{1F6B6}"} {"\u{1F91E}"} {"\u{1F921}"} {"\u{1F60E}"} {"\u{1F912}"} {"\u{1F604}"} {"\u{1F911}"} {"\u{1F609}"} {"\u{1F923}"}</p>  
        
      </div>



    </main>
  )
}
