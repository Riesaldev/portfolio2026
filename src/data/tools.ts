export interface Tool {
  label: string;
  color: string;
}

export interface Ball {
  color: string;
  r: number;
}

export const tools: Tool[] = [
  { label: "AHM",          color: "#D4845A" },
  { label: "Amadeus",      color: "#C9963A" },
  { label: "NewHotel",     color: "#7A9D74" },
  { label: "Trello",       color: "#4E8EC4" },
  { label: "MasterYield",  color: "#C9963A" },
  { label: "Greenway",     color: "#5C9E55" },
  { label: "Office 365",   color: "#D05A3A" },
  { label: "Google WS",    color: "#E08C3A" },
  { label: "Canva",        color: "#C45A82" },
];

export const balls: Ball[] = [
  { color: "#D4845A", r: 22 },
  { color: "#4E8EC4", r: 18 },
  { color: "#7A9D74", r: 24 },
  { color: "#C45A82", r: 16 },
  { color: "#C9963A", r: 20 },
  { color: "#8B6FB5", r: 15 },
];
