import { component$ } from "@builder.io/qwik";

type QwikHooksProps = {
    width: number;
};
export default component$((props: QwikHooksProps) => {
    return (
        <svg
            width={props.width}
            viewBox="0 0 568 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M247 96H231.5C230.233 96 229.3 95.7333 228.7 95.2C228.167 94.6 227.9 93.6667 227.9 92.4V27.6C227.9 26.3333 228.167 25.4333 228.7 24.9C229.3 24.3 230.233 24 231.5 24H247C248.267 24 249.167 24.3 249.7 24.9C250.3 25.4333 250.6 26.3333 250.6 27.6V49.3H267.3V27.6C267.3 26.3333 267.567 25.4333 268.1 24.9C268.7 24.3 269.633 24 270.9 24H286.4C287.667 24 288.567 24.3 289.1 24.9C289.7 25.4333 290 26.3333 290 27.6V92.4C290 93.6667 289.7 94.6 289.1 95.2C288.567 95.7333 287.667 96 286.4 96H270.9C269.633 96 268.7 95.7333 268.1 95.2C267.567 94.6 267.3 93.6667 267.3 92.4V70.2H250.6V92.4C250.6 93.6667 250.3 94.6 249.7 95.2C249.167 95.7333 248.267 96 247 96ZM360.779 77.1C360.779 80.1667 360.312 82.9667 359.379 85.5C358.512 87.9667 356.912 90.1 354.579 91.9C352.312 93.6333 349.146 95 345.079 96C341.079 97 335.979 97.5 329.779 97.5C323.579 97.5 318.446 97 314.379 96C310.312 95 307.112 93.6333 304.779 91.9C302.512 90.1 300.912 87.9667 299.979 85.5C299.112 82.9667 298.679 80.1667 298.679 77.1V43C298.679 39.9333 299.112 37.1667 299.979 34.7C300.912 32.1667 302.512 30 304.779 28.2C307.112 26.4 310.312 25 314.379 24C318.446 23 323.579 22.5 329.779 22.5C335.979 22.5 341.079 23 345.079 24C349.146 25 352.312 26.4 354.579 28.2C356.912 30 358.512 32.1667 359.379 34.7C360.312 37.1667 360.779 39.9333 360.779 43V77.1ZM321.379 73.5C321.379 74.8333 321.879 75.9667 322.879 76.9C323.879 77.7667 326.179 78.2 329.779 78.2C333.379 78.2 335.679 77.7667 336.679 76.9C337.679 75.9667 338.179 74.8333 338.179 73.5V46.6C338.179 45.3333 337.679 44.2667 336.679 43.4C335.679 42.4667 333.379 42 329.779 42C326.179 42 323.879 42.4667 322.879 43.4C321.879 44.2667 321.379 45.3333 321.379 46.6V73.5ZM430.509 77.1C430.509 80.1667 430.043 82.9667 429.109 85.5C428.243 87.9667 426.643 90.1 424.309 91.9C422.043 93.6333 418.876 95 414.809 96C410.809 97 405.709 97.5 399.509 97.5C393.309 97.5 388.176 97 384.109 96C380.043 95 376.843 93.6333 374.509 91.9C372.243 90.1 370.643 87.9667 369.709 85.5C368.843 82.9667 368.409 80.1667 368.409 77.1V43C368.409 39.9333 368.843 37.1667 369.709 34.7C370.643 32.1667 372.243 30 374.509 28.2C376.843 26.4 380.043 25 384.109 24C388.176 23 393.309 22.5 399.509 22.5C405.709 22.5 410.809 23 414.809 24C418.876 25 422.043 26.4 424.309 28.2C426.643 30 428.243 32.1667 429.109 34.7C430.043 37.1667 430.509 39.9333 430.509 43V77.1ZM391.109 73.5C391.109 74.8333 391.609 75.9667 392.609 76.9C393.609 77.7667 395.909 78.2 399.509 78.2C403.109 78.2 405.409 77.7667 406.409 76.9C407.409 75.9667 407.909 74.8333 407.909 73.5V46.6C407.909 45.3333 407.409 44.2667 406.409 43.4C405.409 42.4667 403.109 42 399.509 42C395.909 42 393.609 42.4667 392.609 43.4C391.609 44.2667 391.109 45.3333 391.109 46.6V73.5ZM458.34 96H442.84C441.573 96 440.64 95.7333 440.04 95.2C439.507 94.6 439.24 93.6667 439.24 92.4V27.6C439.24 26.3333 439.507 25.4333 440.04 24.9C440.64 24.3 441.573 24 442.84 24H458.34C459.607 24 460.507 24.3 461.04 24.9C461.64 25.4333 461.94 26.3333 461.94 27.6V50.6H465.94L476.24 27.3C476.707 26.1 477.34 25.2667 478.14 24.8C478.94 24.2667 479.973 24 481.24 24H496.64C497.773 24 498.54 24.3 498.94 24.9C499.34 25.4333 499.307 26.2333 498.84 27.3L488.64 50.6C492.373 50.8 495.34 52.1333 497.54 54.6C499.807 57 500.94 60.2 500.94 64.2V92.4C500.94 93.6667 500.64 94.6 500.04 95.2C499.507 95.7333 498.607 96 497.34 96H481.94C480.673 96 479.74 95.7333 479.14 95.2C478.607 94.6 478.34 93.6667 478.34 92.4V72.9C478.34 71.8333 478.073 71 477.54 70.4C477.007 69.8 476.207 69.5 475.14 69.5H461.94V92.4C461.94 93.6667 461.64 94.6 461.04 95.2C460.507 95.7333 459.607 96 458.34 96ZM543.249 96H511.649C510.383 96 509.449 95.7333 508.849 95.2C508.316 94.6 508.049 93.6667 508.049 92.4V80.7C508.049 79.4333 508.316 78.5333 508.849 78C509.449 77.4 510.383 77.1 511.649 77.1H538.549C539.416 77.1 540.049 76.8333 540.449 76.3C540.916 75.7 541.149 75 541.149 74.2C541.149 73.0667 540.916 72.2333 540.449 71.7C540.049 71.1667 539.416 70.8667 538.549 70.8L523.549 68.7C518.883 68.0333 515.116 66.5 512.249 64.1C509.449 61.7 508.049 57.7 508.049 52.1V41.6C508.049 35.9333 509.883 31.6 513.549 28.6C517.216 25.5333 522.283 24 528.749 24H556.749C558.016 24 558.916 24.3 559.449 24.9C560.049 25.4333 560.349 26.3333 560.349 27.6V39.5C560.349 40.7667 560.049 41.7 559.449 42.3C558.916 42.8333 558.016 43.1 556.749 43.1H533.449C532.583 43.1 531.916 43.4 531.449 44C530.983 44.5333 530.749 45.2333 530.749 46.1C530.749 46.9667 530.983 47.7 531.449 48.3C531.916 48.9 532.583 49.2333 533.449 49.3L548.349 51.3C553.016 51.9667 556.783 53.5 559.649 55.9C562.516 58.3 563.949 62.3 563.949 67.9V78.4C563.949 84.0667 562.083 88.4333 558.349 91.5C554.683 94.5 549.649 96 543.249 96Z"
                fill="#AC7EF4"
            />
            <g clip-path="url(#clip0_1_52)">
                <path
                    d="M203.288 46.4374L205.85 56.0636H199.163C198.258 56.0636 197.707 57.0322 198.19 57.7765L208.325 73.421C209.035 74.5164 210.774 73.759 210.404 72.5154L207.489 62.7129L214.766 62.9063C215.692 62.9309 216.266 61.9379 215.764 61.1826L205.368 45.5511C204.659 44.4858 202.961 45.2094 203.288 46.4374Z"
                    fill="white"
                />
            </g>
            <path
                d="M5.41992 71.3184C5.41992 67.7051 5.95703 64.2871 7.03125 61.0645C8.13802 57.8092 9.76562 54.8633 11.9141 52.2266C14.0951 49.5573 17.0573 47.4414 20.8008 45.8789C24.5443 44.2839 28.8086 43.4863 33.5938 43.4863C36.4583 43.4863 40.0879 43.8281 44.4824 44.5117C47.2819 44.9674 49.2188 45.293 50.293 45.4883V120H41.8945V93.3887C36.8815 95.1139 32.1777 95.9766 27.7832 95.9766C21.0449 95.9766 15.625 93.4538 11.5234 88.4082C7.45443 83.3626 5.41992 77.666 5.41992 71.3184ZM13.7207 71.3184C13.7207 75.5827 15.0391 79.4889 17.6758 83.0371C20.3451 86.5527 23.7142 88.3105 27.7832 88.3105C31.5918 88.3105 36.263 87.2363 41.7969 85.0879V52.0801L38.7207 51.6895C36.8652 51.3639 35.1562 51.2012 33.5938 51.2012C27.0508 51.2012 22.1029 53.1543 18.75 57.0605C15.3971 60.9668 13.7207 65.7194 13.7207 71.3184ZM55.9141 45H64.9473L76.3242 84.5996L87.9453 45H96.3438L107.818 84.5996L119.342 45H128.326L112.604 95H103.033L92.0469 55.498L81.1094 95H71.6367L55.9141 45ZM134.973 95V45H143.469V95H134.973ZM134.973 32.6953V24.9805H143.469V32.6953H134.973ZM153.484 95V20H161.785V64.4824L180.34 45H191.766L174.48 63.0176L196.355 95H185.955L168.572 69.1211L161.785 76.2012V95H153.484Z"
                fill="#19B6F6"
            />
            <circle cx="139.5" cy="29.5" r="6.5" fill="#19B6F6" />
            <defs>
                <clipPath id="clip0_1_52">
                    <rect width="18" height="29" fill="white" transform="translate(198 45)" />
                </clipPath>
            </defs>
        </svg>
    );
});
