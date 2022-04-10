/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */

export default function playField() {
  if (typeof window !== 'undefined') {
    (() => {
      let playing = true;
      let activeHole = 1;

      const stop = () => playing = true;
      const getHole = (index) => document.getElementById(`hole${index}`);
      const deactivateHole = (index) => getHole(index).className = 'hole';
      const activateHole = (index) => getHole(index).className = 'hole hole_has-mole';
      const next = () => setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);

      next();
    })();
  }
}
