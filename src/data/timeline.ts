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
    period: "2020 – Present",
    roleEn: "Rental Agent",
    roleSv: "Uthyrningsagent",
    company: "SIXT Rent A Car",
    descEn: "Managing reservations, customer service, fleet administration, and sales in a fast-paced environment.",
    descSv: "Hanterar reservationer, kundservice, flottadministration och försäljning i en snabb miljö.",
    dotColor: "var(--color-coral)",
    badgeStyle: "background:var(--color-coral-light);color:var(--color-coral-dark);",
    side: "left",
  },
  {
    period: "2015 – 2020",
    roleEn: "Branch Manager",
    roleSv: "Filialchef",
    company: "Europcar",
    descEn: "Led a team, managed operations, and achieved consistent customer satisfaction scores above 95%.",
    descSv: "Ledde ett team, hanterade verksamheten och uppnådde konstant kundnöjdhet över 95%.",
    dotColor: "var(--color-gold)",
    badgeStyle: "background:var(--color-gold-light);color:var(--color-terracotta);",
    side: "right",
  },
  {
    period: "2012 – 2015",
    roleEn: "Administrative Receptionist",
    roleSv: "Administrativ Receptionist",
    company: "Quironsalud",
    descEn: "Managed patient reception, appointment scheduling, and administrative support in healthcare setting.",
    descSv: "Hanterade patientmottagning, tidsbokning och administrativt stöd i vårdmiljö.",
    dotColor: "#d946ef",
    badgeStyle: "background:#fae8ff;color:var(--color-terracotta);",
    side: "left",
  },
  {
    period: "2008 – 2012",
    roleEn: "Customer Service Agent",
    roleSv: "Kundserviceagent",
    company: "Air Europa",
    descEn: "Provided multilingual customer support, handled reservations, and resolved travel-related inquiries.",
    descSv: "Gav flerspråkig kundsupport, hanterade reservationer och löste reserelaterade frågor.",
    dotColor: "var(--color-rose)",
    badgeStyle: "background:var(--color-rose-light);color:var(--color-terracotta);",
    side: "right",
  },
];
