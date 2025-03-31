import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Vitality",
  description: "Comprehensive learning solutions designed to enhance patient-centered care.",
  keywords: [
    "Vitality", "learning solutions", "patient care", "medical education", "health training",
    "clinical skills", "professional development", "online courses", "e-learning", "medical training",
    "solutions صحية", "التعليم الطبي", "التدريب الطبي", "مهارات سريرية", "تطوير مهني",
    "التعليم الإلكتروني", "دورات طبية", "تحسين الرعاية", "أطباء", "ممرضين",
    "healthcare", "medical learning", "doctor training", "nursing courses", "clinical practice",
    "improve healthcare", "healthcare education", "interactive training", "online learning", "hospital training",
    "العناية بالمرضى", "تحسين الخدمات الصحية", "دورات طبية متخصصة", "تعليم عن بعد", "رعاية صحية متقدمة",
    "التطوير المهني الصحي", "أحدث الدورات الطبية", "تعلم إلكتروني طبي", "أكاديمية الصحة", "التدريب الصحي",
    "patient education", "continuing education", "professional healthcare", "medical certifications", "healthcare improvement",
    "الدورات التخصصية الطبية", "شهادات طبية", "التعليم المستمر", "التدريب المتقدم", "تطوير الرعاية الصحية"
  ],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Vitality",
    description: "Comprehensive learning solutions designed to enhance patient-centered care.",
    siteName: "Vitality",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Vitality Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Vitality",
    creator: "@Vitality",
    title: "Vitality",
    description: "Comprehensive learning solutions designed to enhance patient-centered care.",
    images: ["/assets/img/logo.png"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
