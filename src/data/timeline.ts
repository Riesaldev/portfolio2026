export interface TimelineEntry {
  period: string;
  roleEn: string;
  roleSv: string;
  company: string;
  descEn: string;
  descSv: string;
  dotColor: string;
  badgeStyle: string;
  side: "left" | "right";
}

export const timeline: TimelineEntry[] = [
  {
    period: "2022 – 2025",
    roleEn: "Receptionist",
    roleSv: "Receptionist",
    company: "various companies (Princess Hotels&Resort,Bahia Calma Beach,...)",
    descEn: "Managed reservations, customer service, billing, stop sales, check-in and check-out in a fast-paced environment.",
    descSv: "Hanterade reservationer, kundservice, fakturering, stop sales, in- och utcheckning i en snabb miljö.",
    dotColor: "var(--color-coral)",
    badgeStyle: "background:var(--color-coral-light);color:var(--color-coral-dark);",
    side: "left",
  },
  {
    period: "2019 – 2022",
    roleEn: "Customer Service Agent",
    roleSv: "Kundserviceagent",
    company: "Air Europa",
    descEn: "Provided multilingual customer support, handled reservations, and resolved travel-related inquiries.",
    descSv: "Gav flerspråkig kundsupport, hanterade reservationer och löste reserelaterade frågor.",
    dotColor: "var(--color-rose)",
    badgeStyle: "background:var(--color-rose-light);color:var(--color-terracotta);",
    side: "right",
  },
  {
    period: "2016 – 2019",
    roleEn: "Administrative Receptionist",
    roleSv: "Administrativ Receptionist",
    company: "Quironsalud",
    descEn: "Managed patient reception, appointment scheduling, simultaneous interpretation, and administrative support in healthcare setting.",
    descSv: "Hanterade patientmottagning, tidsbokning och administrativt stöd i vårdmiljö.",
    dotColor: "#d946ef",
    badgeStyle: "background:#fae8ff;color:var(--color-terracotta);",
    side: "left",
  },
  {
    period: "2013 – 2014 & 2018",
    roleEn: "Branch Manager",
    roleSv: "Filialchef",
    company: "Europcar",
    descEn: "Led a team, managed operations, fleet management and achieved consistent customer satisfaction scores above 95%.",
    descSv: "Ledde ett team, hanterade verksamheten, flottadministration och uppnådde konstant kundnöjdhet över 95%.",
    dotColor: "var(--color-gold)",
    badgeStyle: "background:var(--color-gold-light);color:var(--color-terracotta);",
    side: "right",
  },
];
