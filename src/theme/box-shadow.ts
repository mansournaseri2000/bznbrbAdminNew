import { colorPalette } from "./colorPalette";

export const Boxshadow = {
  shadow1: ` 0 0 0 1px color-mix(in oklab, ${colorPalette.gray[3]}, ${colorPalette.gray[3]} 25%),
      0 0 0 0.5px ${colorPalette.gray[3]},
      0 1px 1px 0 ${colorPalette.gray[3]},
      0 2px 1px -1px ${colorPalette.gray[2]},
      0 1px 3px 0 ${colorPalette.gray[2]}`,
};
