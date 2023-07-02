import { metadata } from "./layout"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'API', href: 'https://apispendr.danm.cloud/api/spendr/' },
]

export default function Home() {
  return (
    <div className='bg-black'>
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Spendr!</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
              alt=""
            />
          </a>
            <h1 className="text-xl leading-7 text-emerald-700 sm:truncate sm:text-3xl sm:tracking-tight">
              Spendr! 
            </h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-emerald-600">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-emerald-600">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-emerald-600 sm:text-6xl">
          {metadata.description}
        </h1>
        <p className="mt-6 text-lg leading-8 text-teal-400">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/signup"
          className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Get started
        </a>
        <a href="/whatis" className="text-sm font-semibold leading-6 text-emerald-600">
          Learn more <span aria-hidden="true">→</span>
        </a>
        </div>
      </div>
    </div>
  )
}
