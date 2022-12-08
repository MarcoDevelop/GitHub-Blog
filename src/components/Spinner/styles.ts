import styled from 'styled-components'

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 2rem;
    height: 2rem;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;

    .sk-cube-grid {
      width: 45px;
      height: 45px;
      margin: 0px auto;
    }

    .sk-cube-grid .sk-cube {
      width: 33%;
      height: 33%;
      background-color: ${({ theme }) => theme.colors['base-subtitle']};
      float: left;
      -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    .sk-cube-grid .sk-cube1 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    .sk-cube-grid .sk-cube2 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    .sk-cube-grid .sk-cube3 {
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    .sk-cube-grid .sk-cube4 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    .sk-cube-grid .sk-cube5 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    .sk-cube-grid .sk-cube6 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    .sk-cube-grid .sk-cube7 {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    .sk-cube-grid .sk-cube8 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    .sk-cube-grid .sk-cube9 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }

    @-webkit-keyframes sk-cubeGridScaleDelay {
      0%,
      70%,
      100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
      }
      35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
      }
    }

    @keyframes sk-cubeGridScaleDelay {
      0%,
      70%,
      100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
      }
      35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
      }
    }
  }
`
