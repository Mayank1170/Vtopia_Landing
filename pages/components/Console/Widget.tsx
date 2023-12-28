import React, { forwardRef } from "react";

export const Widget = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function Catalsyt(props) {
    return (
      <svg
        width="200"
        height="198"
        viewBox="0 0 282 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H262.8C269.521 0 272.881 0 275.448 1.30792C277.706 2.4584 279.542 4.29417 280.692 6.55211C282 9.11905 282 12.4794 282 19.2V146H0V19.2Z"
          fill="#1A1A1A"
          fill-opacity="0.3"
        />
        <path
          d="M34.482 35H29.106V25.41H30.66V33.614H34.482V35ZM40.8325 30.156V33.348C40.8419 33.5533 40.8932 33.7073 40.9865 33.81C41.0892 33.9033 41.2432 33.964 41.4485 33.992L41.4065 35.154C40.6039 35.154 39.9832 34.9813 39.5445 34.636C38.7979 34.9813 38.0465 35.154 37.2905 35.154C35.8999 35.154 35.2045 34.412 35.2045 32.928C35.2045 32.2187 35.3912 31.7053 35.7645 31.388C36.1472 31.0707 36.7305 30.8793 37.5145 30.814L39.3205 30.66V30.156C39.3205 29.7827 39.2365 29.5213 39.0685 29.372C38.9099 29.2227 38.6719 29.148 38.3545 29.148C37.7572 29.148 37.0105 29.1853 36.1145 29.26L35.6665 29.288L35.6105 28.21C36.6279 27.9673 37.5612 27.846 38.4105 27.846C39.2692 27.846 39.8852 28.0327 40.2585 28.406C40.6412 28.77 40.8325 29.3533 40.8325 30.156ZM37.6965 31.892C37.0525 31.948 36.7305 32.298 36.7305 32.942C36.7305 33.586 37.0152 33.908 37.5845 33.908C38.0512 33.908 38.5459 33.8333 39.0685 33.684L39.3205 33.6V31.738L37.6965 31.892ZM42.1062 28H43.6042L45.0882 33.698H45.4662L46.9502 28H48.4622L45.8022 38.01H44.3042L45.1442 35H43.9402L42.1062 28ZM49.9798 28.756C50.4651 28.1493 51.2678 27.846 52.3878 27.846C53.5078 27.846 54.3058 28.1493 54.7818 28.756C55.2671 29.3627 55.5098 30.2727 55.5098 31.486C55.5098 32.6993 55.2764 33.614 54.8098 34.23C54.3431 34.846 53.5358 35.154 52.3878 35.154C51.2398 35.154 50.4324 34.846 49.9658 34.23C49.4991 33.614 49.2658 32.6993 49.2658 31.486C49.2658 30.2727 49.5038 29.3627 49.9798 28.756ZM51.1278 33.306C51.3424 33.6793 51.7624 33.866 52.3878 33.866C53.0131 33.866 53.4331 33.6793 53.6478 33.306C53.8624 32.9327 53.9698 32.3213 53.9698 31.472C53.9698 30.6227 53.8531 30.0207 53.6198 29.666C53.3958 29.3113 52.9851 29.134 52.3878 29.134C51.7904 29.134 51.3751 29.3113 51.1418 29.666C50.9178 30.0207 50.8058 30.6227 50.8058 31.472C50.8058 32.3213 50.9131 32.9327 51.1278 33.306ZM61.3516 28H62.8636V35H61.3516V34.566C60.6703 34.958 60.0403 35.154 59.4616 35.154C58.5003 35.154 57.8563 34.8973 57.5296 34.384C57.2029 33.8613 57.0396 32.9513 57.0396 31.654V28H58.5656V31.668C58.5656 32.508 58.6356 33.0727 58.7756 33.362C58.9156 33.6513 59.2423 33.796 59.7556 33.796C60.2596 33.796 60.7216 33.7027 61.1416 33.516L61.3516 33.432V28ZM68.5612 29.302H66.6292V32.382C66.6292 32.9513 66.6712 33.3293 66.7552 33.516C66.8392 33.7027 67.0538 33.796 67.3992 33.796L68.5472 33.754L68.6172 34.972C67.9918 35.0933 67.5158 35.154 67.1892 35.154C66.3958 35.154 65.8498 34.972 65.5512 34.608C65.2618 34.244 65.1172 33.558 65.1172 32.55V29.302H64.2212V28H65.1172V25.97H66.6292V28H68.5612V29.302ZM73.2389 35V25.41H75.9409L78.0829 32.9L80.2249 25.41H82.9409V35H81.3729V27.132H81.1629L78.8949 34.608H77.2709L75.0029 27.132H74.7929V35H73.2389ZM89.9374 33.74L90.3294 33.698L90.3574 34.832C89.2934 35.0467 88.3508 35.154 87.5294 35.154C86.4934 35.154 85.7468 34.8693 85.2894 34.3C84.8414 33.7307 84.6174 32.8207 84.6174 31.57C84.6174 29.0873 85.6301 27.846 87.6554 27.846C89.6154 27.846 90.5954 28.9147 90.5954 31.052L90.4974 32.144H86.1574C86.1668 32.7227 86.2928 33.1473 86.5354 33.418C86.7781 33.6887 87.2308 33.824 87.8934 33.824C88.5561 33.824 89.2374 33.796 89.9374 33.74ZM89.0974 30.968C89.0974 30.2773 88.9854 29.7967 88.7614 29.526C88.5468 29.246 88.1781 29.106 87.6554 29.106C87.1328 29.106 86.7501 29.2507 86.5074 29.54C86.2741 29.8293 86.1528 30.3053 86.1434 30.968H89.0974ZM93.6728 35H92.1468V28H93.6588V28.434C94.3401 28.042 94.9841 27.846 95.5908 27.846C96.5241 27.846 97.1588 28.112 97.4948 28.644C97.8401 29.1667 98.0128 30.0347 98.0128 31.248V35H96.5008V31.29C96.5008 30.534 96.4168 29.9973 96.2488 29.68C96.0901 29.3627 95.7588 29.204 95.2548 29.204C94.7788 29.204 94.3215 29.2973 93.8828 29.484L93.6728 29.568V35ZM104.115 28H105.627V35H104.115V34.566C103.434 34.958 102.804 35.154 102.225 35.154C101.264 35.154 100.62 34.8973 100.293 34.384C99.9667 33.8613 99.8034 32.9513 99.8034 31.654V28H101.329V31.668C101.329 32.508 101.399 33.0727 101.539 33.362C101.679 33.6513 102.006 33.796 102.519 33.796C103.023 33.796 103.485 33.7027 103.905 33.516L104.115 33.432V28Z"
          fill="white"
        />
        <g filter="url(#filter0_b_666_14002)">
          <path
            d="M114 29.1C114 25.7397 114 24.0595 114.654 22.7761C115.229 21.6471 116.147 20.7292 117.276 20.154C118.56 19.5 120.24 19.5 123.6 19.5H125.4C128.76 19.5 130.44 19.5 131.724 20.154C132.853 20.7292 133.771 21.6471 134.346 22.7761C135 24.0595 135 25.7397 135 29.1V30.9C135 34.2603 135 35.9405 134.346 37.2239C133.771 38.3529 132.853 39.2708 131.724 39.846C130.44 40.5 128.76 40.5 125.4 40.5H123.6C120.24 40.5 118.56 40.5 117.276 39.846C116.147 39.2708 115.229 38.3529 114.654 37.2239C114 35.9405 114 34.2603 114 30.9V29.1Z"
            fill="#F4F4F4"
            fill-opacity="0.08"
          />
          <path
            d="M120 27.75L124.5 32.25L129 27.75"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M123.6 20H125.4C127.088 20 128.325 20.0004 129.3 20.0801C130.27 20.1593 130.937 20.3144 131.497 20.5995C132.532 21.1268 133.373 21.9682 133.901 23.0031C134.186 23.5626 134.341 24.2303 134.42 25.1999C134.5 26.1754 134.5 27.4116 134.5 29.1V30.9C134.5 32.5884 134.5 33.8246 134.42 34.8001C134.341 35.7697 134.186 36.4374 133.901 36.9969C133.373 38.0318 132.532 38.8732 131.497 39.4005C130.937 39.6856 130.27 39.8407 129.3 39.9199C128.325 39.9996 127.088 40 125.4 40H123.6C121.912 40 120.675 39.9996 119.7 39.9199C118.73 39.8407 118.063 39.6856 117.503 39.4005C116.468 38.8732 115.627 38.0318 115.099 36.9969C114.814 36.4374 114.659 35.7697 114.58 34.8001C114.5 33.8246 114.5 32.5884 114.5 30.9V29.1C114.5 27.4116 114.5 26.1754 114.58 25.1999C114.659 24.2303 114.814 23.5626 115.099 23.0031C115.627 21.9682 116.468 21.1268 117.503 20.5995C118.063 20.3144 118.73 20.1593 119.7 20.0801C120.675 20.0004 121.912 20 123.6 20Z"
            stroke="#A9A9A9"
            stroke-opacity="0.14"
          />
        </g>
        <g filter="url(#filter1_bd_666_14002)">
          <path
            d="M24 64.8C24 60.3196 24 58.0794 24.8719 56.3681C25.6389 54.8628 26.8628 53.6389 28.3681 52.8719C30.0794 52 32.3196 52 36.8 52H245.2C249.68 52 251.921 52 253.632 52.8719C255.137 53.6389 256.361 54.8628 257.128 56.3681C258 58.0794 258 60.3196 258 64.8V75.2C258 79.6804 258 81.9206 257.128 83.6319C256.361 85.1372 255.137 86.3611 253.632 87.1281C251.921 88 249.68 88 245.2 88H36.8C32.3196 88 30.0794 88 28.3681 87.1281C26.8628 86.3611 25.6389 85.1372 24.8719 83.6319C24 81.9206 24 79.6804 24 75.2V64.8Z"
            fill="white"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <path
            d="M51.75 76.75L48.4875 73.4875M50.25 69.25C50.25 72.5637 47.5637 75.25 44.25 75.25C40.9363 75.25 38.25 72.5637 38.25 69.25C38.25 65.9363 40.9363 63.25 44.25 63.25C47.5637 63.25 50.25 65.9363 50.25 69.25Z"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M66.416 65.84C64.816 65.84 64.016 66.4427 64.016 67.648C64.016 68.32 64.1973 68.784 64.56 69.04C64.9333 69.2853 65.68 69.536 66.8 69.792C67.9307 70.0373 68.7307 70.3627 69.2 70.768C69.6693 71.1627 69.904 71.8187 69.904 72.736C69.904 75.008 68.7253 76.144 66.368 76.144C65.5893 76.144 64.6133 76.0533 63.44 75.872L62.864 75.792L62.992 74.768C64.4427 74.96 65.5467 75.056 66.304 75.056C67.8827 75.056 68.672 74.3147 68.672 72.832C68.672 72.2347 68.496 71.808 68.144 71.552C67.8027 71.2853 67.1573 71.0613 66.208 70.88C64.96 70.6133 64.0747 70.272 63.552 69.856C63.0293 69.4293 62.768 68.72 62.768 67.728C62.768 65.744 63.9573 64.752 66.336 64.752C67.1147 64.752 68.048 64.832 69.136 64.992L69.68 65.072L69.568 66.112C68.0853 65.9307 67.0347 65.84 66.416 65.84ZM77.4559 75.008L77.9199 74.96L77.9519 75.904C76.7359 76.0747 75.6959 76.16 74.8319 76.16C73.6799 76.16 72.8639 75.8293 72.3839 75.168C71.9039 74.496 71.6639 73.456 71.6639 72.048C71.6639 69.2427 72.7785 67.84 75.0079 67.84C76.0852 67.84 76.8905 68.144 77.4239 68.752C77.9572 69.3493 78.2239 70.2933 78.2239 71.584L78.1599 72.496H72.8799C72.8799 73.3813 73.0399 74.0373 73.3599 74.464C73.6799 74.8907 74.2345 75.104 75.0239 75.104C75.8239 75.104 76.6345 75.072 77.4559 75.008ZM77.0239 71.536C77.0239 70.5547 76.8639 69.8613 76.5439 69.456C76.2345 69.0507 75.7225 68.848 75.0079 68.848C74.3039 68.848 73.7705 69.0613 73.4079 69.488C73.0559 69.9147 72.8745 70.5973 72.8639 71.536H77.0239ZM85.934 70.416V74.512C85.966 74.9067 86.2753 75.1413 86.862 75.216L86.814 76.16C85.9713 76.16 85.3367 75.9467 84.91 75.52C83.95 75.9467 82.99 76.16 82.03 76.16C81.294 76.16 80.734 75.952 80.35 75.536C79.966 75.12 79.774 74.5227 79.774 73.744C79.774 72.9653 79.9713 72.3947 80.366 72.032C80.7607 71.6587 81.3793 71.4293 82.222 71.344L84.734 71.104V70.416C84.734 69.872 84.6167 69.4827 84.382 69.248C84.1473 69.0133 83.8273 68.896 83.422 68.896C82.5687 68.896 81.6833 68.9493 80.766 69.056L80.27 69.104L80.222 68.192C81.3953 67.9573 82.4353 67.84 83.342 67.84C84.2487 67.84 84.9047 68.048 85.31 68.464C85.726 68.88 85.934 69.5307 85.934 70.416ZM81.006 73.68C81.006 74.6613 81.4113 75.152 82.222 75.152C82.9473 75.152 83.662 75.0293 84.366 74.784L84.734 74.656V72.016L82.366 72.24C81.886 72.2827 81.5393 72.4213 81.326 72.656C81.1127 72.8907 81.006 73.232 81.006 73.68ZM88.4936 76V68H89.6776V69.088C90.6056 68.448 91.5816 68.0267 92.6056 67.824V69.04C92.1576 69.1253 91.6883 69.2587 91.1976 69.44C90.7176 69.6213 90.3496 69.7813 90.0936 69.92L89.6936 70.128V76H88.4936ZM97.0526 67.84C97.4046 67.84 98.002 67.904 98.8446 68.032L99.2286 68.08L99.1806 69.056C98.3273 68.96 97.698 68.912 97.2926 68.912C96.386 68.912 95.7673 69.1307 95.4366 69.568C95.1166 69.9947 94.9566 70.7947 94.9566 71.968C94.9566 73.1307 95.106 73.9413 95.4046 74.4C95.714 74.8587 96.3486 75.088 97.3086 75.088L99.1966 74.944L99.2446 75.936C98.2526 76.0853 97.5113 76.16 97.0206 76.16C95.7726 76.16 94.9086 75.84 94.4286 75.2C93.9593 74.56 93.7246 73.4827 93.7246 71.968C93.7246 70.4427 93.9806 69.376 94.4926 68.768C95.0046 68.1493 95.858 67.84 97.0526 67.84ZM102.421 76H101.221V64.512H102.421V68.448C103.275 68.0427 104.096 67.84 104.885 67.84C105.952 67.84 106.667 68.128 107.029 68.704C107.403 69.28 107.589 70.304 107.589 71.776V76H106.389V71.808C106.389 70.6987 106.277 69.9413 106.053 69.536C105.84 69.12 105.381 68.912 104.677 68.912C104.005 68.912 103.355 69.0347 102.725 69.28L102.421 69.392V76Z"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            d="M36.8 52.5H245.2C247.448 52.5 249.105 52.5004 250.414 52.6073C251.717 52.7138 252.632 52.9234 253.405 53.3175C254.816 54.0365 255.964 55.1839 256.683 56.5951C257.077 57.3685 257.286 58.2832 257.393 59.5863C257.5 60.8953 257.5 62.5515 257.5 64.8V75.2C257.5 77.4485 257.5 79.1047 257.393 80.4137C257.286 81.7168 257.077 82.6315 256.683 83.4049C255.964 84.8161 254.816 85.9635 253.405 86.6825C252.632 87.0766 251.717 87.2862 250.414 87.3927C249.105 87.4996 247.448 87.5 245.2 87.5H36.8C34.5515 87.5 32.8953 87.4996 31.5863 87.3927C30.2832 87.2862 29.3685 87.0766 28.5951 86.6825C27.1839 85.9635 26.0365 84.8161 25.3175 83.4049C24.9234 82.6315 24.7138 81.7168 24.6073 80.4137C24.5004 79.1047 24.5 77.4485 24.5 75.2V64.8C24.5 62.5515 24.5004 60.8953 24.6073 59.5863C24.7138 58.2832 24.9234 57.3685 25.3175 56.5951C26.0365 55.1839 27.1839 54.0365 28.5951 53.3175C29.3685 52.9234 30.2832 52.7138 31.5863 52.6073C32.8953 52.5004 34.5515 52.5 36.8 52.5Z"
            stroke="#A9A9A9"
            stroke-opacity="0.14"
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter2_b_666_14002)">
          <path
            d="M24 116.6C24 113.24 24 111.56 24.654 110.276C25.2292 109.147 26.1471 108.229 27.2761 107.654C28.5595 107 30.2397 107 33.6 107H36.4C39.7603 107 41.4405 107 42.7239 107.654C43.8529 108.229 44.7708 109.147 45.346 110.276C46 111.56 46 113.24 46 116.6V119.4C46 122.76 46 124.44 45.346 125.724C44.7708 126.853 43.8529 127.771 42.7239 128.346C41.4405 129 39.7603 129 36.4 129H33.6C30.2397 129 28.5595 129 27.2761 128.346C26.1471 127.771 25.2292 126.853 24.654 125.724C24 124.44 24 122.76 24 119.4V116.6Z"
            fill="white"
            fill-opacity="0.04"
          />
          <path
            d="M34.462 111.59C34.6349 111.24 34.7213 111.065 34.8386 111.009C34.9407 110.96 35.0593 110.96 35.1614 111.009C35.2787 111.065 35.3652 111.24 35.538 111.59L37.178 114.912C37.2291 115.016 37.2546 115.067 37.2919 115.108C37.3249 115.143 37.3645 115.172 37.4085 115.192C37.4582 115.216 37.5152 115.224 37.6293 115.241L41.2977 115.777C41.684 115.833 41.8772 115.861 41.9666 115.956C42.0444 116.038 42.0809 116.151 42.0661 116.263C42.0491 116.392 41.9093 116.528 41.6296 116.8L38.9761 119.385C38.8934 119.465 38.852 119.506 38.8253 119.554C38.8017 119.596 38.7865 119.643 38.7807 119.691C38.7741 119.745 38.7838 119.802 38.8034 119.916L39.4295 123.567C39.4955 123.952 39.5285 124.144 39.4665 124.258C39.4125 124.358 39.3165 124.427 39.2053 124.448C39.0775 124.472 38.9046 124.381 38.5588 124.199L35.2793 122.474C35.1771 122.421 35.126 122.394 35.0722 122.383C35.0245 122.374 34.9755 122.374 34.9278 122.383C34.874 122.394 34.8229 122.421 34.7207 122.474L31.4412 124.199C31.0954 124.381 30.9226 124.472 30.7947 124.448C30.6835 124.427 30.5875 124.358 30.5336 124.258C30.4715 124.144 30.5045 123.952 30.5706 123.567L31.1967 119.916C31.2162 119.802 31.2259 119.745 31.2193 119.691C31.2135 119.643 31.1983 119.596 31.1747 119.554C31.148 119.506 31.1067 119.465 31.0239 119.385L28.3704 116.8C28.0907 116.528 27.9509 116.392 27.9339 116.263C27.9191 116.151 27.9557 116.038 28.0334 115.956C28.1228 115.861 28.316 115.833 28.7023 115.777L32.3707 115.241C32.4848 115.224 32.5419 115.216 32.5915 115.192C32.6355 115.172 32.6751 115.143 32.7081 115.108C32.7454 115.067 32.7709 115.016 32.822 114.912L34.462 111.59Z"
            stroke="#FAFFFE"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.6 107.5H36.4C38.0884 107.5 39.3246 107.5 40.3001 107.58C41.2697 107.659 41.9374 107.814 42.4969 108.099C43.5318 108.627 44.3732 109.468 44.9005 110.503C45.1856 111.063 45.3407 111.73 45.4199 112.7C45.4996 113.675 45.5 114.912 45.5 116.6V119.4C45.5 121.088 45.4996 122.325 45.4199 123.3C45.3407 124.27 45.1856 124.937 44.9005 125.497C44.3732 126.532 43.5318 127.373 42.4969 127.901C41.9374 128.186 41.2697 128.341 40.3001 128.42C39.3246 128.5 38.0884 128.5 36.4 128.5H33.6C31.9116 128.5 30.6754 128.5 29.6999 128.42C28.7303 128.341 28.0626 128.186 27.5031 127.901C26.4682 127.373 25.6268 126.532 25.0995 125.497C24.8144 124.937 24.6593 124.27 24.5801 123.3C24.5004 122.325 24.5 121.088 24.5 119.4V116.6C24.5 114.912 24.5004 113.675 24.5801 112.7C24.6593 111.73 24.8144 111.063 25.0995 110.503C25.6268 109.468 26.4682 108.627 27.5031 108.099C28.0626 107.814 28.7303 107.659 29.6999 107.58C30.6754 107.5 31.9116 107.5 33.6 107.5Z"
            stroke="#A9A9A9"
            stroke-opacity="0.1"
          />
        </g>
        <path
          d="M56.708 122.132C55.508 122.132 54.692 121.8 54.26 121.136C53.836 120.472 53.624 119.38 53.624 117.86C53.624 116.34 53.84 115.26 54.272 114.62C54.704 113.972 55.516 113.648 56.708 113.648C57.42 113.648 58.204 113.748 59.06 113.948L59.012 115.028C58.292 114.9 57.572 114.836 56.852 114.836C56.132 114.836 55.644 115.052 55.388 115.484C55.132 115.908 55.004 116.712 55.004 117.896C55.004 119.072 55.128 119.876 55.376 120.308C55.624 120.732 56.108 120.944 56.828 120.944C57.548 120.944 58.276 120.884 59.012 120.764L59.048 121.868C58.224 122.044 57.444 122.132 56.708 122.132ZM60.6339 116.648C61.0499 116.128 61.7379 115.868 62.6979 115.868C63.6579 115.868 64.3419 116.128 64.7499 116.648C65.1659 117.168 65.3739 117.948 65.3739 118.988C65.3739 120.028 65.1739 120.812 64.7739 121.34C64.3739 121.868 63.6819 122.132 62.6979 122.132C61.7139 122.132 61.0219 121.868 60.6219 121.34C60.2219 120.812 60.0219 120.028 60.0219 118.988C60.0219 117.948 60.2259 117.168 60.6339 116.648ZM61.6179 120.548C61.8019 120.868 62.1619 121.028 62.6979 121.028C63.2339 121.028 63.5939 120.868 63.7779 120.548C63.9619 120.228 64.0539 119.704 64.0539 118.976C64.0539 118.248 63.9539 117.732 63.7539 117.428C63.5619 117.124 63.2099 116.972 62.6979 116.972C62.1859 116.972 61.8299 117.124 61.6299 117.428C61.4379 117.732 61.3419 118.248 61.3419 118.976C61.3419 119.704 61.4339 120.228 61.6179 120.548ZM66.7692 122V116H68.0652V116.72C68.7452 116.28 69.4252 115.996 70.1052 115.868V117.176C69.4172 117.312 68.8292 117.488 68.3412 117.704L68.0772 117.812V122H66.7692ZM75.4262 120.92L75.7622 120.884L75.7862 121.856C74.8742 122.04 74.0662 122.132 73.3622 122.132C72.4742 122.132 71.8342 121.888 71.4422 121.4C71.0582 120.912 70.8662 120.132 70.8662 119.06C70.8662 116.932 71.7342 115.868 73.4702 115.868C75.1502 115.868 75.9902 116.784 75.9902 118.616L75.9062 119.552H72.1862C72.1942 120.048 72.3022 120.412 72.5102 120.644C72.7182 120.876 73.1062 120.992 73.6742 120.992C74.2422 120.992 74.8262 120.968 75.4262 120.92ZM74.7062 118.544C74.7062 117.952 74.6102 117.54 74.4182 117.308C74.2342 117.068 73.9182 116.948 73.4702 116.948C73.0222 116.948 72.6942 117.072 72.4862 117.32C72.2862 117.568 72.1822 117.976 72.1742 118.544H74.7062ZM84.8407 122H80.2327V113.78H81.5647V120.812H84.8407V122ZM90.308 117.848V120.584C90.316 120.76 90.36 120.892 90.44 120.98C90.528 121.06 90.66 121.112 90.836 121.136L90.8 122.132C90.112 122.132 89.58 121.984 89.204 121.688C88.564 121.984 87.92 122.132 87.272 122.132C86.08 122.132 85.484 121.496 85.484 120.224C85.484 119.616 85.644 119.176 85.964 118.904C86.292 118.632 86.792 118.468 87.464 118.412L89.012 118.28V117.848C89.012 117.528 88.94 117.304 88.796 117.176C88.66 117.048 88.456 116.984 88.184 116.984C87.672 116.984 87.032 117.016 86.264 117.08L85.88 117.104L85.832 116.18C86.704 115.972 87.504 115.868 88.232 115.868C88.968 115.868 89.496 116.028 89.816 116.348C90.144 116.66 90.308 117.16 90.308 117.848ZM87.62 119.336C87.068 119.384 86.792 119.684 86.792 120.236C86.792 120.788 87.036 121.064 87.524 121.064C87.924 121.064 88.348 121 88.796 120.872L89.012 120.8V119.204L87.62 119.336ZM91.4237 116H92.7077L93.9797 120.884H94.3037L95.5757 116H96.8717L94.5917 124.58H93.3077L94.0277 122H92.9957L91.4237 116ZM98.1965 116.648C98.6125 116.128 99.3005 115.868 100.261 115.868C101.221 115.868 101.905 116.128 102.313 116.648C102.729 117.168 102.937 117.948 102.937 118.988C102.937 120.028 102.737 120.812 102.337 121.34C101.937 121.868 101.245 122.132 100.261 122.132C99.2765 122.132 98.5845 121.868 98.1845 121.34C97.7845 120.812 97.5845 120.028 97.5845 118.988C97.5845 117.948 97.7885 117.168 98.1965 116.648ZM99.1805 120.548C99.3645 120.868 99.7245 121.028 100.261 121.028C100.797 121.028 101.157 120.868 101.341 120.548C101.525 120.228 101.617 119.704 101.617 118.976C101.617 118.248 101.517 117.732 101.317 117.428C101.125 117.124 100.773 116.972 100.261 116.972C99.7485 116.972 99.3925 117.124 99.1925 117.428C99.0005 117.732 98.9045 118.248 98.9045 118.976C98.9045 119.704 98.9965 120.228 99.1805 120.548ZM107.968 116H109.264V122H107.968V121.628C107.384 121.964 106.844 122.132 106.348 122.132C105.524 122.132 104.972 121.912 104.692 121.472C104.412 121.024 104.272 120.244 104.272 119.132V116H105.58V119.144C105.58 119.864 105.64 120.348 105.76 120.596C105.88 120.844 106.16 120.968 106.6 120.968C107.032 120.968 107.428 120.888 107.788 120.728L107.968 120.656V116ZM114.171 117.116H112.515V119.756C112.515 120.244 112.551 120.568 112.623 120.728C112.695 120.888 112.879 120.968 113.175 120.968L114.159 120.932L114.219 121.976C113.683 122.08 113.275 122.132 112.995 122.132C112.315 122.132 111.847 121.976 111.591 121.664C111.343 121.352 111.219 120.764 111.219 119.9V117.116H110.451V116H111.219V114.26H112.515V116H114.171V117.116ZM119.504 117.236C118.56 117.108 117.876 117.044 117.452 117.044C117.028 117.044 116.732 117.096 116.564 117.2C116.404 117.296 116.324 117.452 116.324 117.668C116.324 117.884 116.412 118.036 116.588 118.124C116.772 118.212 117.196 118.316 117.86 118.436C118.532 118.548 119.008 118.728 119.288 118.976C119.568 119.224 119.708 119.664 119.708 120.296C119.708 120.928 119.504 121.392 119.096 121.688C118.696 121.984 118.108 122.132 117.332 122.132C116.844 122.132 116.228 122.064 115.484 121.928L115.112 121.868L115.16 120.776C116.12 120.904 116.812 120.968 117.236 120.968C117.66 120.968 117.96 120.916 118.136 120.812C118.32 120.708 118.412 120.536 118.412 120.296C118.412 120.056 118.324 119.892 118.148 119.804C117.98 119.708 117.568 119.608 116.912 119.504C116.264 119.392 115.788 119.22 115.484 118.988C115.18 118.756 115.028 118.332 115.028 117.716C115.028 117.1 115.236 116.64 115.652 116.336C116.076 116.032 116.616 115.88 117.272 115.88C117.784 115.88 118.412 115.944 119.156 116.072L119.528 116.144L119.504 117.236Z"
          fill="white"
        />
        <g filter="url(#filter3_b_666_14002)">
          <path
            d="M239.5 115.75L244 120.25L248.5 115.75"
            stroke="#FAFFFE"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H270C276.627 0 282 5.37258 282 12V146H0V12Z"
          fill="url(#paint0_linear_666_14002)"
        />
        <defs>
          <filter
            id="filter0_b_666_14002"
            x="50"
            y="-44.5"
            width="149"
            height="149"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_666_14002"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_666_14002"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_bd_666_14002"
            x="-60"
            y="-32"
            width="402"
            height="204"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="42" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_666_14002"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1.18584"
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_666_14002"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_666_14002"
              result="effect2_dropShadow_666_14002"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_666_14002"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_666_14002"
            x="-40"
            y="43"
            width="150"
            height="150"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_666_14002"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_666_14002"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_b_666_14002"
            x="166"
            y="40"
            width="156"
            height="156"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_666_14002"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_666_14002"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_666_14002"
            x1="141"
            y1="73"
            x2="141"
            y2="135.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);