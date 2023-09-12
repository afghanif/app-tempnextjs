import Script from "next/script";
import Link from "next/link";

const LandingPageTemplate = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />
      <Script src="js/countdown.bundle.js" />
      <Script src="js/app.bundle.js" />

      <main>
        <section className="hero relative pb-10 pt-10">
          <div className="ml-8 hidden lg:flex xl:ml-12 float-right m-10 mr-20">
            <a
              href="#"
              className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600 dark:text-white"
              data-bs-toggle="modal"
              data-bs-target="#walletModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </a>
            <div className="js-nav-dropdown group-dropdown relative">
              <button
                className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white border-jacarta-100 transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600"
                id="profileDropdown"
                data-bs-toggle="dropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
              </button>
              <div className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl">
                <a
                  href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600"
                >
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                    English
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600"
                >
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                    Indonesia
                  </span>
                </a>
              </div>
            </div>

            <a
              href="#"
              className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </a>
          </div>

          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-5 font-display text-5xl text-slate-500 dark:text-white lg:text-4xl xl:text-5xl">
                Hallo, Selamat Datang di Portal
                <span className="text-green-600"> Kecamatan Tapos</span>
              </h1>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                &nbsp;
                <p className="mb-5 dark:text-jacarta-300 text-sm dark:text-white">
                  Depok, 04 September 2023
                </p>
                &nbsp; &nbsp; &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                &nbsp;
                <p className="mb-5 dark:text-jacarta-300 text-sm dark:text-white">
                  30°C
                </p>
              </div>
              <Link
                href="/home"
                className="inline-block rounded-full bg-green-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
              >
                Kunjungi Situs
              </Link>
            </div>
          </div>
        </section>

        <div className="relative px-6 sm:px-0">
          <div className="swiper coverflow-slider !py-5">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-cilangkap.depok.go.id/Home/tentang"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/cilangkap.jpg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Cilangkap
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Cilangkap RT.001 RW 013, Tapos, Kota Depok
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-cimpaeun.depok.go.id/Home"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/cimpaeun.jpg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Cimpaeun
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            {" "}
                            Jl. Kiray Nomor 1 RT.02/ RW.15 Kec, Tapos Kota Depok
                            Jawa Barat 16459
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-jatijajar.depok.go.id/"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/jatijajar.jpg"
                          alt="item 1"
                          height="430"
                          width="379"
                          className="swiper-lazy h-[260px] w-full object-cover"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Jatijajar
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Jatijajar RT 006 RW 004 Kel Jatijajar Kec Tapos
                            Kota Depok Kode Pos 16455
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-leuwinanggung.depok.go.id/"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/leuwi.jpg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Leuwinanggung
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Raya Leuwinanggung
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-sukamajubaru.depok.go.id/"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/sukmaba.jpg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Sukamaju Baru
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Sukamaju Baru 1 No. 50
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a
                        href="https://kel-sukatani.depok.go.id/Home"
                        target="_blank"
                      >
                        <img
                          src="img/kelurahan/sukatani.jpeg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Sukatani
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Ananta Kupa Raya No.1 Komp. Deppen HBTB,
                            Sukatani-Tapos, Depok 16954
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <a href="https://kel-tapos.depok.go.id/" target="_blank">
                        <img
                          src="img/kelurahan/tapos.jpg"
                          alt="item 1"
                          className="swiper-lazy h-[260px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </a>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <div>
                          <a href="#" className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-green-600 dark:text-white">
                              Tapos
                            </span>
                          </a>
                          <a href="#" className="text-2xs text-green-600">
                            Jl. Raya Tapos No.1 RT 03/05 Kelurahan Tapos,
                            Kecamatan Tapos - Kota Depok
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="swiper-button-prev swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-green-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          </div>
          <div className="swiper-button-next swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-green-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPageTemplate;
