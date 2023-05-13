import { proxy } from "valtio";

const state = proxy ({
  intro: true,
  color : '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './3d_Wear.png',
  fullDecal: './3d_Wear.png',
});

export default state;
