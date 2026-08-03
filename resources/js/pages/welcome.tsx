import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <div className="flex min-h-screen flex-col items-center bg-primary-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:bg-primary-950">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-primary-900 dark:text-primary-50 dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">
                                CBT SMKN 9 Kota Bekasi
                            </h1>
                            <p className="mb-2 text-gray-600 dark:text-primary-200">
                                Platform Computer Based Test
                                <br />
                                Sekolah Menengah Kejuruan Negeri 9 Kota Bekasi
                            </p>
                            <ul className="mb-4 flex flex-col lg:mb-6">
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-primary-200 dark:before:border-primary-700">
                                    <span className="relative bg-white py-1 dark:bg-primary-900">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary-200 bg-primary-50 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-primary-700 dark:bg-primary-900">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary-300 dark:bg-primary-600" />
                                        </span>
                                    </span>
                                    <span>
                                        Sistem Ujian Digital
                                        <span className="ml-1 inline-flex items-center space-x-1 font-medium text-primary-600 underline underline-offset-4 dark:text-primary-400">
                                            <span>Aman & Terpercaya</span>
                                        </span>
                                    </span>
                                </li>
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-primary-200 dark:before:border-primary-700">
                                    <span className="relative bg-white py-1 dark:bg-primary-900">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary-200 bg-primary-50 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-primary-700 dark:bg-primary-900">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary-300 dark:bg-primary-600" />
                                        </span>
                                    </span>
                                    <span>
                                        Akses Mudah
                                        <span className="ml-1 inline-flex items-center space-x-1 font-medium text-primary-600 underline underline-offset-4 dark:text-primary-400">
                                            <span>Kapan Saja & Dimana Saja</span>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <ul className="flex gap-3 text-sm leading-normal">
                                <li>
                                    <a
                                        href="/login"
                                        className="inline-block rounded-sm border border-school bg-school px-5 py-1.5 text-sm leading-normal text-white hover:bg-school-700 dark:border-school-500 dark:bg-school-600 dark:hover:bg-school-500"
                                    >
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative -mb-px aspect-[335/364] w-full shrink-0 overflow-hidden rounded-t-lg bg-primary-100 lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-primary-900">
                            {/* School Logo Placeholder */}
                            <svg
                                className="w-full max-w-none translate-y-0 text-school opacity-100 transition-all duration-750 dark:text-school-500 starting:opacity-0 motion-safe:starting:translate-y-6"
                                viewBox="0 0 438 104"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.2036 -3H0V102.197H49.5189V86.7187H17.2036V-3Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M110.256 41.6337C108.061 38.1275 104.945 35.3731 100.905 33.3681C96.8667 31.3647 92.8016 30.3618 88.7131 30.3618C83.4247 30.3618 78.5885 31.3389 74.201 33.2923C69.8111 35.2456 66.0474 37.928 62.9059 41.3333C59.7643 44.7401 57.3198 48.6726 55.5754 53.1293C53.8287 57.589 52.9572 62.274 52.9572 67.1813C52.9572 72.1925 53.8287 76.8995 55.5754 81.3069C57.3191 85.7173 59.7636 89.6241 62.9059 93.0293C66.0474 96.4361 69.8119 99.1155 74.201 101.069C78.5885 103.022 83.4247 103.999 88.7131 103.999C92.8016 103.999 96.8667 102.997 100.905 100.994C104.945 98.9911 108.061 96.2359 110.256 92.7282V102.195H126.563V32.1642H110.256V41.6337ZM108.76 75.7472C107.762 78.4531 106.366 80.8078 104.572 82.8112C102.776 84.8161 100.606 86.4183 98.0637 87.6206C95.5202 88.823 92.7004 89.4238 89.6103 89.4238C86.5178 89.4238 83.7252 88.823 81.2324 87.6206C78.7388 86.4183 76.5949 84.8161 74.7998 82.8112C73.004 80.8078 71.6319 78.4531 70.6856 75.7472C69.7356 73.0421 69.2644 70.1868 69.2644 67.1821C69.2644 64.1758 69.7356 61.3205 70.6856 58.6154C71.6319 55.9102 73.004 53.5571 74.7998 51.5522C76.5949 49.5495 78.738 47.9451 81.2324 46.7427C83.7252 45.5404 86.5178 44.9396 89.6103 44.9396C92.7012 44.9396 95.5202 45.5404 98.0637 46.7427C100.606 47.9451 102.776 49.5487 104.572 51.5522C106.367 53.5571 107.762 55.9102 108.76 58.6154C109.756 61.3205 110.256 64.1758 110.256 67.1821C110.256 70.1868 109.756 73.0421 108.76 75.7472Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M242.805 41.6337C240.611 38.1275 237.494 35.3731 233.455 33.3681C229.416 31.3647 225.351 30.3618 221.262 30.3618C215.974 30.3618 211.138 31.3389 206.75 33.2923C202.36 35.2456 198.597 37.928 195.455 41.3333C192.314 44.7401 189.869 48.6726 188.125 53.1293C186.378 57.589 185.507 62.274 185.507 67.1813C185.507 72.1925 186.378 76.8995 188.125 81.3069C189.868 85.7173 192.313 89.6241 195.455 93.0293C198.597 96.4361 202.361 99.1155 206.75 101.069C211.138 103.022 215.974 103.999 221.262 103.999C225.351 103.999 229.416 102.997 233.455 100.994C237.494 98.9911 240.611 96.2359 242.805 92.7282V102.195H259.112V32.1642H242.805V41.6337ZM241.31 75.7472C240.312 78.4531 238.916 80.8078 237.122 82.8112C235.326 84.8161 233.156 86.4183 230.614 87.6206C228.07 88.823 225.251 89.4238 222.16 89.4238C219.068 89.4238 216.275 88.823 213.782 87.6206C211.289 86.4183 209.145 84.8161 207.35 82.8112C205.554 80.8078 204.182 78.4531 203.236 75.7472C202.286 73.0421 201.814 70.1868 201.814 67.1821C201.814 64.1758 202.286 61.3205 203.236 58.6154C204.182 55.9102 205.554 53.5571 207.35 51.5522C209.145 49.5495 211.288 47.9451 213.782 46.7427C216.275 45.5404 219.068 44.9396 222.16 44.9396C225.251 44.9396 228.07 45.5404 230.614 46.7427C233.156 47.9451 235.326 49.5487 237.122 51.5522C238.917 53.5571 240.312 55.9102 241.31 58.6154C242.306 61.3205 242.806 64.1758 242.806 67.1821C242.805 70.1868 242.305 73.0421 241.31 75.7472Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M438 -3H421.694V102.197H438V-3Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M139.43 102.197H155.735V48.2834H183.712V32.1665H139.43V102.197Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M324.49 32.1665L303.995 85.794L283.498 32.1665H266.983L293.748 102.197H314.242L341.006 32.1665H324.49Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M376.571 30.3656C356.603 30.3656 340.797 46.8497 340.797 67.1828C340.797 89.6597 356.094 104 378.661 104C391.29 104 399.354 99.1488 409.206 88.5848L398.189 80.0226C398.183 80.031 389.874 90.9895 377.468 90.9895C363.048 90.9895 356.977 79.3111 356.977 73.269H411.075C413.917 50.1328 398.775 30.3656 376.571 30.3656ZM357.02 61.0967C357.145 59.7487 359.023 43.3761 376.442 43.3761C393.861 43.3761 395.978 59.7464 396.099 61.0967H357.02Z"
                                    fill="currentColor"
                                />
                            </svg>

                            {/* 9 */}
                            <svg
                                className="relative -mt-[6.6rem] -ml-8 w-[438px] max-w-none [--stroke-color:#1e40af] lg:ml-0 dark:[--stroke-color:#60a5fa]"
                                viewBox="0 0 440 392"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g className="text-[#1e40af] opacity-100 mix-blend-darken transition-all delay-300 duration-750 dark:text-primary-300 dark:mix-blend-normal starting:opacity-0">
                                    <mask
                                        id="path-1-mask"
                                        maskUnits="userSpaceOnUse"
                                        x="-0.328613"
                                        y="103"
                                        width="338"
                                        height="299"
                                        fill="black"
                                    >
                                        <rect
                                            fill="white"
                                            x="-0.328613"
                                            y="103"
                                            width="338"
                                            height="299"
                                        />
                                        <path d="M234.936 400.8C204.136 400.8 178.936 392.4 159.336 375.6C140.136 358.8 130.536 337 130.536 310.2H200.736C200.736 318.2 203.736 324.8 209.736 330C215.736 335.2 223.736 337.8 233.736 337.8C243.336 337.8 251.136 335 257.136 329.4C263.536 323.8 266.736 316.6 266.736 307.8C266.736 299.8 263.936 293.2 258.336 288C252.736 282.8 245.536 280.2 236.736 280.2H199.536V218.4H236.736C243.536 218.4 249.336 216 254.136 211.2C258.936 206.4 261.336 200.4 261.336 193.2C261.336 184.8 258.736 178.2 253.536 173.4C248.336 168.6 241.736 166.2 233.736 166.2C226.536 166.2 220.336 168.4 215.136 172.8C210.336 177.2 207.936 182.8 207.936 189.6H141.336C141.336 164.8 150.136 144.6 167.736 129C185.336 113 207.936 105 235.536 105C263.136 105 285.536 112.2 302.736 126.6C320.336 141 329.136 160 329.136 183.6C329.136 200.8 324.536 214.8 315.336 225.6C306.136 236 294.336 243.2 279.936 247.2C297.136 252 310.736 260.2 320.736 271.8C331.136 283.4 336.336 298 336.336 315.6C336.336 340.4 326.936 360.8 308.136 376.8C289.336 392.8 264.936 400.8 234.936 400.8Z" />
                                        <path d="M26.8714 167.6H1.67139V105.2H94.6714V400.2H26.8714V167.6Z" />
                                    </mask>
                                    <path
                                        d="M234.936 400.8C204.136 400.8 178.936 392.4 159.336 375.6C140.136 358.8 130.536 337 130.536 310.2H200.736C200.736 318.2 203.736 324.8 209.736 330C215.736 335.2 223.736 337.8 233.736 337.8C243.336 337.8 251.136 335 257.136 329.4C263.536 323.8 266.736 316.6 266.736 307.8C266.736 299.8 263.936 293.2 258.336 288C252.736 282.8 245.536 280.2 236.736 280.2H199.536V218.4H236.736C243.536 218.4 249.336 216 254.136 211.2C258.936 206.4 261.336 200.4 261.336 193.2C261.336 184.8 258.736 178.2 253.536 173.4C248.336 168.6 241.736 166.2 233.736 166.2C226.536 166.2 220.336 168.4 215.136 172.8C210.336 177.2 207.936 182.8 207.936 189.6H141.336C141.336 164.8 150.136 144.6 167.736 129C185.336 113 207.936 105 235.536 105C263.136 105 285.536 112.2 302.736 126.6C320.336 141 329.136 160 329.136 183.6C329.136 200.8 324.536 214.8 315.336 225.6C306.136 236 294.336 243.2 279.936 247.2C297.136 252 310.736 260.2 320.736 271.8C331.136 283.4 336.336 298 336.336 315.6C336.336 340.4 326.936 360.8 308.136 376.8C289.336 392.8 264.936 400.8 234.936 400.8ZM200.736 280.2H236.736C245.536 280.2 252.736 282.8 258.336 288C263.936 293.2 266.736 299.8 266.736 307.8C266.736 316.6 263.536 323.8 257.136 329.4C251.136 335 243.336 337.8 233.736 337.8C223.736 337.8 215.736 335.2 209.736 330C203.736 324.8 200.736 318.2 200.736 310.2Z"
                                        stroke="var(--stroke-color)"
                                        strokeWidth="2"
                                        mask="url(#path-1-mask)"
                                    />
                                </g>
                            </svg>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
