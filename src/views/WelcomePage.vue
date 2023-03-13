<template>
    <div>
        <img src="../../public/favicon.svg" alt="Image">
        <h1>WELCOME</h1>
        <p>Click the link to explore the Project</p>
    </div>
</template>

<style scoped> div {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
 }

 img {
     filter: saturate(10%);
     width: 50%;
     margin: 40px;
     animation: rotate 3s linear 1s infinite;
 }

 @keyframes rotate {
     0% {
         transform: translateY(0px);
         filter: saturate(10%);
     }

     50% {
         transform: translateY(-30px);
         filter: saturate(100%);
     }

     100% {
         transform: translateY(0px);
         filter: saturate(10%);
     }
 }</style>