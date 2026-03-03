export interface Language {
  labelEn: string;
  labelSv: string;
  percent: number;
  gradient: string;
}

export const languages: Language[] = [
  {
    labelEn: "Spanish (Native)",
    labelSv: "Spanska (Modersmål)",
    percent: 100,
    gradient: "linear-gradient(to right,var(--color-coral),var(--color-terracotta))",
  },
  {
    labelEn: "Catalan (Native)",
    labelSv: "Katalanska (Modersmål)",
    percent: 100,
    gradient: "linear-gradient(to right,var(--color-coral),var(--color-terracotta))",
  },
  {
    labelEn: "English (Fluent)",
    labelSv: "Engelska (Flytande)",
    percent: 92,
    gradient: "linear-gradient(to right,var(--color-gold),var(--color-coral))",
  },
  {
    labelEn: "German (Advanced)",
    labelSv: "Tyska (Avancerad)",
    percent: 92,
    gradient: "linear-gradient(to right,var(--color-gold),var(--color-coral))",
  },
  {
    labelEn: "French (Intermediate)",
    labelSv: "Franska (Medel)",
    percent: 65,
    gradient: "linear-gradient(to right,var(--color-sage),var(--color-gold))",
  },
  {
    labelEn: "Swedish (Basic)",
    labelSv: "Svenska (Grundläggande)",
    percent: 15,
    gradient: "linear-gradient(to right,var(--color-sage),var(--color-gold))",
  },
];
