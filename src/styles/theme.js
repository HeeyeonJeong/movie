// Media query breakpoints (mobile-first)
const size = {
  mobile: "600px",
  TabletS: "768px",
  TabletM: "1024px",
  Desktop: "1200px",
};

const viewSize = {
  mobile: `(max-width: ${size.mobile})`,
  tabletSmall: `(min-width: ${size.TabletS})`,
  tabletMedium: `(min-width: ${size.TabletM})`,
  deskTop: `(min-width: ${size.Desktop})`,
};

const fontSize = {
  fontS: "10px",
  fontM: "20px",
  fontL: "30px",
  fontXL: "40px",
  fontXXL: "50px",
};

const paddingSize = {
  paddingS: "10px",
  paddingM: "20px",
  paddingL: "30px",
};

const marginSize = {
  marginS: "10px",
  marginM: "20px",
  marginL: "30px",
};

export const theme = {
  ...viewSize,
  ...fontSize,
  ...paddingSize,
  ...marginSize,
};
